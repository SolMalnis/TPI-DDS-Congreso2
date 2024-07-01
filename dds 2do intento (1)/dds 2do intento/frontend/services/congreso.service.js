import axios from 'axios';

const apiUrl = "http://localhost:3000"

const getAllCongresos = async () => {
    try {
        const response1 = await axios.get(`${apiUrl}/congreso`)
        const data = response1.data;
        const response2 = await axios.get(`${apiUrl}/congreso`)
        const data2 = response2.data;

        for (let i = 0; i < data.length; i++) {
            for(let j = 0; j < data2.length; j++){
                if(data[i].id_congreso === data2[j].id){
                    data[i].id_congreso[j].nombre;             
                }
            }
        }

        return data;
        
    } catch (error) {
        throw error;
    }
}
