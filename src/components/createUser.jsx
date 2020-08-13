import React, { Component } from "react";
import "./App.css";
import axios from 'axios'

class createUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  onUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios.post('http://localhost:5000/user/add', user)
      .then((res) => console.log(res.data))
    
    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='mainUserForm'>
          <h3>Create New User</h3>
          <div className='username'>
            <label>Username:</label>
            <input
              className='userInput'
              value={this.state.username}
              onChange={this.onUsernameChange}
            />
          </div>
          <div className='createUserButton'>
            <input type='submit' value='Create User' />
          </div>
        </div>
      </form>
    );
  }
}

export default createUser;
