import { useState } from "react";
import { storage, db, auth } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { Form, Button, Carousel } from "react-bootstrap";
// import Popup from "../components/popUp";
// import { Link } from "react-router-dom";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  // const [buttonPopup, setButtonPopup] = useState(false);// new state variable

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);

    const urls = selectedImages.map((image) => URL.createObjectURL(image));
    setPreviewUrls(urls);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newUrls = [...previewUrls];
    newImages.splice(index, 1);
    newUrls.splice(index, 1);
    setImages(newImages);
    setPreviewUrls(newUrls);
  };

  // const handleEndgrChange = (event) => {
  //   setIsEndgr(event.target.checked);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        return await getDownloadURL(storageRef);
      })
    );

    const postRef = await addDoc(collection(db, "posts"), {
      name: name,
      user: auth.currentUser.uid,
      username: auth.currentUser.displayName,
      caption: caption,
      location: location,
      images: imageUrls,
      timestamp: new Date().toISOString(),
    });

    const userRef = doc(db, "users", auth.currentUser.uid);

    await updateDoc(userRef, {
      posts: arrayUnion(postRef.id),
    });

    setName("");
    setCaption("");
    setLocation("");
    setImages([]);
    setPreviewUrls([]);
  };

  return (
    <div style={{ height: "400px", overflowY: "scroll", overflowX: "hidden" }}>
      <h3>Create Post</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="location">
          <Form.Label>Location:</Form.Label>
          <Form.Control
            type="text"
            value={location}
            onChange={handleLocationChange}
            required
          />
        </Form.Group>
        <Form.Group>
            <Form.Label>
                Type:
            </Form.Label>
            <Form.Select aria-label="Default select example">
                <option>---SELECT---</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
        </Form.Group>
        <Form.Group controlId="caption">
          <Form.Label>Caption:</Form.Label>
          <Form.Control
            style={{ height: "70px" }}
            as="textarea"
            rows={1}
            value={caption}
            onChange={handleCaptionChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="image">
          <Form.Label>Images:</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            required
          />
        </Form.Group>

        {previewUrls.length > 0 && (
          <Carousel>
            {previewUrls.map((url, index) => (
              <Carousel.Item key={url}>
                <img
                  src={url}
                  alt="Preview"
                  style={{ width: "40%", height: "200px" }}
                />
                <Carousel.Caption>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Remove
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;