import { useState, useEffect } from 'react';
import { Table, Tag, Space } from 'antd';
import axios from 'axios';
import { StyledTableCard } from '../../style';

interface UserData {
  ID: number;
  Name: string;
  Image: string;
  Origin: string;
  Gender: string;
  Status: string;
}
// Enum for user status
enum Status {
  Alive = 'Alive',
  Deceased = 'Deceased',
  Imprisoned = 'Imprisoned',
  Operational = 'Operational',
}

const ActiveUsers: React.FC = () => {
  // State for storing user data
  const [users, setUsers] = useState<UserData[]>([]);
  // State to manage pagination options
  const [pagination, setPagination] = useState({
    total: 47,
    current: 1,
    pageSize: 8,
    showSizeChanger: true,
    pageSizeOptions: ['8', '16', '24', '32'],
  });

  useEffect(() => {
    getUserData();
  }, []);

  
  const handleTableChange = (pagination: any) => {
    setPagination(pagination);
  };

  // Function to fetch user data from the API
  const getUserData = async () => {
    try {
      const response = await axios.get('https://finalspaceapi.com/api/v0/character/');
      // getting response from API  in table..
      const data: UserData[] = response.data.map((user: any) => ({
        ID: user.id,
        Name: user.name.trim(),
        Image: user.img_url,
        Origin: user.origin,
        Gender: user.gender,
        Status: user.status,
      }));

      setUsers(data);
      setPagination({
        ...pagination,
        total: data.length,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  // Get color based on user status for Tags
  const getStatusColor = (text: string) => {
    const statusColors = {
      [Status.Alive]: 'green',
      [Status.Deceased]: 'volcano',
      [Status.Imprisoned]: 'geekblue',
      [Status.Operational]: 'yellow',
    };
    return statusColors[text] || 'defaultColor';
  };

  
  const columns: any[] = [
    {
      title: 'ID',
      dataIndex: 'ID',
      defaultSortOrder: 'descend',
      sorter: (a: UserData, b: UserData) => a.ID - b.ID,
      key: 'ID',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      render: (text: any, record: UserData) => (
        <Space>
          <img src={record.Image} alt="Profile" style={{ width: 48, height: 48 }} />
          {text}
        </Space>
      ),
      sortDirections: ['descend', 'ascend'],
      sorter: (a: UserData, b: UserData) => a.Name.localeCompare(b.Name),
    },
    {
      title: 'Origin',
      dataIndex: 'Origin',
      key: 'Origin',
    },
    {
      title: 'Gender',
      dataIndex: 'Gender',
      key: 'Gender',
      filters: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' },
      ],
      onFilter: (value: any, record: UserData) => record.Gender.indexOf(value) === 0,
    },
    {
      title: 'Status',
      dataIndex: 'Status',
      key: 'Status',
      render: (text: string) => (
        <Tag color={getStatusColor(text)}>
          {text}
        </Tag>
      ),
      filters: [
        { text: 'Alive', value: Status.Alive },
        { text: 'Deceased', value: Status.Deceased },
        { text: 'Operational', value: Status.Operational },
        { text: 'Imprisoned', value: Status.Imprisoned },
      ],
      onFilter: (value: any, record: UserData) => record.Status.indexOf(value) === 0,
    },
  ];

  return (
    <StyledTableCard>
      <Table columns={columns} dataSource={users} pagination={pagination} onChange={handleTableChange} />
    </StyledTableCard>
  );
};

export default ActiveUsers;
