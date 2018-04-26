import React from "react";
import "./PostResults.css";

const PostResults = props => (
  <ul>
    {props.results.map(result => (
      <li className="card" key={result.id}>
        <label> Name: <span>{result.name}</span></label>
        <label> Email: <span>{result.email}</span></label>
        <label> Title: <span>{result.title}</span></label>
        <label> Description: <p>{result.description}</p></label>
      </li>
    ))}
  </ul>
);

export default PostResults;