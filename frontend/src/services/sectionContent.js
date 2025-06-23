import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const getSectionContentById = async (id) => {
  const res = await api.get(`/section-contents/${id}`);
  return res.data;
};

export const useSectionContent = (id) => {
  return useQuery({
    queryKey: ["section-content", id],
    queryFn: () => getSectionContentById(id),
    enabled: !!id,
  });
};
