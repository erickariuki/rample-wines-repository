import { useState, useEffect } from "react";
import './TableLiquor.css';
import AddLiquorForm from "./AddLiquorForm";

function LiquorTable() {
  const [liquors, setLiquors] = useState([]);

  useEffect(() => {
    // Make a GET request to the server for all liquors
    fetch("http://localhost:5000/liquors")
      .then((res) => res.json())
      .then((liquors) => setLiquors(liquors));
  }, []);

  const deleteLiquor = (id) => {
    // Make a DELETE request to the server to delete the liquor with the given id
    fetch(`http://localhost:5000/liquors/${id}`, {
      method: "DELETE",
    }).then(() => setLiquors(liquors.filter((l) => l.id !== id)));
  };

  const addLiquor = (liquor) => {
    // Make a POST request to the server to add the new liquor
    fetch("http://localhost:5000/liquors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(liquor),
    })
      .then((res) => res.json())
      .then((newLiquor) => setLiquors([...liquors, newLiquor]));
  };

  return (
    <div>
      <AddLiquorForm onAdd={addLiquor} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Origin</th>
            <th scope="col">Brand</th>
            <th scope="col">Quantity</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {liquors.map((liquor) => (
            <tr key={liquor.id}>
              <th scope="row">{liquor.id}</th>
              <td>{liquor.image}</td>
              <td>{liquor.name}</td>
              <td>{liquor.price}</td>
              <td>{liquor.description}</td>
              <td>{liquor.origin}</td>
              <td>{liquor.brand}</td>
              <td>{liquor.quantity}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteLiquor(liquor.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LiquorTable;