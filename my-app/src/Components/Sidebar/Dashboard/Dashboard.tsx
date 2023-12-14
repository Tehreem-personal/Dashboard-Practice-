import React from "react";
import DefaultLayout from "../../HomeLayout/index";
import TopCards from "./TopCards";
import MainCards from "./MainCards";
import TransactionTables from "./TransactionTable";
import ActiveUsers from "./UsersTable";
const Dashboard = () => {
  return (
    <DefaultLayout>
      <TopCards />
      <MainCards />
      <TransactionTables />
      <ActiveUsers />
     
    </DefaultLayout>
  );
};

export default Dashboard;
