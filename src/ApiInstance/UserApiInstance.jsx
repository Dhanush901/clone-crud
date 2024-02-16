import axios from "axios";


let BASE_ULR = "https://api.escuelajs.co/api/v1/"


let UserApiInstance = axios.create({
    baseURL:BASE_ULR
})
export default UserApiInstance;