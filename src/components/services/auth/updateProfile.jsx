import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";
import { ref , uploadBytes , getDownloadURL} from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { Form, Button } from "react-bootstrap";

const UpdateProfile = ({ name, location }) => {
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    const userRef = doc(db, "users", user.uid);
    const updatedData = {};
    if (newName.trim() !== "") updatedData.name = newName;
    else updatedData.name = name;
    if (newLocation.trim() !== "") updatedData.location = newLocation;
    else updatedData.location = location;
    if (photo.trim() !== "") updatedData.photoURL = photo;
    try {
      console.log(updatedData)
      await updateDoc(userRef, updatedData);
      await updateProfile(user, {
        displayName: newName || user.displayName,
        photoURL: photo || user.photoURL,
      });
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePhotoUpload = async (event) => {
    const file = event.target.files[0];
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    setPhoto(url);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Update Profile</h2>
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
      <Form.Group>
        <Form.Label>Profile Photo:</Form.Label>
        <Form.Control type="file" onChange={handlePhotoUpload} />
      </Form.Group>
      <button  type="submit" className="subm" style={{width:"75px", height:"40px"}} >
        Submit
      </button>
      {success && <h2>Profile Updated</h2>}
    </Form>
  );
};

export default UpdateProfile;
