import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // Alternative to use this is function() { return <Expenses /> }
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <h2>Hello World!</h2>
      <Expenses items={expenses} />
    </div>
  );

  // React working under the hood
  // in the background, react is always imported
  // but, because we are using jsx, things get simpler
  // below is the code if we use normal React

  // import React from "react";
  // return React.createElement(
  //   'div', // first element
  //   {}, // no properties for div wrapper
  //   React.createElement('h2', {}, 'Hello World!'), // second element
  //   React.createElement(Expenses, { items: expenses }) // third element
  // );
};

export default App;
