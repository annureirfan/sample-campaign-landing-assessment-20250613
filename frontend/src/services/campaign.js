import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const getAllCampaigns = async () => {
  const res = await api.get("/campaigns");
  return res.data;
};

export const useAllCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: getAllCampaigns,
  });
};

export const getCampaignBySlug = async (slug) => {
  const res = await api.get(`/campaigns/${slug}`);
  return res.data;
};

export const useCampaign = (slug) => {
  return useQuery({
    queryKey: ["campaign", slug],
    queryFn: () => getCampaignBySlug(slug),
    enabled: !!slug,
  });
};
