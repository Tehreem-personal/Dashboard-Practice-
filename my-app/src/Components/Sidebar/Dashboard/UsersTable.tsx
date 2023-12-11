import { useState, useEffect }  from 'react';
import { Table, Tag, Space } from 'antd';
import axios from "axios";
import { StyledTableCard } from '../../style';

const ActiveUsers = () => {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination]:any = useState({
    total: 47,
    current: 1,
    pageSize: 8,
    showSizeChanger: true,
    pageSizeOptions: ['8', '16', '24', '32'],
  });

  useEffect(() => {
    getUserData();
  }, []);
  
  const handleTableChange = (pagination:any) => {
    setPagination(pagination);
  };
  const getUserData = async () => {
    try {
      const response = await axios.get('https://finalspaceapi.com/api/v0/character/');
      const data = response.data.map((row:any) => ({
        ID: row.id,
        Name: row.name.trim(),
        Image: row.img_url,
        Origin: row.origin,
        Gender: row.gender,
        Status: row.status,
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
const columns:any = [
  {
    title: 'ID',
    dataIndex: 'ID',
    defaultSortOrder: 'descend',
    sorter: (a:any, b:any) => a.ID - b.ID,
  
    key: 'ID',
  },
  {
    title: 'Name',
    dataIndex: 'Name',
    key: 'Name',
    render: (text:any, record:any) => (
      <Space>
        <img src={record.Image} alt="Profile" style={{ width: 48, height: 48 }} />
        {text}
      </Space>
    ),
    sortDirections: ['descend', 'ascend'],
    sorter: (a:any, b:any) => a.Name.localeCompare(b.Name),
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
      {
        text: 'Male',
        value: 'Male',
      },
      {
        text: 'Female',
        value: 'Female',
      },
    ],
    onFilter: (value:any, record:any) => record.Gender.indexOf(value) === 0,

  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
    render: (text:any) => {
      let color;
      if (text === 'Alive') {
        color = 'green';
      } else if (text === 'Deceased') {
        color = 'volcano';
      } else if (text === 'Imprisoned') {
        color = 'geekblue';
      } 
      else if (text === 'Operational') {
        color = 'yellow';
      }
        else {
        color = 'defaultColor'; 
      }
    
      return (
        <Tag color={color}>
          {text.toUpperCase()}
        </Tag>
      );
    },
    filters: [
      {
        text: 'Alive',
        value: 'Alive',
      },
      {
        text: 'Deceased',
        value: 'Deceased',
      },
      {
        text: 'Operational',
        value: 'Operational',
      },
      {
        text: 'Imprisoned',
        value: 'Imprisoned',
      },
      
    ],
    onFilter: (value:any, record:any) => record.Status.indexOf(value) === 0,

  },
  
]

return(
 <StyledTableCard>
 <Table 
        columns={columns}
        dataSource={users}
        pagination={pagination}
        onChange={handleTableChange}
      />
 </StyledTableCard>
  )
}

export default ActiveUsers;