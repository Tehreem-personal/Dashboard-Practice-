import styled from "styled-components";
import { PieChartOutlined } from "@ant-design/icons";
import {
  Card,
  Button,
  Divider,
  Row,
  Menu,
  Breadcrumb,
  Input,
  Image,
  Layout,
  Modal,
  Col,
  DatePicker,
} from "antd";
const { Header, Content, Sider, Footer } = Layout;

export const StyledHeader = styled(Header)`
  height: 100px;
  margin-top: "0px";
  line-height: 5px;
  background-color: transparent;
  color: black;
  padding: 15px;
`;
export const StyledBreadCrumb = styled(Breadcrumb)`
  margin-top: 10px;
  float: right;
  color: red;
  font-size: medium;
  margin-bottom: 10px;
`;
export const StyledText = styled("Text")`
  font-size: 28px;
  color: white;
  background-color: #1f618d;
  border-radius: 10px;
  font-weight: 500;

  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;
export const StyledImageCard = styled(Card)`
  background-color: #1f618d;
  width: 350px;
  height: 290px;
  margin-bottom: 10px;
  padding: 20px;
  color: white;
  text-align: left;
`;
export const StyledImageText = styled("Text")`
  font-size: 28px;
  color: white;
  font-weight: 700;
  padding: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;
export const StyledInput = styled(Input)`
  width: 30%;
  height: 25px;
  margin-left: 10%;
  border-radius: 10px;
  border-color: #1f618d;
`;
export const StyledFormInput = styled(Input)`
  &[type="number"] {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
export const StyledContent = styled(Content)`
  padding: 14px;
  min-height: 280px;
`;
export const ContentStyledImage = styled(Image)`
  height: 600px;
  width: 900px;
  margin-bottom: 30px;
`;

export const StyledSider = styled(Sider)`
  height: 100vh;
  &:hover {
    cursor: pointer;
    overflow-y: scroll;
  }
`;
export const StyledMenu = styled(Menu)`
  background-color: #1f618d;
  font-size: 15px;
  color: white;
  font-weight: 500;
  margin-top: "0px";
`;
export const StyledFooter = styled(Footer)`
  margin-top: 20px;
  color: #fff;
  margin-top: 10px;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  height: 120px;
  border-radius: 0px;
  color: black;
`;

export const StyledMainCard = styled(Card)`
  margin-top: 10px;
  padding-top: 2px;
  height: 470px;
  border-radius: 0px;
`;

export const StyledMainLeftCards = styled(Card)`
  height: 230px;
  margin-top: 10px;
  padding-top: 10px;
  border-radius: 0px;
`;
export const StyledGreenButton = styled(Button)`
  background-color: green;
  color: white;
  width: 90%;
`;
export const StyledImageButton = styled(Button)`
  background-color: white;
  color: #1f618d;
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;
  font-family: "Times New Roman", Times, serif;
  width: 70%;
  height: 40px;
`;
export const StyledBlueButton = styled(Button)`
  background-color: blue;
  color: white;
  width: 100%;
`;
export const StyledSubmitButton = styled(Button)`
  background-color: #3253dc;
  color: white;
  border-radius: 10px;
`;
export const StyledCancelButton = styled(Button)`
  border-color: #3253dc;
  color: #3253dc;
  border-radius: 10px;
`;
export const StyledAddButton = styled(Button)`
  background-color: #3253dc;
  color: white;
  width: 10%;
  height: fit-content;
  padding: 5px;
  border-radius: 10px;
  margin: "4px";
  margin-left: 65%;
`;
export const StyledDeleteButton = styled(Button)`
  color: red;
  width: 80%;
  height: fit-content;
  padding: 2px;
  border-radius: 10px;
  margin: 10px;
`;
export const StyledEditButton = styled(Button)`
  color: #3253dc;
  width: 80%;
  height: fit-content;
  padding: 2px;
  border-radius: 10px;
  margin: 10px;
`;
export const StyledCol = styled(Col)`
  margin-bottom: 12px;
`;
export const StyledModal = styled(Modal)`
  background-color: purple;
  color: white;
  width: 1000px;
  height: 900px;
`;
export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
`;

export const StyledIconCard = styled(PieChartOutlined)`
  background-color: cyan;
  width: 40px;
  height: 40px;
  border-radius: 70px;
  justify-content: center;
`;
export const StyledTableCard = styled(Card)`
  border-radius: 0px;
  margin-top: 10px;
`;
export const StyledDivider = styled(Divider)`
  margin: 0;
  padding: 0;
`;
export const StyledRow = styled(Row)`
  margin-bottom: 20px;
  padding: 8px;
  justify-content: space-evenly;
`;
