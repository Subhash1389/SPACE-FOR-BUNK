import React, { useState, useEffect } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch joke from the API when the component mounts
    fetch('https://v2.jokeapi.dev/joke/Any')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle two types of jokes: single and two-part
        if (data.type === 'single') {
          setJoke(data.joke);
        } else {
          setJoke(`${data.setup} ... ${data.delivery}`);
        }
      })
      .catch((error) => {
        setError('Failed to fetch the joke.');
      });
  }, []);

  return (
    <div>
      <h1>Random Joke</h1>
      {error ? <p>{error}</p> : <p>{joke}</p>}
    </div>
  );
};

export default Jokes;
