import axios from "axios";
import authHeader from "./services/auth-header";

export default axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    headers:{
        'Content-Type' : 'application/json',
        ...authHeader()
    }
});