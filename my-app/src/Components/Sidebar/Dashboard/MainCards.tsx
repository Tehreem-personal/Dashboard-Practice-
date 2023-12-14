import React from "react";
import { Col, Row, Flex } from "antd";
import ApexChart from "./ApexChart";
import { Image, Space, Typography } from "antd";
import {
  StyledBlueButton,
  StyledGreenButton,
  StyledMainCard,
  StyledMainLeftCards,
} from "../../style";
import card1 from "../../../assets/leftcard1.jpg";
import card2 from "../../../assets/leftcard2.jpg";

const { Text } = Typography;
const MainCards = () => {
  return (
    <Row gutter={{ xs: 8, sm: 32, md: 32, lg: 8, xl: 8 }}>
      <Col className="gutter-row" span={15}>
        <StyledMainCard>  
          <ApexChart />
        </StyledMainCard>
      </Col>
      <Col className="gutter-row" span={9}>
        <StyledMainLeftCards>
          <Flex justify="space-between">
            <Flex gap={32} vertical>
              <Text strong>Enhance your Compaign for better outreach</Text>
              <StyledGreenButton> Upgrade Account</StyledGreenButton>
            </Flex>
            <Image width={300} height={150} src={card1} alt="account upgrade" />
          </Flex>
        </StyledMainLeftCards>
        <StyledMainLeftCards>
          <Flex justify="space-between" >
            <Flex gap={32} vertical>
              <Text strong>Earning Reports</Text>
              <Space direction="horizontal" size={8}>
                <Text strong>This Month</Text>
                <Text strong>Last Month</Text>
              </Space>
              <StyledBlueButton> Generate Results</StyledBlueButton>
            </Flex>
            <Image width={200} height={150} src={card2} alt="earning report"/>
          </Flex>
        </StyledMainLeftCards>
      </Col>
    </Row>
  );
};

export default MainCards;
