import HttpService from "./HttpService";

class AuthService extends HttpService {
  async login(credentials) {
    try {
      const { data } = await this.client.post("/auth/login", credentials);
      const { token, user } = data;

      localStorage.setItem("token", token);
      return user;
    } catch (error) {
      alert("Invalid credentials");
    }
  }

  async logout() {
    await this.client.post('/auth/logout');
    localStorage.removeItem('token');
  }
}

export default new AuthService();
