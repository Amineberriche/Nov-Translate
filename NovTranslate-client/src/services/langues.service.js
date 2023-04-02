import httpClient from "../http-common";


const createlangue = (projectId, data) => {
    return httpClient.post(`/projects/${projectId}/langues`, data);
}

const getlangue = id => {
    return httpClient.get(`/langues/${id}`);
}


const updatelangue = data => {
    return httpClient.put('/langues', data);
}

const removelangue = id => {
    return httpClient.delete(`/langues/${id}`);
}


export default { createlangue , getlangue , updatelangue , removelangue };