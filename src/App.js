import PaintingList from './components/PaintingList';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <h1>Привет</h1>
      <PaintingList items={paintings} />
    </div>
  );
}
