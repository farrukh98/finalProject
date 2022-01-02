import { combineReducers } from "redux";
import { cartReducer } from "../modules/cart/cartReducer";
import { getHistoryReducer } from "../modules/history/historyReducer";
import { getProductReducer } from "../modules/product/getProductReducer";

export const rootReducer= combineReducers({
getProduct:getProductReducer,
cart:cartReducer,
history:getHistoryReducer,

})