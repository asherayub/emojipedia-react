import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import data from "./data";
import Card from "./components/Card";
function App() {
  return (
    <>
      <Header />
      <div className="cards">
        {data.map((em) => {
          return (
            <Card emoji={em.name} emojiheader={em.title} emojiexp={em.exp} />
          );
        })}
      </div>
    </>
  );
}

export default App;
