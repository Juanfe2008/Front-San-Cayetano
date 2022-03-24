import axios from 'axios';

export default class CrudService {
  url = "http://localhost:8080/api/";

   async getAll(){
     return await axios.get(this.url+"products/list")
  }

   save(productos) {
    return  axios.post(this.url+"products/save", productos)
  }

  update(productos) {
    return  axios.put(this.url+"products/update", productos)
  }

  listById(id){
     return axios.get(this.url)
  }

  delet(id){
    return axios.delete(this.url+"/"+id)
  }
}
