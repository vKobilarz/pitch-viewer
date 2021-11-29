import api from '../services';

interface InstrumentNotesParams {
  name: 'guitar';
}

export const getInstrumentNotes = async ({ name }: InstrumentNotesParams) => {
  const response = await api.get('instruments', { params: { name } });

  return response;
};
