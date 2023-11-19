// import necessary react testing library helpers here
// import the Counter component here
import {fireEvent, render, screen} from '@testing-library/react'; 
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  const plusButton = screen.getByText("+");
  
  fireEvent.click(plusButton);
  expect(countElement.textContent).toBe("1");

  for (let i = 0; i < 25; i++)
    fireEvent.click(plusButton);
  expect(countElement.textContent).toBe("26");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId("count");
  const minusButton = screen.getByText("-");
  
  fireEvent.click(minusButton);
  expect(countElement.textContent).toBe("-1");

  for (let i = 0; i < 25; i++)
    fireEvent.click(minusButton);
  expect(countElement.textContent).toBe("-26");
});
