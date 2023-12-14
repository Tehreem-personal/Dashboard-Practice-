import React, { ReactNode } from "react";
import { Affix, Layout } from "antd";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import FooterEnd from "../Sidebar/Dashboard/FooterEnd";
import {
  StyledSider,
  StyledHeader,
  StyledContent,
  StyledFooter,
} from "../style";
import { DefaultLayoutProps } from "./type";

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <StyledSider breakpoint="lg" collapsedWidth="0">
        <Affix>
          <Sidebar />
        </Affix>
      </StyledSider>
          <Layout>
            <StyledHeader>
              <TopNav />
            </StyledHeader>
            <StyledContent>{children}</StyledContent>
            <StyledFooter>
              <Affix>
                <FooterEnd />
              </Affix>
            </StyledFooter>
          </Layout>
    </Layout>
  );
};

export default DefaultLayout;
