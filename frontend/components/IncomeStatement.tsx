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
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        Income Statement for {company.companyName}
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">Price:</p>
          <p>${company.price}</p>
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
          <p className="font-semibold">Market Cap:</p>
          <p>${company.mktCap}</p>
        </div>
        <div>
          <p className="font-semibold">Last Dividend:</p>
          <p>${company.lastDiv}</p>
        </div>
        <div>
          <p className="font-semibold">Beta:</p>
          <p>{company.beta}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeStatement;
