// import PaintingList from './components/PaintingList';
// import ColorPicker from './components/ColorPicker/ColorPicker';
// import Alert from './components/Alert/Alert';
import Container from './components/Container/Container';
import Box from './components/Box/Box';
// import paintings from './paintings.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export default function App() {
  return (
    <Container>
      <Box type="small" classNames="big red" styles={{ color: '#fff' }} />
      <Box type="medium" />
      <Box type="large" />
      {/* <Alert text="Шеф все пропало!" type="success" /> */}
      {/* <Alert text="Шеф все пропало!" type="warning" /> */}
      {/* <Alert text="Шеф все пропало!" type="error" /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <PaintingList items={paintings} /> */}
    </Container>
  );
}
