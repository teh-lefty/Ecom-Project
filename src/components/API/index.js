const BASE_URL = "https://fakestoreapi.com";


export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,

      }),
    });
      const result = await response.json();
      return result.token;
  } catch (error) {
    console.error("error /login user", error);
  }
  };

export const getAllProducts = async() => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const result = await response.json();
    // console.log("result", result);
    return result;
  } catch (error) {
    console.error("error /GET all products", error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("error /GET single product", error);
  }
};

export const getAllUsers = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    const result = await response.json();
    const userData = result.find((user) => user.username === username)
    return userData;
} catch (error) {
  console.error("error /GET all users", error);
}
};

export const getUserCart = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/carts/${id}`);
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.error("error /GET user cart", error);
  }
};


