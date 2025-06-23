"use client";

import { useParams } from "next/navigation";
import { useCampaign } from "@/services/campaign";
import { useSectionContent } from "@/services/sectionContent";
import { useProduct } from "@/services/product";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";

export default function CampaignPage() {
  const { slug } = useParams();

  // Fetch campaign data
  const {
    data: campaign,
    isLoading: isCampaignLoading,
    error: campaignError,
  } = useCampaign(slug);

  const campaignId = campaign?.data?.id;

  // Fetch section content only when campaignId is available
  const {
    data: sectionContent,
    isLoading: isSectionLoading,
    error: sectionError,
  } = useSectionContent(campaignId);

  // Fetch products only when campaignId is available
  const {
    data: product,
    isLoading: isProductLoading,
    error: productError,
  } = useProduct(campaignId);

  // Handle loading states
  if (isCampaignLoading || isSectionLoading || isProductLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Handle errors
  if (campaignError || sectionError || productError) {
    const error = campaignError || sectionError || productError;
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-center p-4">
          <p>Error loading data. Please try again later.</p>
          <p className="text-sm text-gray-500 mt-2">{error?.message}</p>
        </div>
      </div>
    );
  }

  // Find sections
  const heroSection = sectionContent?.data?.find(
    (section) => section.sectionType === "Hero"
  );
  const footerSection = sectionContent?.data?.find(
    (section) => section.sectionType === "Footer"
  );
  return (
    <main className="flex flex-col min-h-screen w-full bg-yellow-50">
      <div className="flex-grow">
        <Hero
          content={{
            title: heroSection?.content?.title || campaign?.data?.name,
            subtitle:
              heroSection?.content?.subtitle || campaign?.data?.description,
          }}
          backgroundColor={campaign?.data?.template?.backgroundColor}
          textColor={campaign?.data?.template?.textColor}
        />
        <ProductList products={product?.data || []} />
      </div>
      <Footer
        content={{ text: footerSection?.content?.text || campaign?.data?.name }}
        backgroundColor={campaign?.data?.template?.backgroundColor}
        textColor={campaign?.data?.template?.textColor}
      />
    </main>
  );
}
