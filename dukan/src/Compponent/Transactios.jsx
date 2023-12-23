import React from 'react'
import { Flex,Text } from "@chakra-ui/react";
const Transactios = () => {
  return (
    
      <Flex flexDirection="column" alignItems="flex-start" gap="20px" w={"100%"}>
        <Text
          fontSize="20px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="28px"
        >
          Transactions | This Month
        </Text>

        <Flex alignItems="flex-start" gap="12px">
          <Flex
            p="6px 16px"
            alignItems="center"
            gap="6px"
            borderRadius="40px"
            bg="#146EB4"
            color= "#fff" 
            fontFamily="Inter"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="20px"
           
            
          >
            Payouts (22)
          </Flex>

          <Flex
            p="6px 16px"
            alignItems="center"
            gap="6px"
            borderRadius="40px"
            bg="#e6e6e6"
            color="#808080"
            fontFamily="Inter"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="20px"
           
            
          >
            Refunds (2)
          </Flex>
        </Flex>
      </Flex>
   
  );
}

export default Transactios
