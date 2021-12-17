import Products from "../Components/Products";

const initialState = {
    list: []
}
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { id, Qty } = action.payload;
            const item = Products.find((elem) => elem.id === id);
            return {
                ...state,
                list: [
                    ...state.list,
                    {...item, Qty: Qty}
                ]
            }
        case 'CLEAR_CART':
            return {
                ...state,
                list: []
            }
        
        default: return state;
        // case 'DELETE_FROM_CART':
        //     return {
        //         ...prevState,
        //         userName: action.id,
        //         userToken: action.token,
        //         isLoading: false,
        //     };
        // case 'CHECKOUT':
        //     return {
        //         ...prevState,
        //         userName: null,
        //         userToken: null,
        //         isLoading: false,
        //     };
        // case 'REGISTER':
        //     return {
        //         ...prevState,
        //         userName: action.id,
        //         userToken: action.token,
        //         isLoading: false,
        //     };
    }
};

export default CartReducer;