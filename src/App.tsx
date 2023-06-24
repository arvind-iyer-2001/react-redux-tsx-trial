import WorkoutLog from './components/WorkoutLog';

const App = () => {
  const initialWorkouts = [
    { id: 1, name: 'Push-ups', sets: 3, reps: 10 },
    { id: 2, name: 'Squats', sets: 3, reps: 12 },
    { id: 3, name: 'Sit-ups', sets: 3, reps: 15 },
  ];

  return (
    <div>
      <WorkoutLog initialWorkouts={initialWorkouts} />
    </div>
  );
};

export default App;
