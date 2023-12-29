import React from 'react'
import { Box, Flex } from "@chakra-ui/react";
import Overview from './Overview';
import Next_payout from './Next_payout';
import { TableContent } from './Table_content';
import Transactios from './Transactios';
const Payoout = () => {
  return (
    <Box w="100%" h="794px" p="25px" bg="#FAFAFA" >
      <Flex flexDirection="column" alignItems="flex-start" gap="32px">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="24px"
          alignSelf="stretch"
        >
          <Overview />
          <Next_payout />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="20px"
          mt="10px"
          w="100%"
        >
          <Transactios />
          <TableContent />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Payoout
