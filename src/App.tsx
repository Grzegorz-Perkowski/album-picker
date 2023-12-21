import data from "../src/db/data";

function App() {
  return (
    <>
      {data.map((item) => (
        <div key={item.Rank}>
          <h1>{item.Album}</h1>
          <p>{item.Info}</p>
          <p>{item.Artist}</p>
          <p>{item.Description}</p>
        </div>
      ))}
    </>
  );
}

export default App;
