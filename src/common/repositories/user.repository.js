import axios from 'axios';

export default {
  async get() {
    const { data } = await axios.get(`/userinfo`);
    return data;
  },
  
  async update(payload) {
    const { data } = await axios.patch(`/userinfo`, payload);
    return data;
  }
};
