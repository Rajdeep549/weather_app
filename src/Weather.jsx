import React,{useEffect, useState} from 'react'
import './index.css'

const Weather = () => {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState("bhavnagar")

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=141556be3a4c258e965a4acb032a50dd `;
            const response=await fetch(url);
            const responsejsn= await response.json();   
            setcity(responsejsn.main);

        }

        fetchApi();
    },[search])
  return (
    <>
    <div className='box'>
        <div className='inputData'>
            <input type="search" className='inputFeild' 
                onChange={(event)=>{setsearch(event.target.value)
                }}    
                value={search}
            />
        </div>
{!city?(<p>No data Found</p>):(<><div className='info'>
        <h2 className='location'>
        <i className="fa fa-street-view" ></i>{search}
        </h2>
        <h1 className='temp'>{city.temp} cel°</h1>
        <h3 className='tempmin_max'>{city.temp_min} cel°|{city.temp_min} cel°</h3>
    </div>

    <div className='wave1'></div>
    <div className='wave2'></div>
    <div className='wave3'></div>
</>)}
    
    </div>

    </>
  )
}

export default Weather