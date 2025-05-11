import React, { useContext, useEffect, useState } from 'react'
import '../../styles/AccountSettings.css'
import ImageUploader from '../../components/Shared/ui/ImageUploader'
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

const API_URL = "http://localhost:5000/users";

function AccountSettings() {
    const location = useLocation()
    const [userData, setUserData] = useState(location.state?.userInfo || {})
    const [image, setImage] = useState(null);

    const { user } = useContext(UserContext);

    useEffect(() => {
        if (!location.state?.userInfo) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser && storedUser.id) setUserData(storedUser);
            else console.log("No user found in local storage");
        }
    }, [location.state]);
    const updateUser = async (id) => {
        try {
            const updateData = { ...userData, image: image || userData?.image };
            const response = await axios.put(`${API_URL}/${id}`, updateData);
            setUserData(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload();
            alert("Profile updated successfully!");
        } catch (error) {
            alert("Failed to update profile.");
            console.error("Error updating user:", error.response?.data || error.message || error);
            console.log("Error in Id", id);

        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setUserData({});
            localStorage.removeItem("user");
            alert("Profile deleted successfully!");
        } catch (error) {
            alert("Failed to delete profile.");
        }
    }

    const removeImage = async (id) => {
        try {
            const updatedUser = { ...userData, image: "" };
            const response = await axios.put(`${API_URL}/${id}`, updatedUser);
            setUserData(response.data);
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.reload();
            alert("Profile image removed successfully!");
        } catch (error) {
            alert("Failed to remove profile image.");
            console.error("Image removal error:", error.response?.data || error.message);
        }
    };


    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleBack = () => {
        window.history.back();
    }



    return (
        <div>
            <div className="close-booking">
                <i className="fa fa-arrow-left" aria-hidden="true" style={{ color: '#d3d3d3' }} onClick={handleBack}></i>
                <h4>Review Your Booking</h4>
            </div>
            <div className="settings-container">
                <h1>Account Settings</h1>
                <ImageUploader setImage={setImage} image={image || userData?.image} />
                <span
                    className="material-symbols-outlined"
                    onClick={() => removeImage(userData?.id)}
                    style={{ cursor: "pointer", color: "red" }}
                    title="Remove Profile Image">
                    delete
                </span>
                <form className="settings-container-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Update Your Email"
                        value={userData?.email}
                        required
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="number"
                        placeholder="Update Your Contact Number"
                        maxLength={10}
                        minLength={10}
                        value={userData?.number}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Update Your Username"
                        value={userData?.name}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Change Your Password"
                        value={userData?.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Confirm Your Password"
                        value={userData?.password}
                        onChange={handleChange}
                    />

                    <div className="settings-buttons">
                        <button type="submit" className="btns btns--width--extra btns--theme--violet"
                            onClick={(e) => {
                                e.preventDefault();
                                updateUser(userData?.id || user.id)
                                console.log("userData has Id", userData.id);

                            }}>
                            Update
                        </button>
                        <button type="button" className="btns btns--width--extra btns--theme--red"
                            onClick={(e) => {
                                e.preventDefault();
                                deleteUser(userData?.id)
                            }}>
                            Delete
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default AccountSettings