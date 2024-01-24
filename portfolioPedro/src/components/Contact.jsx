import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [weatherData, setWeatherData] = useState(null);
  const city = 'Montreal'; // Replace with the desired city

  // Function to convert temperature from Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed();
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = '8d939fb9eb599c7e40c6da34b122319f';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error('Error fetching weather data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  return (
    <div>
      <div name='contact' className='w-full h-screen bg-[#0a192f] mt-[-100px] flex justify-center items-center p-4'>
        {/* Integration with getform.io */}
        <form
          method='POST'
          action='https://getform.io/f/57f6640f-4f34-456e-946c-ed17e608942a'
          className='flex flex-col max-w-[600px] w-full'
        >
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ccd6f6] text-white'>Contact</p>
            <p className='text-white py-4'>Submit the form below or send me an email - pedrodanielcabrita@gmail.com</p>
          </div>
          <input className='p-2' type='text' placeholder='Name' name='name' />
          <input className='my-4 p-2' type='email' placeholder='Email' name='email' />
          <textarea className='p-2' name='message' placeholder='Message' cols='30' rows='10'></textarea>
          <button className='text-white border-2 hover:bg-[#ccd6f6] hover:border-[#ccd6f6] px-4 py-3 my-8 mx-auto flex items-center'>
            Let's collaborate!
          </button>
        </form>
      </div>

      <div className='text-[#0a192f] text-center bg-yellow-500 p-4'>
        <h2>Weather in {city}</h2>
        {weatherData && (
          <div>
            <p>Temperature: {kelvinToCelsius(weatherData.main.temp)} &deg;C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;