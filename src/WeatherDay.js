import React, { useState } from "react";
import styled from "styled-components";

const weekday = (dayString) => {
  switch (dayString) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      return "";
  }
};

const iconNum = (num) => {
  const stringNum = num + "";
  const stringLen = stringNum.length;
  if (stringLen === 1) {
    return "0" + stringNum;
  } else {
    return stringNum;
  }
};

const WeatherDay = ({ activeDay, icon, min, max, dayOfWeek }) => {
  return (
    <Wrapper activeDay={activeDay === 0 ? true : false}>
      <Container>
        <Day>{weekday(new Date(dayOfWeek).getDay())}</Day>
        <Icon>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${iconNum(
              icon
            )}-s.png`}
            alt=""
          />
        </Icon>
        <Temp>
          <LowTemp>{min}</LowTemp>
          <HighTemp>{max}</HighTemp>
        </Temp>
      </Container>
    </Wrapper>
  );
};

export default WeatherDay;

const Wrapper = styled.div`
  max-height: 200px;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${(props) => (props.activeDay ? "background-color: #DCDCDC" : "")}
`;

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid #808080; */
  margin: 25px;
  width: 100%;
`;

const Day = styled.div`
  font-weight: 500;
  color: #808080;
`;

const Icon = styled.div`
  & > img {
    height: 60px;
  }
`;

const Temp = styled.div`
  display: flex;
  font-weight: 500;
`;

const LowTemp = styled.div`
  display: flex;
  margin: 8px;
  font-weight: 600;
`;

const HighTemp = styled.div`
  display: flex;
  margin: 8px;
  color: #808080;
`;
