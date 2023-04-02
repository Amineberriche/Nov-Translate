import axios from "axios";
import authHeader from './auth-header';

const API_URL = 'http://localhost:5000/api';

class UserService {
    
    getAll() {
        return axios.get(API_URL + '/users', { headers: authHeader() });
    }

    getPublicContent() {
        return axios.get(API_URL + 'all');
    }

    getUserBoard() {
        return axios.get(API_URL + 'user', { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(API_URL + 'admin', { headers: authHeader() });
    }
    getUser() {
        return axios.get(API_URL +'/user/me',{ headers: authHeader() });
    }
    
    getProfil = username => {
        return axios.get(API_URL +`/users/${username}`,{ headers: authHeader() });
    }

    ckeckUsername() {
        return axios.get(API_URL +'/user/checkUsernameAvailability',{ headers: authHeader() }); 
    }

    ckeckEmail() {
        return axios.get(API_URL +'/user/checkEmailAvailability',{ headers: authHeader() });
    }

}

export default new UserService();