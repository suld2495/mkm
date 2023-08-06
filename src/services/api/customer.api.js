import axios from "axios";

export const saveEstimate = (form) => (
  axios.post('/api/estimate', form)
);

export const saveCounseling = (form) => (
  axios.post('/api/counseling', form)
);