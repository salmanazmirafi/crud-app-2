import React, { useContext } from "react";
import "./red.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { UseContext } from "../UseContax/UseCotx";

const Red = () => {
  const { id } = useParams();
  const [user, setUser] = useContext(UseContext);
  const users = user.filter((user) => user.id == id);
  return (
    <div className="read">
      <h1>ID: {users[0].id}</h1>
      <h1>Name: {users[0].name}</h1>
      <h1>Position: {users[0].position}</h1>
      <h1>Salary: {users[0].salary} /= </h1>
      <Link to="/">
        <Button variant="info">Back to Home</Button>
      </Link>
    </div>
  );
};

export default Red;
