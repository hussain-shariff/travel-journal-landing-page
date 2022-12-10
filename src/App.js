import Nav from "./Components/Nav"
import Card from "./Components/Card";
import data from "./Components/data";


function App() {
  let cardElements = data.map((item)=>{
    return <Card
            key = {item.id}
            item = {item}
            />
  })

  return (
    <div className="App">
      <Nav/>
      <div className="card-list">
        { cardElements }
      </div>
    </div>
  );
}

export default App;
