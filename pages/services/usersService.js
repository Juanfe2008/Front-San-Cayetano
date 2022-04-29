import axios from "axios";

export default class UsersService {
  url = "https://sancayetano.oa.r.appspot.com/api/users/"

  async getAll(){
    return await axios.get(this.url+"list")
  }

  async save(user){
    return axios.post(this.url+"save", user)
  }
}
