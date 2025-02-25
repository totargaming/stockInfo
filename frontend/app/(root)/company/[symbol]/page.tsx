import React from "react";

interface Props {
  params: { symbol: string };
}

const Company = ({ params: { symbol } }: Props) => {
  return <div>Company: {symbol}</div>;
};

export default Company;
