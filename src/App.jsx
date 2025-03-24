import axios from 'axios';
import React from 'react';
import video from './assets/video.mp4';
import Searchbar from "./components/Searchbar";
import WeatherCard from './components/WeatherCard';
function App() {
  const [weather, setWeather] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;
  const fetchWeather = async (city) => {
    setLoading(true);
    setError('');
    try {
      const url = `${API_URL}?q=${city}&APPID=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err){
      if (err.response && err.response.status === 404) {
        setError('City Not Found. Please try with a valid city name.');
      } else {
        setError('An error occurred. Please try again later.')
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden">
      <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover'>
        <source src={video} type='video/mp4' />
        Your browser does not support the video...
      </video>
      <div className='absolute top-0 left-0 w-full h-full bg-black/20 z-1'></div>
      <div className="bg-black/70 text-white rounded-lg shadow-lg p-8 max-w-md w-full z-10">
      <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
      <Searchbar fetchWeather={fetchWeather} />
      {loading && <p className='text-center mt-4'>Loading...</p>}
      {error && <p className='text-red-500 text-center mt-4 font-semibold'>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  )
}

export default App
