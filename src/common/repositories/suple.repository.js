import axios from 'axios';

export default {
  async getSuple(params) {
    // Add handling cancellation without throwing into console
    const { data } = await axios.get('/suple', {params});
    return data;
  },
  
  async updateSuple(id, params) {
    const { data } = await axios.patch(`/suple/${id}`, params);
    return data;
  }
};
