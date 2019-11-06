import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const urlBase = 'https://boacao.herokuapp.com';
axios.defaults.baseURL = urlBase;


axios.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('token');
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config;
},
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(async function (response) {
// Qualquer código de status que esteja dentro do intervalo de 2xx faz com que esta função seja acionada
// Faça algo com dados de resposta
  if(response.config.url === `${urlBase}/autenticar` && response.status === 200) {
    const { token } = response.data;

    if(token) {
      await AsyncStorage.setItem('token', token);
    }

  }

  return response;
}, function (error) {
// Qualquer código de status que esteja fora do intervalo de 2xx faz com que esta função seja acionada
// Faça algo com erro de resposta
  return Promise.reject(error.response);
});


export const CadastrarDoacao = async(entity) => {
  try {

      const response = await axios.post('/doacao', entity);

      console.log(response)
      const { data} = response;
      return Promise.resolve(data);
  } catch (error) {
    console.log(error.data)
      return Promise.reject(error.data);
  }
}

 export const Autenticar = async (email, password) => {
   try {

     const response = await axios.post('/autenticar', {
      email,
      password
    });

     const { token, entidade } = response.data;


      if(entidade) {
        await AsyncStorage.setItem('entidade', entidade._id);
        console.log(entidade);
      }
     return Promise.resolve({
       token,
       entidade
     })
   } catch (error) {
     console.log(error)
     return Promise.reject(error);
   }
 }
