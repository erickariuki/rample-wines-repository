import { useState } from "react";
import './AddLiquorForm.css';


function AddLiquorForm({ onAdd }) {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    description: "",
    origin: "",
    brand: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAdd prop function with the form data to add a new liquor to the table
    onAdd(formData);
    // Clear the form data after submission
    setFormData({
      image: "",
      name: "",
      price: "",
      description: "",
      origin: "",
      brand: "",
      quantity: "",
    });
  };

  return (
    <form id="form" className="add-liquor-form" onSubmit={handleSubmit}>
      <label htmlFor="image">Image URL:</label>
      <input
        type="text"
        id="image"
        name="image"
        value={formData.image}
        onChange={handleChange}
        required
      />
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <label htmlFor="origin">Origin:</label>
      <input
        type="text"
        id="origin"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        required
      />
      <label htmlFor="brand">Brand:</label>
      <input
        type="text"
        id="brand"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        required
      />
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default AddLiquorForm;