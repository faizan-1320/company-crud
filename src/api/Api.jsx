import axios from "axios";

const url = "http://localhost:4000/companydata"

export async function getCompany() {
    const response = await axios.get(url);
    return response.data
}