import axios from 'axios';
var dados1
function Dados(chave) {
    axios.get('http://localhost:3002/api/acervo/' + chave)
        .then(function (response) {
            dados1 = (response.data.docs);
            return (dados1)
            
        })
        .catch(function (error) {
            console.warm(error);
        })
}

export default Dados