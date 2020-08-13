import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import axios from "axios";

class editExerciselist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercise/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          username: res.data.username,
          description: res.data.description,
          duration: res.data.duration,
          date: new Date(res.data.date),
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map((user) => user.username),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onDurationChange = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };

  onDateChange = (date) => {
    this.setState({
      date: date,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);

    axios
      .put(
        "http://localhost:5000/exercise/update/" + this.props.match.params.id,
        exercise
      )
      .then((res) => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='mainExerciseForm'>
          <h3>Edit Exercise</h3>

          <div className='username'>
            <label>Username:</label>
            <select
              className='userInput'
              ref='userInput'
              required
              value={this.state.username}
              onChange={this.onUsernameChange}>
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>

          <div className='description'>
            <label>Description:</label>
            <textarea
              className='descriptionInput'
              value={this.state.description}
              onChange={this.onDescriptionChange}></textarea>
          </div>

          <div className='duration'>
            <label>Duration:</label>
            <input
              className='durationInput'
              value={this.state.duration}
              onChange={this.onDurationChange}
            />
          </div>

          <div className='date'>
            <label>Date:</label>
            <DatePicker
              className='datePick'
              selected={this.state.date}
              onChange={this.onDateChange}
            />
          </div>

          <div className='createButton'>
            <input type='submit' value='Edit Exercise' />
          </div>
        </div>
      </form>
    );
  }
}
export default editExerciselist;
