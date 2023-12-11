import React from "react";
import { UserOutlined, DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Space, Typography, Image, Avatar, Badge, Flex, Dropdown } from "antd";
import { StyledInput, StyledBreadCrumb } from "../style";
import { Link } from "react-router-dom";

const items:any = [
  {
    label: "Admin",
    key: "1",
  },
  {
    label: "User",
    key: "2",
  },
];

const TopNav = () => {
  return (
    <>
      <Flex justify="space-between">
        <StyledInput />
        <Space direction="horizontal" size={5}>
          <Image
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            style={{ height: "20px" }}
          />
          <Badge count={1}>
            <Avatar shape="circle" icon={<UserOutlined />} />
          </Badge>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <span onClick={(e) => e.preventDefault()}>
              <Space>
                Admin
                <DownOutlined />
              </Space>
            </span>
          </Dropdown>
          <SettingOutlined style={{ fontSize: "15px" }} />
        </Space>
      </Flex>

      <StyledBreadCrumb
        items={[
          {
            title: <Link to="/">WheelWonders</Link>,
          },
          {
            title: <Link to="/dashboard"> Dashboard</Link>,
          },
          {
            title: <Link to="/vehicle">Vehicle</Link>,
          },
        ]}
      />
    </>
  );
};

export default TopNav;
