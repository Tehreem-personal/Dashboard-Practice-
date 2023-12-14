import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  AppstoreOutlined,
  UserOutlined,
  CopyOutlined,
  LockOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import { StyledMenu } from '../style';
import { MenuItem } from './type';


function getItem(label: ReactNode, key: string|number, icon: ReactNode, children?: MenuItem[]): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items: MenuItem[] = [
  getItem(
    <Link to="/" style={{ textDecoration: 'none' }}>
      WheelWonders.com
    </Link>,
    's1',
    <GlobalOutlined />
  ),
  getItem('MENU', 'sub', null, [
    getItem(
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        Dashboard
      </Link>,
      '1',
      <AppstoreOutlined />
    ),
    getItem(
      <Link to="/vehicle" style={{ textDecoration: 'none' }}>
        Vehicle
      </Link>,
      'sub1',
      <UserOutlined />
    ),
  ]),

  getItem('MORE', 'sub2', null, [
    getItem('Vehicles', '2', <AppstoreOutlined />),
    getItem('Authentication', 3, <UserOutlined />),
    getItem('Pages', '4', <CopyOutlined />),
  ]),
  getItem('ADMIN KIT', 'sub3', null, [
    getItem('UI Elements', '5' , <LockOutlined />),
    getItem('Advanced Kit', '6', <UserOutlined />),
    getItem('Typography', '7', <CopyOutlined />),
    getItem('Forms', '8', <UserOutlined />),
    getItem('Tables', '9', <CopyOutlined />),
    getItem('Charts', '10', <CopyOutlined />),
    getItem('Icons', '11', <UserOutlined />),
    getItem('Maps', '12', <CopyOutlined />),
  ]),
];

const Sidebar: React.FC = () => {
  return <StyledMenu defaultOpenKeys={['sub', 'sub2', 'sub3']} mode="inline" items={items} />;
};

export default Sidebar;
