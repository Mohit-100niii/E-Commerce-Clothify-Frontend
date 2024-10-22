// Define initial state
const initialState = {
    cartItems: [],
    loading: false,
    error: null,
    isAdded: false,
    isUpdated: false,
    isDelete: false,
  };
  
  // Define action types
  const ADD_TO_CART_PENDING = "cart/add-to-cart-pending";
  const ADD_TO_CART_SUCCESS = "cart/add-to-cart-success";
  const ADD_TO_CART_FAILURE = "cart/add-to-cart-failure";
  const FETCH_CART_ITEMS_PENDING = "cart/fetch-items-pending";
  const FETCH_CART_ITEMS_SUCCESS = "cart/fetch-items-success";
  const FETCH_CART_ITEMS_FAILURE = "cart/fetch-items-failure";
  
  // Define action creators
  const addToCartPending = () => ({ type: ADD_TO_CART_PENDING });
  const addToCartSuccess = (cartItems) => ({ type: ADD_TO_CART_SUCCESS, payload: cartItems });
  const addToCartFailure = (error) => ({ type: ADD_TO_CART_FAILURE, payload: error });
  
  const fetchCartItemsPending = () => ({ type: FETCH_CART_ITEMS_PENDING });
  const fetchCartItemsSuccess = (cartItems) => ({ type: FETCH_CART_ITEMS_SUCCESS, payload: cartItems });
  const fetchCartItemsFailure = (error) => ({ type: FETCH_CART_ITEMS_FAILURE, payload: error });
  
  // Define the async action to add an item to the cart
  const addOrderToCart = (cartItem) => {
    return (dispatch) => {
      dispatch(addToCartPending());
  
      try {
        const cartItems = localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [];
  
        // Add the new item to the cart
        cartItems.push(cartItem);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
        dispatch(addToCartSuccess(cartItems));
      } catch (error) {
        dispatch(addToCartFailure(error.message));
      }
    };
  };
  
  // Define the async action to fetch cart items from localStorage
  const getCartItemsFromLocalStorage = () => {
    return (dispatch) => {
      dispatch(fetchCartItemsPending());
  
      try {
        const cartItems = localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : [];
  
        dispatch(fetchCartItemsSuccess(cartItems));
      } catch (error) {
        dispatch(fetchCartItemsFailure(error.message));
      }
    };
  };
  
  // Define the reducer
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART_PENDING:
        return {
          ...state,
          loading: true,
        };
      case ADD_TO_CART_SUCCESS:
        return {
          ...state,
          loading: false,
          cartItems: action.payload,
          isAdded: true,
        };
      case ADD_TO_CART_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case FETCH_CART_ITEMS_PENDING:
        return {
          ...state,
          loading: true,
        };
      case FETCH_CART_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          cartItems: action.payload,
        };
      case FETCH_CART_ITEMS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  // Export the action creators and the reducer
  export { addOrderToCart, getCartItemsFromLocalStorage, cartReducer };
  