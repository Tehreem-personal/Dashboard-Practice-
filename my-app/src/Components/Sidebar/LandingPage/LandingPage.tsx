import React from "react";
import { Link } from "react-router-dom";
import DefaultLayout from "../../HomeLayout/Layout";
import { Flex} from "antd";
import car1 from "../../../assets/car1.jpg";
import {StyledImageCard, StyledImageText, StyledImageButton, ContentStyledImage } from "../../style";
const contentStyle = {
  height: "600px",
  width: "900px",
  marginBottom:"30px"
};

const LandingPage = () => {
  return (
    <DefaultLayout>
      <Flex gap={20}>
        <div>
          <ContentStyledImage src={car1}/>
        </div>
        <div>
        <StyledImageCard>
            <StyledImageText>"Your exclusive portal
            including
            vintage and classic cars."
            </StyledImageText>
            <div>
            <StyledImageButton>
            <Link to="/dashboard">
              Dashboard
              </Link></StyledImageButton>
            </div>
          </StyledImageCard>
          <StyledImageCard>
            <StyledImageText>
              Add details on <br />
              WheelWonders.com <br />
              and get the Best Price.
              
            </StyledImageText>
            <div>
            <StyledImageButton>
              
            <Link to="/vehicle">
        Vehicle</Link>
              </StyledImageButton>
            </div>
          </StyledImageCard>
        </div>
      </Flex>
    </DefaultLayout>
  );
};

export default LandingPage;
