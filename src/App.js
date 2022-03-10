import React, { useEffect, useState } from "react";
import axios from "axios";
import WeatherDay from "./WeatherDay";
import styled from "styled-components";

const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/locationKey=${process.env.REACT_APP_LOCATION_KEY}?apikey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      setWeatherData(response.data.DailyForecasts);
      console.log(response.data.DailyForecasts);
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <FiveDayBorder>
          {weatherData &&
            weatherData.map((i, index) => (
              <WeatherDay
                key={index}
                activeDay={index}
                dayOfWeek={i.Date}
                min={`${i.Temperature.Minimum.Value}°F`}
                max={`${i.Temperature.Maximum.Value}°F`}
                icon={i.Day.Icon}
              />
            ))}
        </FiveDayBorder>
      </Container>
    </Wrapper>
  );
}

// [fiveDays.map((day, index)=>{
//   return (
//     <WeatherDay icon={day.icon} lowtem hightime/>
//   )
// })

// [16]
// cosnt fiveDays = [16].filter((_, index)=>{
//   return index <= 4
// })

export default App;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FiveDayBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  border: 1px solid #DCDCDC;
  height 200px;
`;
