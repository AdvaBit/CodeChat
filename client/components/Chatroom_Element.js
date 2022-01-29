import React from 'react';

const ChatroomElement = props => {
  const workouts = props.type.map((el, i) => 
    <div className='workoutResult' key={i}>
      <b>Date: </b> {el.date.split('T')[0]}<br></br>
      {/* <b>Workout: </b> {el.workout}<br></br> */}
      <b>Weight: </b> {el.weight} lbs<br></br>
      <b>Reps: </b>{el.reps}<br></br>
      <b>Notes: </b>{el.notes}
    </div>
  );

  return(
    <div className='innercontainer'>
      <h2>Workout By Type</h2>
      <form className='form' id='getworkout' onSubmit={e => {
        e.preventDefault();
        props.handleSubmit(document.querySelector('#workout2').value);
      }}>
        <div>
          <label htmlFor='workout2'>Workout: </label>
          <select name='workout2' id='workout2'>
            <option value='Bench'>Bench</option>
            <option value='Deadlift'>Deadlift</option>
            <option value='Squat'>Squat</option>
          </select>
        </div>

        <button className='submitButton' type='submit' value='submit'>Submit</button>
      </form>
      <div className='resultsContainer'>
        {workouts.slice(0, 10)}
      </div>
    </div>
  );
};

export default ChatroomElement;