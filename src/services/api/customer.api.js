import axios from "axios";

export const saveEstimate = (form) => (
  axios.post('/api/estimate', form)
);

export const saveCounseling = (form) => (
  axios.post('/api/counseling', form)
);

export const getCounselingList = () => (
  axios.get('/api/admin/list/counseling')
);

export const getCounseling = (id) => (
  axios.get(`/api/admin/counseling/${id}`)
);

export const getEstimateList = () => (
  axios.get('/api/admin/list/estimate')
);

export const getEstimate = (id) => (
  axios.get(`/api/admin/estimate/${id}`)
);