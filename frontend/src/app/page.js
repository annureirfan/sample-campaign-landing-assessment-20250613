"use client";

import { useAllCampaigns } from "@/services/campaign";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const { data: campaigns, isLoading, error } = useAllCampaigns();

  return (
    <main className="flex flex-col min-h-screen w-full bg-yellow-50">
      <div className="flex-grow">
        <Hero
          content={{
            title: "All Campaigns",
            subtitle: "Browse our current campaigns",
          }}
        />

        <section className="py-12 px-4 max-w-4xl mx-auto">
          {isLoading ? (
            <div className="text-center">Loading campaigns...</div>
          ) : error ? (
            <div className="text-center text-red-500">
              Error loading campaigns: {error.message}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {campaigns?.data?.map((campaign) => (
                <Link
                  key={campaign.id}
                  href={`/${campaign.slug}`}
                  className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-gray-100"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {campaign.name}
                  </h2>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
      <Footer content={{ text: "Campaign Landing" }} className="mt-auto" />
    </main>
  );
}
