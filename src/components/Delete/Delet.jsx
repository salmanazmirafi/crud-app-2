import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { UseContext } from "../UseContax/UseCotx";
import "./delet.css";

const Delet = () => {
  const { id } = useParams();
  const [user, setUser] = useContext(UseContext);

  const deleteUser = () => {
    const users = user.filter((user) => user.id != id);
    setUser([...users]);
  };

  return (
    <div className="container">
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/">
            <Button className="delete__btn" variant="info">
              Cancel
            </Button>
            <Button variant="danger" onClick={() => deleteUser(id)}>
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Delet;
