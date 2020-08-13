import React, { Component } from "react";
import axios from "axios";
import Exercise from "./exercise";
import './App.css'

class exerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercise: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercise")
      .then((res) => {
        this.setState({
          exercise: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercise/" + id).then((res) => {
      console.log(res.data);
      this.setState({
        exercise: this.state.exercise.filter((el) => el._id !== id)
      });
    });
  };

  exerciseList = () => {
    return this.state.exercise.map((currentExercise) => (
      <Exercise
        exercise={currentExercise}
        deleteExercise={this.deleteExercise}
        key={currentExercise._id}
      />
    ));
  };

  render() {
    return (
      <div className="exerciseList">
        <h3>Exercise Logged</h3>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}

export default exerciseList;
