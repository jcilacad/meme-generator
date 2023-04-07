import { Button, CardMedia } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Header from "./Header";
import Input from "./Input";

export default function FixedContainer() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));

    console.log(meme);
  }

  const [allMemeImages, setAllMemeImages] = React.useState({});

  function handleClick() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    setMeme((prevState) => {
      return {
        ...prevState,
        randomImage: allMemeImages[randomNumber].url,
      };
    });
  }

  const fontStyle = {
    margin: "0px",
    fontSize: "2.8rem",
    WebkitTextStroke: "3px black",
    color: "white",
    padding: 0,
  };

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container fixed>
        <Input meme={meme} handleChange={handleChange} />
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ height: "3.5rem", mt: "1rem", bgcolor: "purple" }}
          fullWidth
        >
          Get a new meme image
        </Button>

        <div
          style={{
            position: "relative",
            textAlign: "center",
            color: "black",
          }}
        >
          <CardMedia
            component="img"
            width="100%"
            height="450px"
            image={meme.randomImage}
            sx={{ mt: "1rem", objectFit: "contain", mb: "1rem" }}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              padding: "0px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <h1 style={fontStyle}>{meme.topText}</h1>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "0",
              margin: "0 auto",
              width: "100%",
              textAlign: "center",
            }}
          >
            <h1 style={fontStyle}>{meme.bottomText}</h1>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
