import React, { useEffect, useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/LoginSignup.css";
import axios from "axios";
import AlertBox from "../../components/Shared/ui/AlertBox";

const reducer = (state, action) => {
    switch (action) {
        case "LOGIN":
            return { isLogin: true };
        case "REGISTER":
            return { isLogin: false };
        default:
            return state;
    }
};

const API_URL = "http://localhost:5000/users";

function LoginSignup() {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [state, dispatch] = useReducer(reducer, { isLogin: true });
    const [closePopup, setClosePopup] = useState(false);
    const [closeWrongPopup, setWrongClosePopup] = useState(false);
    const [navigatePopup, setNavigatePopup] = useState(false);

    const navigate = useNavigate();

    const fetchUsers = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const addUser = async (e) => {
        e.preventDefault();

        const userId = users ? users.length + 1 : 1;

        try {
            const newUser = {
                id: userId,
                name: formData.name,
                email: formData.email,
                password: formData.password,
                number: formData.number,
            };

            const response = await axios.post(API_URL, newUser, {
                headers: { "Content-Type": "application/json" },
            });

            setUsers([...users, response.data]);
            setFormData({ name: "", email: "", password: "", number: "" });
            setNavigatePopup(true);
            setTimeout(() => {
                setNavigatePopup(false);
                navigate("/loginsignup");
            }, 2000);
            dispatch("LOGIN");
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {

        e.preventDefault();
        console.log("Login button clicked");

        const user = users.find((user) => user.email === formData.email && user.password === formData.password);
        const wrongInfo = users.find((user) => user.email === formData.email && user.password !== formData.password || user.email !== formData.email && user.password === formData.password);

        if (user) {
            console.log("Email Id Found navigating to dashboard");
            navigate("/profile");
            localStorage.setItem("user", JSON.stringify(user));
        }
        else if (wrongInfo) {
            console.log("Credenstials are wrong");
            setWrongClosePopup(true)

        }
        else {
            console.log("Email Id Not Found");
            dispatch("REGISTER")
            setClosePopup(true)
        }

    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="login">
            <div className="login-container">
                {state.isLogin ? (
                    <div>
                        <h1>Login</h1>
                        <form className="login-container-form" onSubmit={handleLogin}>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Your Email / User Id"
                                value={formData?.email}
                                required
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                value={formData?.password}
                                required
                                onChange={handleChange}
                            />
                            <Link to="#">Forgot Password?</Link>
                            <button type="submit" className="btns btns--width--extra btns--theme--violet">
                                Login
                            </button>
                        </form>
                    </div>
                ) : (
                    <div>
                        <h1>Register</h1>
                        <form className="login-container-form" onSubmit={addUser}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData?.email}
                                required
                                onChange={handleChange}
                            />
                            <input
                                type="number"
                                name="number"
                                placeholder="Enter Your Contact Number"
                                maxLength={10}
                                minLength={10}
                                value={formData?.number}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Username"
                                value={formData?.name}
                                required
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter Your Password"
                                value={formData?.password}
                                required
                                onChange={handleChange}
                            />
                            <button type="submit" className="btns btns--width--extra btns--theme--violet">
                                Sign Up
                            </button>
                        </form>
                    </div>
                )}

                <p>
                    {state.isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <Link onClick={() => dispatch(state.isLogin ? "REGISTER" : "LOGIN")}>
                        {state.isLogin ? "Register" : "Login"}
                    </Link>
                </p>

                {closePopup && (
                    <AlertBox message={"Sorry We Couln't Find You (*>﹏<*).\n Please Register Your Account"}
                        onOk={() => setClosePopup(false)} onCancel={() => setClosePopup(false)}/>)
                    || closeWrongPopup && (<AlertBox message={"Invalid Email or Password >_<"}
                        onCancel={() => setWrongClosePopup(false)} />)
                    || navigatePopup && (<AlertBox message={"You are registered now, please Login ^_^"}
                        onCancel={() => setNavigatePopup(false)} />)}
            </div>
        </div>
    );
}

export default LoginSignup;