import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { UseContext } from "../UseContax/UseCotx";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  const [user, setUser] = useContext(UseContext);

  return (
    <div className="container">
      <Link to="/create">
        <Button variant="primary">Create User</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((users) => (
            <tr>
              <td>{users.id}</td>
              <td>{users.name}</td>
              <td>{users.position}</td>
              <td>{users.salary}</td>
              <td>
                <Link to={"/red/" + users.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>
                <Link to={"/edit/" + users.id}>
                  <Button className="action__btn" variant="info">
                    Edit
                  </Button>
                </Link>
                <Link to={"/delete/" + users.id}>
                  <Button className="action__btn" variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
