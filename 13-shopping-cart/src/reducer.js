const reducer = (currentState, action) => {
    switch (action.type) {
        case 'CLEAR_CART':
            return {
                ...currentState,
                cart:[]    
            }

        case 'REMOVE':

            return {
                ...currentState,
                cart:currentState.cart.filter(item => item.id !== action.payload)                
            }
        
        case 'INCREASE':
            let tempCart = currentState.cart.map(item => {
                if(item.id === action.payload){
                    return {...item,amount:item.amount+1}
                }
                return item;
            });
            return {
                ...currentState,
                cart:tempCart            
            }

        case 'DECREASE':
            let tempCart1 = currentState.cart.map(item => {
                if(item.id === action.payload){
                    return {...item, amount:item.amount-1}
                }
                return item;
            }).filter(item=> item.amount > 0);
            return {
                ...currentState,
                cart:tempCart1
            }

        case 'GET_TOTALS':
            let {total,amount} = currentState.cart.reduce((cartTotal,cartItem)=>{
                const {amount, price} = cartItem;
                // count items
                cartTotal.amount += amount;
                // count final amount
                cartTotal.total += amount * price;
                return cartTotal;
            },           
            { // initialize items
                total:0,
                amount:0
            })
            total = parseFloat(total.toFixed(2));
        return {
            ...currentState,
            total,
            amount
        }
        
        case 'LOADING':
            return {
                ...currentState,loading:true
            }

        case 'DISPLAY_ITEMS':
            return {
                ...currentState,cart:action.payload,loading:false
            }
        default:
            return currentState;
    }
}
    
export default reducer; 