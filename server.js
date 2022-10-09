const express = require('express');
const app = express();
const PORT = 8000;

const restaurants = {
  'Mcdonalds': {
  'address': '123 Main St',
  'city': 'New York',
  'state': 'NY',
  },
  'Burger King': {
  'address': '456 Main St',
  'city': 'New York',
  'state': 'NY',
  },
  'Taco Bell': {
  'address': '789 Main St',
  'city': 'New York',
  'state': 'NY',
  },

  
}


app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.get('/api/:restaurantName', (request, response) => {
  const restaurantName = request.params.restaurantName;
  if (restaurants[restaurantName]) {
    response.json(restaurants[restaurantName]);
  } else {
    response.json({error: 'Restaurant not found'});
  }
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go
  catch it!`);
});

