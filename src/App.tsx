import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list: string[] = [];
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  return (
    <Card>
      <CardBody title="Hola" text="Este es" />
      {list.length !== 0 ? <List data={list} onSelect={handleSelect} /> : "no"}
    </Card>
  );
}

export default App;
