import { useMutation, useQuery, useQueryClient } from "react-query";
import * as authApi from '../services/api/auth.api';

const useAuth = () => {
  const queryClient = useQueryClient();
  useQuery({
    queryKey: ['user'],
    async queryFn() {
      return null;
    }
  });

  const login = useMutation({
    async mutationFn(form) {
      const response = await authApi.login(form);
      queryClient.setQueryData(['user'], response.data);
      return response.data;
    },
  });

  return {
    login
  }
};

export default useAuth;