import React from 'react'

function Card() {
    return (
        <>
            <div className="card">
                <div className="content">
                    <div className="location" style={{fontSize:"40px"}}>
                        Location
                    </div>
                    <div className="time" style={{fontSize:"25px"}}>
                        Time
                    </div>
                    <div className="temp" style={{fontSize:"40px"}}>
                        Tempreture
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card