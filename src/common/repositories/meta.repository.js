import axios from 'axios';

export default {
  async getAppSettings() {
    const { data } = await axios.get(`/appsettings`);
    return data;
  }
};
