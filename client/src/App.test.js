import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, act, waitForElement } from "@testing-library/react";
import App from './App';
import Players from './components/Players';
import Players2 from './components/Players2';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders the Players component (class based)", async () => {
  act(() => {
    render(<Players />);
  });
});

test("renders the Players2 component (functional)", async () => {
  act(() => {
    render(<Players2 />);
  });
});

test('renders the headlines of the Players components', async () => {
  const players = render(<Players />);
  const players2 = render(<Players2 />);
  const firstHeadline = players.getByText(/first players component/i);
  const secondHeadline = players2.getByText(/second players component/i);
  expect(firstHeadline.textContent).toBe('First Players Component (class based)');
  expect(secondHeadline.textContent).toBe('Second Players Component (functional)');
});
