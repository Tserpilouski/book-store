import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div>
      <BackButton />
      <h1>Delete book</h1>
      {loading ? <Spinner /> : ""}
      <div>
        <h3>Are you sure delete this book?</h3>
        <button onClick={handleDeleteBook}>delete</button>
      </div>
    </div>
  );
};

export default DeleteBook;
