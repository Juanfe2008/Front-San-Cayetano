import axios from "axios";

export default class UsersService {
  url = "http://localhost:8080/api/users/"

  async getAll(){
    return await axios.get(this.url+"list")
  }

  async save(user){
    return axios.post(this.url+"save", user)
  }

  async update(user){
    return axios.put(this.url+"update",user)
  }
}
