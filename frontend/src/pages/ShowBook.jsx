import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>ShowBook</h1>
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <span>ID:</span>
            <span>{book._id}</span>
          </div>
          <div>
            <span>Title:</span>
            <span>{book.title}</span>
          </div>
          <div>
            <span>Author:</span>
            <span>{book.author}</span>
          </div>
          <div>
            <span>Publish Year:</span>
            <span>{book.publishYear}</span>
          </div>
          <div>
            <span>Create Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div>
            <span>Update Time:</span>
            <span>{new Date(book.updateAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
