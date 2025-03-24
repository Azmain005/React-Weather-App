import React from 'react';

const Searchbar = ({fetchWeather}) => {
  const [city, setCity] = React.useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim) {
        fetchWeather(city);
        setCity('');
    }
  }
  return (
    <form action="" className='flex ' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter City Name: ' value={city} onChange={(e) => setCity(e.target.value)} className='flex-1 p-2 border border-gray-300 rounded-l-lg border-r-0 outline-none'/>
        <button type='submit' className='bg-blue-500 border rounded-r-lg border-l-0 cursor-pointer p-2 hover:bg-blue-600 text-white'>
            Search
        </button>
    </form>
  )
}

export default Searchbar