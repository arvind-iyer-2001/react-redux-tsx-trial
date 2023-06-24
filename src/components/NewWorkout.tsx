import React from 'react';

interface NewWorkoutProps {
  newWorkoutName: string;
  handleNewWorkoutChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  addWorkout: () => void;
}

const NewWorkout: React.FC<NewWorkoutProps> = ({ newWorkoutName, handleNewWorkoutChange, addWorkout }) => {
  return (
    <div className="add-workout-container">
      <h3 className="add-workout-title">Add New Workout</h3>
      <input
        type="text"
        placeholder="Workout Name"
        value={newWorkoutName}
        onChange={handleNewWorkoutChange}
        className="add-workout-input"
      />
      <button onClick={addWorkout} className="add-workout-button">Add Workout</button>
    </div>
  );
};

export default NewWorkout;
