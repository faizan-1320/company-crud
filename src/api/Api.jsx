import axios from "axios";

const url = "http://localhost:5000/companydata"

export async function getCompany() {
    try{
        const response = await axios.get(url);
        return response.data
    }catch(err){
        console.log(err);   
    }
}

export async function addCompany(company) {
    try{
        const response = await axios.post(url,company)
        return response.data
    }catch(err){
        console.log(err);   
    }
}

export async function editCompany(cmpId,company) {
    try{
        const response = await axios.put(`${url}/${cmpId}`,company)
        return response.data
    }catch(err){
        console.log(err);   
    }
}

export async function deleteCompany(cmpId) {
    try{
        const response = await axios.delete(`${url}/${cmpId}`)
        return response.data
    }catch(err){
        console.log(err);   
    }
}

export async function companyGetById(cmpId) {
    try{
        const response = await axios.get(`${url}/${cmpId}`)
        return response.data
    }catch(err){
        console.log(err);   
    }
}