import Products from "../screens/Products";

const initialState = {
    list: []
}
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { id, Qty } = action.payload;
            const item = Products.find((elem) => elem.id === id);
            console.log(item.title);
            return {
                ...state,
                list: [
                    ...state.list,
                    {...item, Qty: Qty}
                ]
            }
        
        case 'RETRIEVE_LIST':
            return {
                ...state,
                list: [
                    ...state.list,
                ]
            }
            
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