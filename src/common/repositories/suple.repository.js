import axios from 'axios';
const CancelToken = axios.CancelToken;

export default {
  supleCanceller: null,
  
  async getSuple(params) {
    // Add handling cancellation without throwing into console
    const response = await axios.get('/suple', {params});
    
    if (!response.data) {
      throw new Error('empty response');
    }
    return response.data;
  },
  
  async updateSuple(id, params) {
    const { data } = await axios.patch(`/suple/${id}`, params);
    return data;
  }
};
