"use client";

import React, { use } from "react";
import CompanyProfile from "@/components/CompanyProfile";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = use(params);
  return <CompanyProfile ticker={ticker} />;
}
