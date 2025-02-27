"use client";

import React, { useEffect, useState } from "react";
import { getCompanyProfile } from "@/app/api/api";
import { CompanyProfile as CompanyProfileType } from "@/types/company";
import Image from "next/image";

interface Props {
  ticker: string;
}

const CompanyProfile = ({ ticker }: Props) => {
  const [company, setCompany] = useState<CompanyProfileType | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await getCompanyProfile(ticker);
      if (result && result.data && result.data[0]) {
        setCompany(result.data[0]);
      }
    };
    fetchProfile();
  }, [ticker]);

  if (!company) return <div className="p-4">Loading profile...</div>;

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Image
          src={company.image}
          alt={company.companyName}
          width={128}
          height={128}
          className="w-32 h-32 rounded-full"
        />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{company.companyName}</h1>
          <p className="text-gray-600">{company.industry}</p>
        </div>
      </div>
      <p className="mb-4">{company.description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">CEO:</p>
          <p>{company.ceo}</p>
        </div>
        <div>
          <p className="font-semibold">Price:</p>
          <p>${company.price}</p>
        </div>
        <div>
          <p className="font-semibold">Market Cap:</p>
          <p>${company.mktCap}</p>
        </div>
        <div>
          <p className="font-semibold">Volume:</p>
          <p>{company.volAvg}</p>
        </div>
        <div>
          <p className="font-semibold">Change:</p>
          <p>{company.changes}%</p>
        </div>
        <div>
          <p className="font-semibold">Website:</p>
          <a
            href={company.website}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
