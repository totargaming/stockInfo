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
    <div className="p-4">
      <h1 className="text-2xl font-bold">{company.companyName}</h1>
      <Image
        src={company.image}
        alt={company.companyName}
        width={128}
        height={128}
        className="w-32 h-32 my-4"
      />
      <p className="mb-2">{company.description}</p>
      <p className="mb-2">
        <strong>CEO:</strong> {company.ceo}
      </p>
      <p className="mb-2">
        <strong>Price:</strong> ${company.price}
      </p>
      <p className="mb-2">
        <strong>Market Cap:</strong> ${company.mktCap}
      </p>
    </div>
  );
};

export default CompanyProfile;
