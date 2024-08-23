import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
function SchnucksInfo() {
  return(
     <div>
        <h1>Schnucks</h1>
        <p>Grocery store</p>
        <p>Delivering within an hour</p>
     </div>
  );
}
function App() {
  return (
    <div className="App">
      <SchnucksInfo />
    </div>
  );
}