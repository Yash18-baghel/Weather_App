import React, { useEffect, useState } from 'react';
import { Search } from './components/Search'
import { Weather } from './components/Weather'
import axios from 'axios';
function App() {

  const [text, setText] = useState('')
  const [weather, setWeather] = useState({})
  const [isLoading, setisLoading] = useState(true)
  const [isfound, setIsfound] = useState(true)

  function getFromSever(url) {
    setisLoading(true)
    console.log(url)
    try {
      
      axios.get(url)
      .then(res => {
        console.log('res', res);
        if (res.status === 404) {
          throw res.status;
        }

        setWeather(res.data);
        setisLoading(false)
        setIsfound(true)
      }).catch(err => {
       setIsfound(false)
       setisLoading(false)

      })
    }
    catch (err) {
      setIsfound(false)
      setisLoading(false)
    }
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getFromSever(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=240c128ac687fec539b91c01a0f58fda`)
    });
  }, [])
  useEffect(() => {
    if (text.length > 0) {
      getFromSever(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=240c128ac687fec539b91c01a0f58fda`)
    }
  }, [text])

  return (
    <>
      <div className="cards">

        <Search searchterm={(text) => setText(text)} />
        {!isfound?(<div className="text-center mx-auto">No City Found</div>):''}
        { (Object.entries(weather).length > 3 && isfound && !isLoading)  && (<Weather weather={weather} />) }
        {isLoading && (
          <h1>Loading....</h1>
        )}
      </div>
    </>
  );
}

export default App;
