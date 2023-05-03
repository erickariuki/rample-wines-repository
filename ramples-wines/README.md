DisplayLiquor React Component

The DisplayLiquor component is a React functional component that displays a list of liquor items. It fetches the liquor data from a REST API endpoint at http://localhost:5000/liquors using the fetch() method and saves the data in the liquors state variable using the useState() hook.

The component displays each liquor item as a card with an image, name, price, description, origin, brand, available quantity and a button to add the item to a shopping cart. The card displays limited information when initially loaded, but clicking on it toggles to show more detailed information about the liquor item.

The component makes use of the useEffect() hook to fetch the data from the API endpoint once when the component is mounted. It also uses the map() method to loop through the liquors array and generate the HTML elements for each liquor item.

The handleToggleDetails() function is called when a card is clicked and toggles the showDetails property of the selected liquor item in the liquors state variable to show or hide the detailed information. 

The handleAddToCart() function is called when the "Add to cart" button is clicked and decreases the quantity property of the selected liquor item in the liquors state variable by one.

Overall, the DisplayLiquor component provides a simple and user-friendly interface for displaying and interacting with a list of liquor items.

Dependencies
1. React.js

How to Use

Install the dependencies by running npm install
Start the development server by running npm start
Open the browser and go to http://localhost:3000 to view the component

License
This component is released under the MIT License.