const defaultState={
    loading:false,
    sucess:false,
    error:false,
    data:[],
}
export const getHistoryReducer=(state=defaultState,action)=>{
    switch(action.type){
        case"GET_HISTORY_PENDING":
        return{
            loading:true,
            success:false,
            error:false,
            data:[],
    }
    case "GET_HISTORY_FULFILLED":
        return {
            loading: false,
            success: true,
            error: false,
            data: action.payload.data,
        }

    case "GET_HISTORY_REJECTED":
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