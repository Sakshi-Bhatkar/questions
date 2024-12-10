1 How to comment HTML tags?
=>by using <!–  –> tag.

2How to create a hyperlink?
=> using anchor tag, for ex: <a href="*link*"></a>


3How to author an abbreviation or an acronym?
=>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.

9How to write bold text using HTML tags?
=>Using <b> tag

------------------------------------------------------------

1) React code to build a simple search filter functionality to display a filtered list 
based on the search query entered by the user.
=> 
import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const items = [
    { id: 1, name: 'amravati' },
    { id: 2, name: 'banglore' },
    { id: 3, name: 'europe' },
    { id: 4, name: 'france' },
    { id: 5, name: 'pune' },
  ];

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;

/*2)Creating a simple counter using React which increments or decrements count 
dynamically on-screen as the user clicks on the button. This exercise requires 
knowledge of fundamental React concepts such as State, Component, etc.
We can complete the simple counter exercise with the following steps:
1.Create React state to store the count value.
2.Declare JS functions to incement or decrement the value through setState().
3.Add HTML buttons with onClick to JSX code.*/
=>
import React, { useState } from 'react';

const Counter = () => {
  // Step 1: Create React state to store the count value
  const [count, setCount] = useState(0); // Initial value of count is 0

  // Step 2: Functions to increment and decrement the count
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <p>Current Count: {count}</p> {/* Display the current count */}
      
      {/* Step 3: Add buttons with onClick handlers */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;


3) React code to print each item from the list on the page 
using Array.map() function to display each item on the page.
The list of items is displayed using React JS through the following steps:
1.Declare list of items as JS Array.
2.Access each item using Array.map()
3.Return JSX code in callback function for every item.
=>
import React from 'react';

const ItemList = () => {
 
  const items = ['Apple', 'Banana', 'Orange', 'Grape', 'Pineapple'];

  return (
    <div>
      <h1>Fruit List</h1>
 
      <ul>
        {items.map((item, index) => {
    
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default ItemList;


4)React code for simple login form where the user login by entering their 
username and password. The form inputs are validated to check if correct 
information is entered and the error messages are the validation fails. The login 
form is hidden and the “Welcome, ${name}” message is shown when the user 
login is successful.
The following are the steps to create a simple login form using React JS:
1.Create name, email and password input form elements.
2.React States to store user input values.
3.Add form validation for compare name, email and password with correct 
values.
4.Display “Welcome, ${name}” if login is successful, else display the error 
message.
=>
import React, { useState } from 'react';

const LoginForm = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const correctName = 'John Doe';
    const correctEmail = 'john@example.com';
    const correctPassword = 'password123';

    if (name === correctName && email === correctEmail && password === correctPassword) {

      setIsLoggedIn(true);
      setErrorMessage(''); 
    } else {
  
      setIsLoggedIn(false);
      setErrorMessage('Invalid login credentials, please try again.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
       
        <h1>Welcome, {name}!</h1>
      ) : (

        <form onSubmit={handleLogin}>
          <h1>Login</h1>

          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;

