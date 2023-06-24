import React, { useState } from 'react';
import WorkoutDetails from './WorkoutDetails';
import NewWorkout from './NewWorkout';
import Workout from '../types/Workout';

interface WorkoutLogProps {
  initialWorkouts: Workout[];
}

const WorkoutLog: React.FC<WorkoutLogProps> = ({ initialWorkouts }) => {
  const [workouts, setWorkouts] = useState<Workout[]>(initialWorkouts);
  const [filter, setFilter] = useState<string>('');
  const [newWorkoutName, setNewWorkoutName] = useState<string>('');

  const handleWorkoutChange = (event: React.ChangeEvent<HTMLInputElement>, workoutId: number) => {
    const updatedWorkouts = workouts.map((workout) => {
      if (workout.id === workoutId) {
        return {
          ...workout,
          [event.target.name]: event.target.value,
        };
      }
      return workout;
    });

    setWorkouts(updatedWorkouts);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredWorkouts = workouts.filter((workout) =>
    workout.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addWorkout = () => {
    if (newWorkoutName.trim() === '') {
      alert('Please enter a valid workout name.');
      return;
    }

    const newWorkout: Workout = {
      id: workouts.length + 1,
      name: newWorkoutName,
      sets: 3,
      reps: 10,
    };

    setWorkouts([...workouts, newWorkout]);
    setNewWorkoutName('');
  };

  const handleNewWorkoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewWorkoutName(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Workout Log</h1>
      <p className="subtitle">Welcome to your workout log!</p>
      <h2 className="section-title">Today's Workout:</h2>
      <input
        type="text"
        placeholder="Filter workouts..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <ul className="workout-list">
        {filteredWorkouts.map((workout) => (
          <WorkoutDetails
            key={workout.id}
            workout={workout}
            handleWorkoutChange={handleWorkoutChange}
          />
        ))}
      </ul>
      <NewWorkout
        newWorkoutName={newWorkoutName}
        handleNewWorkoutChange={handleNewWorkoutChange}
        addWorkout={addWorkout}
      />
    </div>
  );
};

export default WorkoutLog;
