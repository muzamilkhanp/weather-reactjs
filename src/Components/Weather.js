import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [zipCode, setZipCode] = useState('');
    const [error, setError] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => { }, [zipCode, error]);

    const fetchZipCodeWeatherData = () => {
        if (zipCode.length !== 5) {
            setData([])
            return setError('Zip code should be 5 or 6 digits!')
        }

        axios.get(`http://localhost:4000/weather/${zipCode}`)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    // setZipCode('')
                    setError('')
                    setData(response.data);
                } else {
                    setError('')
                    console.log("Somthing went wrong ")
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="body">
            <div className="card">
                <h2>How's the Weather?</h2>
                <p className='error'>{error}</p>
                <input
                    type="text"
                    placeholder="Enter Zipcode. Ex: 90001"
                    onChange={(e) => setZipCode(e.target.value)}
                />
                <button onClick={fetchZipCodeWeatherData}>Submit</button>

                {data?.data && (
                    <>
                        {data?.cache && (<p className='warning'><i className="fas fa-warning"></i>{' '}{data?.message}</p>)}
                        <div className="data">
                            <div className="text-left">
                                <p><i className="fas fa-home"></i> City: {data.data.name}</p>
                                <p><i className="fas fa-thermometer-half"></i> Temp: {data.data.main?.temp}</p>
                            </div>
                            <div className="text-left">
                                <p><i className="fas fa-thermometer-full"></i> Max Temp: {data.data.main?.temp_max}</p>
                                <p><i className="fas fa-thermometer-empty"></i> Min Temp: {data.data.main?.temp_min}</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
};

export default Weather;