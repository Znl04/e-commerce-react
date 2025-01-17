import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

// Database
import data from './db/data'
import Card from './components/Card';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Input Filter
  const [query, setQuery] = useState('');

  const inputHandleChange = (e) => {
    setQuery(e.target.value)
  }

  const filteredItems = data.filter(product => 
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // Radio Filter 
  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  // Buttons Filter 
  const handleClick = (e) => {
    setSelectedCategory(e.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input items 
    if (query) {
      filteredProducts = filteredItems
    }

    // Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, color, newPrice, company, title })  => 
        category === selected || 
      color === selected || 
      company === selected || 
      newPrice === selected || 
      title === selected)
    }

    return filteredProducts.map(({img, title, star, reviews,newPrice, prevPrice}) => 
    <Card key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
    />)
  }

 const result = filteredData(data, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Nav/>
      <Recommended/>
      <Products/>
    </>
    
  );
}

export default App;
