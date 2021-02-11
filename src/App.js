import "./App.css";
import axios from "axios";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";

function App() {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading(true);
    axios
      .get(
        `https://api.generated.photos/api/v1/faces?api_key=${process.env.REACT_APP_API_KEY}&order_by=random`
      )
      .then((res) => {
        const uri = res.data.faces[0].urls[4][512];
        uri && setImage(uri);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="app">
      <div className="app__container">
        <p>Generate Photo with AI</p>
        {loading && (
          <div className="loading">
            <Spinner animation="border" role="status" variant="light"></Spinner>
          </div>
        )}
        {!loading && (
          <img
            src={
              image
                ? image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhrM2eJV7EOIWBlk0nCGIOAvUJGBi7_4kaA&usqp=CAU"
            }
            alt="AI IMAGE"
          />
        )}
        <button onClick={handleChange}>GENERATE</button>
      </div>
    </div>
  );
}

export default App;
