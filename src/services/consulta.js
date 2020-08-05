import axios from 'axios';
var dados1 = [];
consulta()
function consulta() {
    axios.get('http://localhost:3000/api/atividades/')
        .then(function (response) {
            return dados1 = (response.data.docs)
        })
        .catch(function (error) {
            console.warm(error);
        })
}

export default consulta