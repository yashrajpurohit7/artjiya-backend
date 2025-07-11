 const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: 'Sunset Painting',
    price: 799,
    image: 'images/sample1.jpg'
  },
  {
    id: 2,
    name: 'Abstract Canvas',
    price: 1199,
    image: 'images/sample2.jpg'
  }
];

app.get('/', (req, res) => {
  res.send('ARTJIYA.in Backend is running!');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
