import { useState } from "react";
import data from "../src/db/data";
import AlbumInfo from "./components/AlbumInfo/AlbumInfo";

function App() {
  const [randomAlbum, setRandomAlbum] = useState(getRandomAlbum);

  function getRandomAlbum() {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  }

  function handleClick() {
    setRandomAlbum(getRandomAlbum());
  }

  return (
    <>
      <button onClick={handleClick}>Next Album</button>
      <AlbumInfo {...randomAlbum} />
    </>
  );
}

export default App;
