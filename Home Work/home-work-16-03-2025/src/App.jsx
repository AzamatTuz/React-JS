import { use, useEffect, useState } from 'react';
import './App.css'

export default function App() {

  const [see, setSee] = useState([])

  function addToSee(p) {
    
    if (see.includes(p)) {
      setSee([...see.splice(see.indexOf(p), 1), ...see.filter((ps, index) => index !== see.indexOf(p))])
    } else {
      setSee([p, ...see])
    }
  }
  

  useEffect(() => {
    let newSee = JSON.parse(localStorage.getItem('see'))
    if (newSee) {
      setSee(JSON.parse(localStorage.getItem('see')))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('see', JSON.stringify(see))
  }, [see])


  
 
  const products = ['Laptop', 'Headphones', 'Watch', 'Camera', 'Phone'];
  const product = products.map((product, i) => 
    <button onClick={() => addToSee(product) } key={i}>{product}</button>
  );
  const lists = see.map((p, i) => 
    
    <li key={i}>{p}</li>
  
  )

  return(
    <div className='Main'>
    
      <div className="btns">
        {product}
      </div>

      <ol className="list">
          {lists}
      </ol>
    
    </div>
  );
}