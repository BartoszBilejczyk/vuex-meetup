import axios from 'axios';

export default {
  async getSupleSettings() {
    const { data } = await axios.get(`/suple-settings`);
    return data;
  }
};
