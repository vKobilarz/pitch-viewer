import api from '../services';

export const getNotes = async () => {
  const response = await api.get('notes');

  return response;
};
