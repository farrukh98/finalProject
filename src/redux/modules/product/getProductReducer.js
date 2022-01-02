const defaultState={
    loading:false,
    sucess:false,
    error:false,
    data:[],
}
export const getProductReducer=(state=defaultState,action)=>{
    switch(action.type){
        case"GET_PRODUCT_PENDING":
        return{
            loading:true,
            success:false,
            error:false,
            data:[],
    }
    case "GET_PRODUCT_FULFILLED":
        return {
            loading: false,
            success: true,
            error: false,
            data: action.payload.data,
        }

    case "GET_PRODUCT_REJECTED":
        return {
            loading: false,
            success: false,
            error: true,
            data: [],
        }
    default:
        return state;

}
}