import React, { useState } from 'react';
import '../../styles/Admin.css';
import CinemaList from '../../components/Shared/cinemalist/CinemaList';
import InputText from '../../components/Shared/ui/InputText';

function AddCinemaForm() {
    const [cinemaList, setCinemaList] = useState(CinemaList);
    const [addCinema, setAddCinema] = useState({
        name: '',
        location: '',
        address: '',
        timings: [],
        screenType: [],
        type: '',
        ticketPrice: [],
        firstClass: '',
        secondClass: '',
        seatPlacements: [],
        parking: '',
        Mticket: '',
        FoodCounter: '',
    });

    console.log('Debug', cinemaList);
    console.log('Cinema List',CinemaList);
    

    const fields = [
        'name', 'location', 'address', 'timings',
        'screenType', 'type', 'ticketPrice', 'firstClass',
        'secondClass', 'seatPlacements', 'parking', 'Mticket',
        'FoodCounter',
    ];

    const handleChange = (e) => {
        setAddCinema({ ...addCinema, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const lastId = cinemaList[cinemaList.length - 1]?.id || 0;
        const id = lastId + 1;
        const newCinema = { ...addCinema, id };

        console.log('Added Cinema', newCinema);
        setCinemaList(prevList => [...prevList, newCinema]);

        setAddCinema({
            name: '',
            location: '',
            address: '',
            timings: [],
            screenType: [],
            type: '',
            ticketPrice: [],
            firstClass: '',
            secondClass: '',
            seatPlacements: [],
            parking: '',
            Mticket: '',
            FoodCounter: '',
        });
    };

    return (
        <div>
            <div className='add-cinema-container'>
                <h2>Add Cinema to Chennai</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <div key={index}>
                            <p>{field}:</p>
                            <InputText name={field} value={addCinema[field]} onChange={handleChange} />
                        </div>
                    ))}
                    <button className='btns--medium btns--theme--violet' style={{ width: '100px', marginTop: '20px' }}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddCinemaForm;
