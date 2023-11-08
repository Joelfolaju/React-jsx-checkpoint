import Product from './Product'
import Name from './components/Name'
import Price from './components/Price'
import Description from './components/Description'
import './App.css'
import Card from 'react-bootstrap/Card';


function App() {
  const user = "B.Joel";

  return (
    <>
        <div className="container">
          <Card className='card-container' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={Product.pimage}  />
            <Card.Body>
               <Name name={Product.name}/>
               <Price price={Product.price}/>
               <Description description={Product.description}/>
            </Card.Body>
          </Card>
          <p className='greeting'>Hello, {user}</p>
       </div>
    </>
  )
}

export default App