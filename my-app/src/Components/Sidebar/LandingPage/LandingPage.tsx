import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../HomeLayout";
import { Flex, Typography } from "antd";
import {
  StyledImageButton,
  StyledLandingCard,
  StyledSearchButton,
} from "../../style";

const { Text } = Typography;
const LandingPage = () => {
  return (
    <DefaultLayout>
      <StyledLandingCard>
        <StyledSearchButton>
          Your concise destination for comprehensive vehicle information.
        </StyledSearchButton>
        <Flex gap={20}>
          <StyledImageButton>
            <Link to="/dashboard">Dashboard</Link>
          </StyledImageButton>
          <StyledImageButton>
            <Link to="/vehicle">Vehicle</Link>
          </StyledImageButton>
        </Flex>
      </StyledLandingCard>
    </DefaultLayout>
  );
};

export default LandingPage;
