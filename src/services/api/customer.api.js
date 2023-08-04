import axios from "axios";

export const saveEstimate = (form) => (
  axios.post('', form)
);

export const saveCounseling = (form) => (
  axios.post('', form)
);