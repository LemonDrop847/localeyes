import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { Form, Button } from "react-bootstrap";

const UpdateProfile = ({ name, location }) => {
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [success,setSuccess]=useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const userRef = doc(db, "users", user.uid);
    const updatedData = {};
    if (newName.trim() !== "") updatedData.name = newName;
    else updatedData.name = name;
    if (newLocation.trim() !== "") updatedData.location = newLocation;
    else updatedData.location = location;
    try {
      await updateDoc(userRef, updatedData);
      await updateProfile(user, {
        displayName: newName || user.displayName,
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          type="text"
          placeholder={name}
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location:</Form.Label>
        <Form.Control
          type="text"
          placeholder={location}
          value={newLocation}
          onChange={(e) => setNewLocation(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      {success&&<h2>Profile Updated</h2>}
    </Form>
  );
};

export default UpdateProfile;
