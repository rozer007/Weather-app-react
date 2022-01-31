import React, { useEffect, useState } from 'react';

const WeatherBox = () => {

  const [city,setCity]=useState('Noida');
  const [search,setSearch]=useState('Noida');

  const onChange=(val)=>{
    setCity(val)
  }

  useEffect(()=>{
    const fetchApi= async()=>{
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ad6c33aee94c0a56b485f448955c43cd`
      const response = await fetch(url);
      const jsonRes= await response.json();
      // console.log(jsonRes)

      setSearch(jsonRes.main);
      console.log(search);
    }

    fetchApi();
  },[city]);

  return (
    <>
      <div className='box'>
        <div className='input'>
          <input
          type="search"
          value={city}
          className='input-field'
          onChange={(e)=>onChange(e.target.value)}/>
        </div>

        {!search?(<h1 className='noData'>No Data Found</h1>):
          (
            <div className='info'>
              <h2 className='location'>
                <i className="far fa-sun"></i>
                <i className="fas fa-cloud"></i>
                {city}
              </h2>
              
              <h1 className='temperature'>
                {search.temp}°C
              </h1>

              <h3 className='minmax'>
                Min : {search.temp_min}°C| Max : {search.temp_max}°C
              </h3>
            </div>
          )}
      </div>
    </>
  )};

export default WeatherBox;
