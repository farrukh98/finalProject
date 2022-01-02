import axios from "axios";

export const getPRoductAction=()=>({
    type:"GET_PRODUCT",
    payload:axios.get(
        "https://store-management-backend-app.herokuapp.com/api/v1/product"
    )
})