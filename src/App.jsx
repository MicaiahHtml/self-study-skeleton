import { useState } from 'react'
import './App.css'
import products from './data'

function App() {
  console.log(products)
  // add state in here
  const [productList, setProductList] = useState(products);
  const [value, setValue] = useState("");
  const [form, setForm] = useState({
    itemName: "",
    price: 0,
    description: "Describe this item",
  });

  // handleChange function
  const handleChange = event => {
    this.setValue({ value : event.target.value });
  }

// handleSubmit
const handleSubmit = event => {
  // prevent page refresh
  event.preventDefault();
  // do what you want with the form data
  console.log(form);
}


  // return
  return ( 
  <div> 
    <h1> Big Time Shopping </h1> 
    <form>
    <input
          type="text"
          value={form.itemName}
          onChange={handleChange}
          name="itemName"
          placeholder="write name here"
        />
        <input
          type="number"
          value={form.price}
          onChange={handleChange}
          name="price"
          placeholder="write price here"
        />
        <input
          type="description"
          value={form.description}
          onChange={handleChange}
          name="description"
          placeholder="describe the product"
        />
    </form>
    <ul> {productList.map(item => <li>{item.itemName} {item.price}</li>)}</ul> 
  </div> 
  ) 
}

export default App;
