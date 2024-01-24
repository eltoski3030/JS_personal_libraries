const grocery_list = {
    lacteos: {},
    carnes: {},
    arinas: {},
    agregar_articulos(lac, carne, arina) {
      this.grocery_list = {
        lacteos: lac,
        carnes: carne,
        arinas: arina,
      };
    },
    agregar_precio(precio1, precio2, precio3) {
      this.grocery_list = {
        lacteos: precio1,
        carnes: precio2,
        arinas: precio3,
      };
    },
  };
  
  const multiply_cart = (multiplyer) => {
    let new_cart = {}; // Initialize new_cart as an object
    for (let item in grocery_list.grocery_list) {
      // Iterate over the properties of grocery_list.grocery_list
      new_cart[item] = grocery_list.grocery_list[item] * multiplyer;
    }
    return new_cart;
  };
  
  // Example usage
  grocery_list.agregar_precio(2, 3, 4);
  const multipliedCart = multiply_cart(2);
  console.log(multipliedCart);
 
  