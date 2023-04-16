import { useState } from "react";
import { storage, db, auth } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from "firebase/firestore";
import { Form, Button, Carousel } from "react-bootstrap";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [images, setImages] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
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
      type: type,
      images: imageUrls,
      likes: 0,
      timestamp: serverTimestamp(),
    });

    const userRef = doc(db, "users", auth.currentUser.uid);

    await updateDoc(userRef, {
      posts: arrayUnion(postRef.id),
    });

    setName("");
    setCaption("");
    setLocation("");
    setType("");
    setImages([]);
    setPreviewUrls([]);
  };

  return (
    <div >
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
          <Form.Label>Select Type of Problem:</Form.Label>
          <Form.Select
            aria-label="Default select example"
            value={type}
            onChange={handleTypeChange}
            required
          >
            <option>----SELECT----</option>
            <option value="electricity">Electricity</option>
            <option value="water">Water</option>
            <option value="housing">Housing</option>
            <option value="sanitation">Sanitation</option>
            <option value="public safety">Public Safety</option>
            <option value="food">Food</option>
            <option value="other">Other</option>
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
