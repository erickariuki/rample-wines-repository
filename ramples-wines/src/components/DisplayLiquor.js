import React, { useState, useEffect } from 'react';
import './DisplayLiquor.css';

function DisplayLiquor() {
  const [liquors, setLiquors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/liquors")
      .then(res => res.json())
      .then(data => setLiquors(data))
      .catch(error => console.error(error));
  }, []);

  const handleToggleDetails = (id) => {
    setLiquors(prevLiquors => prevLiquors.map(liquor => {
      if (liquor.id === id) {
        return { ...liquor, showDetails: true };
      }
      return { ...liquor, showDetails: false };
    }));
  };

  const handleAddToCart = (id) => {
    setLiquors(prevLiquors => prevLiquors.map(liquor => {
      if (liquor.id === id && liquor.quantity > 0) {
        return { ...liquor, quantity: liquor.quantity - 1 };
      }
      return liquor;
    }));
  };

  return (
    <div>
      {/* <h1>Sherehe Wines</h1> */}
      <ul id="item-list">
        {liquors.map(liquor => (
          <li key={liquor.id} className="card col-2 p-0 m-2" data-id={liquor.id} onClick={() => handleToggleDetails(liquor.id)}>
            {liquor.showDetails ?
              <>
                <img src={liquor.image} className="card-img-top" alt={liquor.name} />
                <div className="card-body">
                  <h5 className="card-title">{liquor.name}</h5>
                  <p className="card-text">Ksh {liquor.price}</p>
                  <p className="card-text">{liquor.description}</p>
                  <h5 className="card-brand">Country of origin: {liquor.origin}</h5>
                  <h5 className="card-brand">Type: {liquor.brand}</h5>
                  <p className="card-text">Available quantity: {liquor.quantity}</p>
                  <button className="btn btn-info" disabled={liquor.quantity === 0} onClick={() => handleAddToCart(liquor.id)}>
                    {liquor.quantity === 0 ? "Out of stock" : "Add to cart"}
                  </button>
                </div>
              </>
              :
              <>
                <img src={liquor.image} className="card-img-top" alt={liquor.name} title="Click to view details" />
                <div className="card-body">
                  <h5 className="card-title">{liquor.name}</h5>
                  <button className="btn btn-primary" disabled={liquor.quantity === 0} onClick={() => handleAddToCart(liquor.id)}>
                    {liquor.quantity === 0 ? "Out of stock" : "Add to cart"}
                  </button>
                </div>
              </>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayLiquor;
