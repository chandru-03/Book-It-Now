import React from 'react'
import { useNavigate } from 'react-router-dom'
import Buttons from '../../components/Shared/ui/Buttons'

function AdminDashBoard() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='container'>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',marginTop:'10rem' }}>
                    <h2 style={{ color: '#e1e1e1' }}>Add Cinema</h2>
                    <Buttons buttonSize={'btns--medium'} buttonStyle={'btns--theme--violet'} type={'button'} onClick={()=>navigate('/addcinema')}>
                        Add Cinema
                    </Buttons>
                </div>
            </div>
        </div>
    )
}

export default AdminDashBoard