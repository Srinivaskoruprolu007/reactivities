import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://localhost:5001/api/activities";

export const useFetchActivities = () => {
  const {
    data: activities = [],
    isLoading: isActiviesLoading,
    isError: isActivityError,
  } = useQuery<Activity[], Error>({
    queryKey: ["activities"],
    queryFn: () => axios.get<Activity[]>(API_URL).then((res) => res.data),
  });

  return { activities, isActiviesLoading, isActivityError };
};

export const useCreateActivity = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (activity: Activity) => axios.post(API_URL, activity),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  return { createActivity: (activity: Activity) => mutate(activity) };
};

export const useDeleteActivity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => axios.delete(`${API_URL}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });
};
