import React from 'react'
import { Card, Col, Row, Table , Flex, Typography, } from 'antd';
import { StyledTableCard} from "../../style";
import type { ColumnsType } from 'antd/es/table';
const {Text}=Typography;
const columns: ColumnsType =
  [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      defaultSortOrder: 'descend',
      sorter: (a:any, b:any) => a.age - b.age,
    },
    {
      title: 'Location',
      dataIndex: 'address',
    },
    
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 38,
      address: 'Sydney No. 1 Lake Park',
    },
  ];
const TransactionTables = () => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 8 }} style={{marginTop:"10px"}}>
    <Col span={12}>
        <StyledTableCard>
          <Flex justify="space-between">
            <Text strong>Latest Tansaction</Text>
            <Text strong>Sort By: Age</Text>
          </Flex>
         
        <Table  columns={columns} dataSource={data} size="middle" />
        </StyledTableCard>
    </Col>
    <Col span={12}>
    <StyledTableCard>
          <Flex justify="space-between">
            <Text strong>Latest Orders</Text>
            <Text strong>Sort By: Recent</Text>
          </Flex>
         
        <Table columns={columns} dataSource={data} size="middle" />
        </StyledTableCard>
   
    </Col>
  </Row>
  )
}

export default TransactionTables
