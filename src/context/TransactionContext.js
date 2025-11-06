import createDataContext from "./createDataContext"
import transactionApi from "../api/apiAxios"

const transactionReducer = (state,action) => {
    switch (action.type) {
      case 'fetch_transaction' : 
        return action.payload;
        default:
            return state
      
    }
}
const fetchTransaction = dispatch => async () => {
    const response = await transactionApi.get('/transactions')
    dispatch({type:'fetch_transaction',payload:response.data})
}

export const {Provider, Context} = createDataContext(
    transactionReducer,
    {fetchTransaction},
    []
)