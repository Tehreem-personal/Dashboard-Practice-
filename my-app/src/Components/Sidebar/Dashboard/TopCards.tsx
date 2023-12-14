import React from "react";
import { StyledCard, StyledIconCard } from "../../style";
import { StarOutlined } from "@ant-design/icons";
import { Col, Row, Typography, Space, Flex, Tag } from "antd";
const { Text, Paragraph } = Typography;
const TopCards:React.FC = () => {
  return (
    <>
      <Row gutter={{ xs: 8, sm: 8, md: 24, lg: 24 }}>
        <Col span={6}>
          <StyledCard>
            <Flex justify="space-between">
              <Space size={5} direction="vertical">
                <Text strong> Total Revenue </Text>
                <Text strong>$58425</Text>
                <Paragraph strong>
                  <Tag color="#87d068">
                    <StarOutlined />
                    879068
                  </Tag>
                  since last week
                </Paragraph>
              </Space>
              <StyledIconCard />
            </Flex>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Flex justify="space-between">
              <Space size={5} direction="vertical">
                <Text strong> Total Refunds </Text>
                <Text strong>$2568</Text>
                <Paragraph strong>
                  <Tag color="#f50">
                    <StarOutlined />
                    178623
                  </Tag>
                  since last week
                </Paragraph>
              </Space>
              <StyledIconCard />
            </Flex>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Flex justify="space-between">
              <Space size={5} direction="vertical">
                <Text strong> Active Users</Text>
                <Text strong>58425</Text>
                <Paragraph strong>
                  <Tag color="#87d068">
                    <StarOutlined />
                    879068
                  </Tag>
                  since last week
                </Paragraph>
              </Space>
              <StyledIconCard />
            </Flex>
          </StyledCard>
        </Col>
        <Col span={6}>
          <StyledCard>
            <Flex justify="space-between">
              <Space size={5} direction="vertical">
                <Text strong> All Time Orders </Text>
                <Text strong>8425</Text>
                <Paragraph strong>
                  <Tag color="#f50"> <StarOutlined /> 178623 </Tag>  since last week
                </Paragraph>
              </Space>
              <StyledIconCard />
            </Flex>
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default TopCards;
