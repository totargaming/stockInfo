"use client";
import { getCompanyProfile } from "@/app/api/api";
import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { CompanyProfile } from "@/types/company";
import React, { useEffect, useState } from "react";

interface Props {
  params: Promise<{ ticker: string }>;
}

const Company = ({ params }: Props) => {
  const [company, setCompany] = useState<CompanyProfile>();
  const [ticker, setTicker] = useState<string | null>(null);

  useEffect(() => {
    const unwrapParams = async () => {
      const { ticker } = await params;
      setTicker(ticker);
    };
    unwrapParams();
  }, [params]);

  useEffect(() => {
    if (ticker) {
      const getProfileInit = async () => {
        const result = await getCompanyProfile(ticker);
        setCompany(result?.data[0]);
      };
      getProfileInit();
    }
  }, [ticker]);

  return (
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
      <Sidebar />

      <Dashboard />
    </div>
  );
};

export default Company;
