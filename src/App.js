import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/navbar';
import ExerciseList from './components/exerciseList'
import EditExerciseList from './components/editExerciseList'
import CreateExerciseList from './components/createExerciseList'
import CreateUser from './components/createUser'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id' component={EditExerciseList} />
        <Route path='/create' component={CreateExerciseList} />
        <Route path='/user' component={CreateUser} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
