import React from 'react';
import Workout from '../types/Workout';

interface WorkoutDetailsProps {
  workout: Workout;
  handleWorkoutChange: (event: React.ChangeEvent<HTMLInputElement>, workoutId: number) => void;
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workout, handleWorkoutChange }) => {
  return (
    <li key={workout.id} className="workout-item">
      <strong className="workout-name">{workout.name}</strong>
      <div className="workout-details">
        <label htmlFor={`sets-${workout.id}`} className="workout-label">Sets:</label>
        <input
          type="number"
          id={`sets-${workout.id}`}
          name="sets"
          value={workout.sets}
          onChange={(event) => handleWorkoutChange(event, workout.id)}
          className="workout-input"
        />
      </div>
      <div className="workout-details">
        <label htmlFor={`reps-${workout.id}`} className="workout-label">Reps:</label>
        <input
          type="number"
          id={`reps-${workout.id}`}
          name="reps"
          value={workout.reps}
          onChange={(event) => handleWorkoutChange(event, workout.id)}
          className="workout-input"
        />
      </div>
    </li>
  );
};

export default WorkoutDetails;
