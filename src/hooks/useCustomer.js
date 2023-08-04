import { useMutation } from "react-query";
import * as customerApi from '../services/api/customer.api';

const useCustomer = () => {
  const saveEstimate = useMutation({
    mutationFn(form) {
      return customerApi.saveEstimate(form);
    }
  });

  const saveCounseling = useMutation({
    mutationFn(form) {
      return customerApi.saveCounseling(form);
    }
  });

  return {
    saveEstimate,
    saveCounseling,
  }
};

export default useCustomer;