import React from 'react'
import { Flex, Select, Text } from "@chakra-ui/react";
const Overview = () => {
  return (
      <Flex
        justifyContent="space-between"
        alignItems="center"
        alignSelf="stretch"
      >
        <Text
          fontSize="20px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="28px"
        >
          Overview
        </Text>

        <Select
          width="137px"
          h="36px"
          flexShrink="0"
          borderRadius="4px"
          border="1px solid #D9D9D9"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="24px"
          bg="#fff"
          color="#4D4D4D"
        >
          <option value="month">This Month</option>
        </Select>
      </Flex>
    
  );
}

export default Overview
