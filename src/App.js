import React, { useEffect, useState } from 'react';
import './App.css';

function App()
{
  let person = {
    name: 'Mahir',
    age: 23,
  }
  let student = {
    dept: 'CSE',
    batch: 5,
  }
  let style = {
    color: "red",
    fontSize: "50px",
  }
  let wifeNames = ['asifa', 'marufa', 'sokhina', 'maleka', 'saleha', 'maria', 'jorina'];

  let products = [{ name: 'Alu', price: '20$' }, { name: 'Begun', price: '30$' }, { name: 'Potol', price: '10$' }, { name: 'Lau', price: '25$' }, { name: 'Kumra', price: '5$' }];
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ color: 'purple' }}>Hello React</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est architecto placeat assumenda exercitationem natus quia minus consectetur?</p>
        <h2>Hello, {person.name}</h2>
        <p style={style}>You are a student of {student.dept} department.</p>
      </header>
      <ul>
        {
          wifeNames.map(wife => <li>{wife}</li>)
        }
        {
          products.map(productNames => <li>{productNames.name}</li>)
        }
      </ul>
      <Users></Users>
      <Student name="Mahir" wife={wifeNames[0]}></Student>
      <Student name="Sakib" wife={wifeNames[1]}></Student>
      <Student name="Jalil" wife={wifeNames[2]}></Student>
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
      <Product product={products[2]}></Product>
      <Product product={products[3]}></Product>
      <Product product={products[4]}></Product> */}
      {
        products.map(pro => <Product product={pro}></Product>)
      }
      <Counter></Counter>
    </div>
  )
}
function Users()
{
  const [users, setUsers] = useState([])
  useEffect(() =>
  {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>User Info{users.length}</h1>
      {users.map(user => <p>{user.name}</p>)}
    </div>

  );
}
function Counter()
{
  let [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onMouseMove={() => setCount(count++)}>Add</button>
      <button onClick={() => setCount(count--)}>Subtract</button>
    </div>
  );
}
function Student(props)
{
  return (
    <div style={{ border: '2px solid red', margin: '10px 0' }}>
      <h1>Name: {props.name}</h1>
      <p>Hello {props.name} how are you?</p>
      <p>Married {props.wife}</p>
    </div>
  )
}

function Product(props)
{
  console.log(props);
  const productStyle = {
    border: '3px solid yellow',
    backgroundColor: 'lightcoral',
    borderRadius: '10px',
    width: '300px',
    height: '300px',
    float: 'left',
    margin: '10px',
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h1>Title {name}</h1>
      <p>Price {price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default App;
