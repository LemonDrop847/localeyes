import "./styles/feedpage.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardList from "../reuseable/cardList";

const Feed = () => {
  return (
    <>
      <h1> RECENT OCCURRENCES IN YOUR AREA </h1>
      <Form className="d-flex searchbar">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <CardList sort="likes" type="all" user="all" />
    </>
  );
};

export default Feed;