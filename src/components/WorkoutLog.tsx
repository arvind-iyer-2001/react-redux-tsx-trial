const WorkoutLog = () => {
  const workouts = [
    { id: 1, name: 'Push-ups', sets: 3, reps: 10 },
    { id: 2, name: 'Squats', sets: 3, reps: 12 },
    { id: 3, name: 'Sit-ups', sets: 3, reps: 15 },
  ];

  return (
    <div>
      <h1>Workout Log</h1>
      <p>Welcome to your workout log!</p>
      <h2>Today's Workout:</h2>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <strong>{workout.name}</strong>
            <p>Sets: {workout.sets}</p>
            <p>Reps: {workout.reps}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutLog;
