import React from "react";
import DefaultLayout from "../../HomeLayout/Layout";
import TopCards from "./TopCards";
import MainCards from "./MainCards";
import TransactionTables from "./TransactionTable";
import ActiveUsers from "./UsersTable";
const Dashboard = () => {
  return (
    <DefaultLayout>
      <TopCards />
      <MainCards />
      <ActiveUsers />
      <TransactionTables />
    </DefaultLayout>
  );
};

export default Dashboard;
