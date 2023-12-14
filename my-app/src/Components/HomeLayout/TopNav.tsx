import React from "react";
import { UserOutlined, DownOutlined, SettingOutlined } from "@ant-design/icons";
import { Space, Image, Avatar, Badge, Flex, Dropdown } from "antd";
import { StyledBreadCrumb } from "../style";
import { Link } from "react-router-dom";
import { DropDownMenu} from "./type";

//I have added menu items for the dropdown that is in TopNav
const items:DropDownMenu[] = [
  {
    label: "Admin",
    key: "1",
  },
  {
    label: "User",
    key: "2",
  },
];

const TopNav :React.FC= () => {
  return (
    <>
      <Flex justify="space-between">
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
        <Space direction="horizontal" size={5}>
          <Image
            alt="United States"
            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            style={{ height: "20px" }}
          />
          <Badge count={5}>
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
    </>
  );
};

export default TopNav;
