import "./App.css";
import FavoriteFood from "./components/FavoriteFood";
import MyStackTech from "./components/MyStackTech";
import Card from "./components/Card";

function App() {

  //Cards
  const personalInfo = {
    title: "Personal",
    info1: "Erwin Nahue",
    info2: 24,
    info3: "The Gentlemen",
    info4: "Rock-pop",
  }
  const hobbiesInfo = {
    title: "Hobbies",
    info1: "Futbol",
    info2: "Video Juegos",
    info3: "Ver anime",
    info4: "Series",
  }
  const myFavoriteFood = {
    title: "Comidas favoritas",
    info1: "Ceviche",
    info2: "Rocoto relleno",
    info3: "Arroz con pato",
    info4: "Lomo saltado",
  }
  const myStackTech = {
    title: "Mi Stack Tech",
    info1: "HTML, CSS",
    info2: "JS",
    info3: "React"
  }
  return (
    <div className="App">
      <Card info ={personalInfo} classColor="personal"/>
      <Card info={hobbiesInfo} classColor="hobbies"/>
      <Card info={myFavoriteFood} classColor="favoriteFood"/>
      <Card info={myStackTech} classColor="stackTech"/>
    </div>
  );
}

export default App;
