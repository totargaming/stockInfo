"use client";

import React, { useEffect, useState } from "react";
import { getCompanyProfile } from "@/app/api/api";
import { CompanyProfile as CompanyProfileType } from "@/types/company";

interface Props {
  ticker: string;
}

const IncomeStatement = ({ ticker }: Props) => {
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

  if (!company) return <div className="p-4">Loading income statement...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">
        Income Statement for {company.companyName}
      </h1>
      <p className="mb-2">
        <strong>Price:</strong> ${company.price}
      </p>
      <p className="mb-2">
        <strong>Volume:</strong> {company.volume}
      </p>
      <p className="mb-2">
        <strong>Change:</strong> {company.change} ({company.changePercentage}%)
      </p>
      {/* Add more income statement–related details as needed */}
    </div>
  );
};

export default IncomeStatement;
