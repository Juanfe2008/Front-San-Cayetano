import axios from 'axios';

export default class CrudService {
  url = "http://localhost:8080/api/products/";

   async getAll(){
     return await axios.get(this.url+"list")
  }

   save(productos) {
    return  axios.post(this.url+"save", productos)
  }

  update(productos) {
    return  axios.put(this.url+"update", productos)
  }

  listById(id){
     return axios.get(this.url)
  }

  delete(id){
    return axios.delete(this.url+"delete/"+id)
  }
}
