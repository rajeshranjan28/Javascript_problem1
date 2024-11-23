// Selectors
const form = document.getElementById('product-form');
const priceGraph = document.getElementById('price-graph');
const ratingGraph = document.getElementById('rating-graph');
const sortPriceBtn = document.getElementById('sort-price');
const sortRatingBtn = document.getElementById('sort-rating');

// Data
let products = [];

// Function to render graphs
function renderGraphs() {
  // Clear existing bars
  priceGraph.innerHTML = '';
  ratingGraph.innerHTML = '';

  // Render bars for price graph
  products.forEach((product) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${product.price * 2}px`; // Scale price
    bar.innerHTML = `<span>${product.price}</span>`;
    const name = document.createElement('div');
    name.className = 'bar-name';
    name.textContent = product.name;
    bar.appendChild(name);
    priceGraph.appendChild(bar);
  });

  // Render bars for rating graph
  products.forEach((product) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = `${product.rating * 50}px`; // Scale rating
    bar.innerHTML = `<span>${product.rating}</span>`;
    const name = document.createElement('div');
    name.className = 'bar-name';
    name.textContent = product.name;
    bar.appendChild(name);
    ratingGraph.appendChild(bar);
  });
}

// Event Listener for Form Submission
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('product-name').value;
  const price = parseFloat(document.getElementById('product-price').value);
  const rating = parseFloat(document.getElementById('product-rating').value);

  products.push({ name, price, rating });

  renderGraphs();

  form.reset();
});

// Sorting functionality
sortPriceBtn.addEventListener('click', () => {
  products.sort((a, b) => a.price - b.price);
  renderGraphs();
});

sortRatingBtn.addEventListener('click', () => {
  products.sort((a, b) => a.rating - b.rating);
  renderGraphs();
});
