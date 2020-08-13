import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Exercise = (props) => (
  <tr className='listRow'>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <button>
        <Link className='editStyle' to={"/edit/" + props.exercise._id}>
          Edit
        </Link>
      </button>
      <button
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}>
        Delete
      </button>
    </td>
  </tr>
);

export default Exercise;
