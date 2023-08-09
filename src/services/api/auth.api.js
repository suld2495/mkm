import axios from "axios";

export const login = (form) => (
  axios.post('/api/login', form)
);