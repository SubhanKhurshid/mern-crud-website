import axios from "axios";

const USER_API_URL = "http://localhost:3000/api/v1/register";

class UserService {
  async saveData(user) {
    return await axios.post(USER_API_URL, user);
  }
  async getData() {
    return await axios.get(USER_API_URL);
  }
  async deleteUser(id) {
    return await axios.delete(USER_API_URL + "/" + id);
  }
  async updateUser(id, user) {
    return await axios.put(USER_API_URL + "/" + id, user);
  }
  async getUserById(id) {
    return await axios.get(USER_API_URL + "/" + id);
  }
}

export default new UserService();
