import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["unoi", "dos", "tres"];
  return (
    <Card>
      <CardBody title="Aloo" text="Estees" />
      <List data={list} />
    </Card>
  );
}

export default App;
