import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const getProductByCampaignId = async (campaignId) => {
  const res = await api.get(`/products/${campaignId}`);
  return res.data;
};

export const useProduct = (campaignId) => {
  return useQuery({
    queryKey: ["product", campaignId],
    queryFn: () => getProductByCampaignId(campaignId),
    enabled: !!campaignId,
  });
};
