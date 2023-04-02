import httpClient from "../http-common";

const getAll =  () => {
    return httpClient.get('/projects');
}

const create = data => {
    return httpClient.post("/projects" , data);
}

const get = id => {
    return httpClient.get(`/projects/${id}`);
}

const update = data => {
    return httpClient.put('/projects', data);
}

const remove = id => {
    return httpClient.delete(`/projects/${id}`);
}

export default { getAll , create, get, update , remove };