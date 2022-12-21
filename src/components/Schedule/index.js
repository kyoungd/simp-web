import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const scheduleData = [  {    id: 1,    end: "11:00:00Z",    days: [1, 2, 3, 4, 5],
//     start: "09:30:00Z",
//     title: "Class A1",
//     bgColor: "green"
//   },
//   {
//     id: 2,
//     end: "16:30:00Z",
//     days: [1, 2, 3, 4, 5],
//     start: "15:30:00Z",
//     title: "Class B2",
//     bgColor: "green"
//   }
// ];

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: lightgrey;
`;

const DayColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid black;
`;

const DayHeader = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

const Event = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${props => props.bgColor};
  color: white;
  font-size: 16px;
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const Time = styled.div`
  margin-right: 10px;
  font-size: 14px;
`;

const WeeklySchedule = ({ scheduleData }) => {
  const today = new Date();
  return (
    <Container>
      {days.map((day, index) => {
        const events = scheduleData.filter(event => event.days.includes(index));
        return (
          <DayColumn key={index}>
            <DayHeader>{day}</DayHeader>
            <EventContainer>
              {events.map(event => {
                // Parse the start and end time strings into Date objects
                const startDate = new Date(`${today.toLocaleDateString()} ${event.start}`);
                const endDate = new Date(`${today.toLocaleDateString()} ${event.end}`);

                // Convert the Date objects to local time strings
                const startTimeString = startDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });
                const endTimeString = endDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric' });

                return (
                  <Event key={event.id} bgColor={event.bgColor}>
                    <Time>{startTimeString} - {endTimeString}</Time>
                    {event.title}
                  </Event>
                );
              })}
            </EventContainer>
          </DayColumn>
        );
      })}
    </Container>
  );
};

WeeklySchedule.propTypes = {
    scheduleData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        end: PropTypes.string.isRequired,
        days: PropTypes.arrayOf(PropTypes.number).isRequired,
        start: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        bgColor: PropTypes.string,
    })).isRequired,
};

export default WeeklySchedule;
