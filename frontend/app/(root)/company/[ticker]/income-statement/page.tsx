"use client";

import React, { use } from "react";
import IncomeStatement from "@/components/IncomeStatement";

export default function IncomeStatementPage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = use(params);
  return <IncomeStatement ticker={ticker} />;
}
