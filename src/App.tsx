import { useState } from "react";
import data from "../src/db/data";
import AlbumInfo from "./components/AlbumInfo/AlbumInfo";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [randomAlbum, setRandomAlbum] = useState(data[0]);

  const { setValue, getValue } = useLocalStorage("albums", []);

  const filteredData = data.filter((album) => !getValue().includes(album.Rank));

  function getRandomAlbum() {
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomIndex];
  }

  function handleClick() {
    setValue([...getValue(), randomAlbum.Rank]);
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
