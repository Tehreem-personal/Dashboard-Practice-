import React from 'react'
import {Typography, Flex, Divider }from 'antd';
const {Text}=Typography;
const FooterEnd = () => {
  return (
    <>
    <Flex justify='space-between' >
    <Text strong>
      All Rights Reserved
    </Text>
    <Text strong>
      @2023 Samply
    </Text>
    </Flex>
    <Divider/>
    </>
  );
}

export default FooterEnd;
