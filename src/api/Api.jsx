import axios from "axios";
import Swal from 'sweetalert2'

const url = "http://localhost:5000/companydata"


export async function getCompany() {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (err) {
        handleApiError('Failed to fetch company data.')
    }
}

export async function addCompany(company) {
    try {
        const response = await axios.post(url, company)
        return response.data
    } catch (err) {
        handleApiError('Failed to add company.')
    }
}

export async function editCompany(cmpId, company) {
    try {
        const response = await axios.put(`${url}/${cmpId}`, company)
        return response.data
    } catch (err) {
        handleApiError('Failed to update company.')
    }
}

export async function deleteCompany(cmpId) {
    try {
        const response = await axios.delete(`${url}/${cmpId}`)
        return response.data
    } catch (err) {
        handleApiError('Failed to delete company.')
    }
}

export async function companyGetById(cmpId) {
    try {
        const response = await axios.get(`${url}/${cmpId}`)
        return response.data
    } catch (err) {
        handleApiError('Failed to get company details.')
    }
}

function handleApiError(message) {
    Swal.fire({
        title: 'Error!',
        text: message,
        icon: 'error',
    })
}
