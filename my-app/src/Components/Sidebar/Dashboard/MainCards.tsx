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
            <Flex gap="small" vertical>
              <span>Enhance your Compaign for better outreach</span>
              <StyledGreenButton> Upgrade Account</StyledGreenButton>
            </Flex>
            <Image width={300} height={150} src={card1} />
          </Flex>
        </StyledMainLeftCards>
        <StyledMainLeftCards>
          <Flex justify="space-between" >
            <Flex gap="small" vertical>
              <Text strong>Earning Reports</Text>
              <Space direction="horizontal" size={3}>
                <Text>This Month</Text>
                <Text>Last Month</Text>
              </Space>
              <StyledBlueButton> Generate Results</StyledBlueButton>
            </Flex>
            <Image width={200} height={150} src={card2} />
          </Flex>
        </StyledMainLeftCards>
      </Col>
    </Row>
  );
};

export default MainCards;
