import React from "react";

interface Props {
  ticker: string;
  children: React.ReactNode;
}

const Dashboard = ({ ticker, children }: Props) => {
  return (
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
      <div className="relative pt-20 pb-32 bg-lightBlue-500">
        <div className="px-4 md:px-6 mx-auto w-full">
          {/* Optional header could go here using {ticker} */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
