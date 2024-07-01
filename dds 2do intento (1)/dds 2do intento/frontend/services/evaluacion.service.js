import axios from 'axios'

const API_URL = "http://localhost:3000/evaluacion";

async function getEvaluaciones() {
    try{
        return await axios.get(API_URL).then((response) => {
            return response.data; });
    }
    catch (error) {
        throw error;
    }
    
}


export default getEvaluaciones