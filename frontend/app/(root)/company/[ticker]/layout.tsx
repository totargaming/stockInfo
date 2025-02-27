"use client";

import React, { use } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function CompanyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = use(params);
  return (
    <div className="w-full relative flex overflow-x-hidden">
      <Sidebar ticker={ticker} />
      <Dashboard>{children}</Dashboard>
    </div>
  );
}
