import axios from 'axios'

const API_URL = "http://localhost:3000/sala";

async function getSalas() {
    try{
        return await axios.get(API_URL).then((response) => {
            return response.data; });
    }
    catch (error) {
        throw error;
    }
}

async function eliminarSala(id) {
    try{
        let newUrl = API_URL + "/" + id;
        return await axios.put(newUrl).then((response) => {
          return response.data;
        });
    }catch (error) {
        throw error;
    }
   
  }



export default {getSalas, eliminarSala}