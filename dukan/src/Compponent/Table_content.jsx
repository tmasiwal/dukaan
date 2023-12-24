import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  TableContainer,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export function TableContent() {
  const arr = new Array(6).fill(0);

  return (
    <Flex
      w={"1152px"}
      h={"448px"}
      p="12px 12px 8px 12px"
      flexDirection="column"
      alignItems="flex-end"
      borderRadius="8px"
      bg="#fff"
      boxShadow="0px 2px 6px 0px rgba(26, 24, 30, 0.04)"
    >
      <Flex flexDirection="column" alignItems="flex-start" gap="12px">
        <Flex
          justifyContent="space-between"
          gap="670px"
          alignItems="center"
          alignSelf="stretch"
        >
          <InputGroup>
            <InputLeftElement>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <g clip-path="url(#clip0_84778_21800)">
                  <path
                    d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25403 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                    fill="#999999"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_84778_21800">
                    <rect width="14" height="14" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </InputLeftElement>
            <Input
              w="248px"
              border="1px solid #d9d9d9"
             
              borderRadius="4px"
              type="text"
            />
          </InputGroup>

          <Flex justifyContent="flex-end" alignItems="center" gap="16px">
            <Flex
              p="6px 12px"
              alignItems="center"
              gap="6px"
              border="1px solid #d9d9d9"
              borderRadius="4px"
            >
              <Text
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                Sort
              </Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.62496 9.93424C1.83324 9.72596 2.17093 9.72596 2.37921 9.93424L4.64295 12.198L6.90669 9.93424C7.11497 9.72596 7.45266 9.72596 7.66094 9.93424C7.86922 10.1425 7.86922 10.4802 7.66094 10.6885L5.02007 13.3294C4.81179 13.5376 4.47411 13.5376 4.26583 13.3294L1.62496 10.6885C1.41668 10.4802 1.41668 10.1425 1.62496 9.93424Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.6429 2.51564C4.93746 2.51564 5.17624 2.75442 5.17624 3.04897L5.17624 12.9522C5.17624 13.2468 4.93746 13.4856 4.6429 13.4856C4.34835 13.4856 4.10957 13.2468 4.10957 12.9522L4.10957 3.04897C4.10957 2.75442 4.34835 2.51564 4.6429 2.51564Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.3792 6.06695C14.1709 6.27523 13.8332 6.27523 13.6249 6.06695L11.3612 3.8032L9.09745 6.06695C8.88917 6.27523 8.55149 6.27523 8.34321 6.06695C8.13493 5.85867 8.13493 5.52098 8.34321 5.3127L10.9841 2.67183C11.1924 2.46356 11.53 2.46356 11.7383 2.67183L14.3792 5.3127C14.5875 5.52098 14.5875 5.85867 14.3792 6.06695Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.3612 13.4855C11.0667 13.4855 10.8279 13.2468 10.8279 12.9522L10.8279 3.04896C10.8279 2.75441 11.0667 2.51563 11.3612 2.51563C11.6558 2.51563 11.8946 2.75441 11.8946 3.04896L11.8946 12.9522C11.8946 13.2468 11.6558 13.4855 11.3612 13.4855Z"
                  fill="#4D4D4D"
                />
              </svg>
            </Flex>

            <Flex
              alignItems="center"
              justifyContent="center"
              w="36px"
              h="36px"
              flexShrink="0"
              borderRadius="4px"
              border="1px solid #d9d9d9"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                  fill="#4D4D4D"
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>

        
        <Flex
          w={"1128px"}
          padding={"10px 12px 10px 12px"}
          alignItems={"center"}
          gap={"40px"}
          borderRadius={"4px"}
          bg={"#F2F2F2"}
        >
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={"-1px"}
            flex={"1 0 0"}
            w={"150.67px"}
            h={"20px"}
          ></Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={"-1px"}
            flex={"1 0 0"}
            w={"150.67px"}
            h={"20px"}
          ></Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={"-1px"}
            flex={"1 0 0"}
            w={"150.67px"}
            h={"20px"}
          >
            <Text
              color={"#4D4D4D"}
              textAlign={"right"}
              fontFamily={"Galano Grotesque"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"20px"}
            >
              Transaction ID
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            gap={"-1px"}
            flex={"1 0 0"}
            w={"150.67px"}
            h={"20px"}
          >
            <Text
              color={"#4D4D4D"}
              textAlign={"right"}
              fontFamily={"Galano Grotesque"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"20px"}
            >
              Order amount
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            gap={"-1px"}
            flex={"1 0 0"}
            w={"150.67px"}
            h={"20px"}
          >
            <Text
              color={"#4D4D4D"}
              textAlign={"right"}
              fontFamily={"Galano Grotesque"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"20px"}
            >
              Transaction fees
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-end"}
            gap={"-1px"}
            flex={"1 0 0"}
            w={"150.67px"}
            h={"20px"}
          >
            <Text
              color={"#4D4D4D"}
              textAlign={"right"}
              fontFamily={"Galano Grotesque"}
              fontSize={"14px"}
              fontStyle={"normal"}
              fontWeight={"500"}
              lineHeight={"20px"}
            >
              Total
            </Text>
          </Flex>
        </Flex>
        {arr.map((e, ind) => (
          <Flex
            w={"1128px"}
            padding={"10px 12px 10px 12px"}
            alignItems={"center"}
            gap={"40px"}
            borderRadius={"4px"}
            bg={"#FFF"}
          >
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              gap={"-1px"}
              flex={"1 0 0"}
              w={"150.67px"}
              h={"20px"}
            ></Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              gap={"-1px"}
              flex={"1 0 0"}
              w={"150.67px"}
              h={"20px"}
            >
              {ind != 0 && (
                <Flex alignItems="center" gap="8px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                  >
                    <circle cx="5.66406" cy="5" r="5" fill="#55ac58" />
                  </svg>

                  <Text
                    color={"#1A181E"}
                    textAlign={"right"}
                    fontFamily={"Galano Grotesque"}
                    fontSize={"14px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                  >
                    Successful
                  </Text>
                </Flex>
              )}
              {ind == 0 && (
                <Flex alignItems="center" gap="8px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="10"
                    viewBox="0 0 11 10"
                    fill="none"
                  >
                    <circle cx="5.66406" cy="5" r="5" fill="#999999" />
                  </svg>

                  <Text
                    color={"#1A181E"}
                    textAlign={"right"}
                    fontFamily={"Galano Grotesque"}
                    fontSize={"14px"}
                    fontStyle={"normal"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                  >
                    Processing
                  </Text>
                </Flex>
              )}
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              gap={"-1px"}
              flex={"1 0 0"}
              w={"150.67px"}
              h={"20px"}
            >
              <Text
                color={"#1A181E"}
                textAlign={"right"}
                fontFamily={"Galano Grotesque"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
              >
                131634495747
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-end"}
              gap={"-1px"}
              flex={"1 0 0"}
              w={"150.67px"}
              h={"20px"}
            >
              <Text
                color={"#4D4D4D"}
                textAlign={"right"}
                fontFamily={"Galano Grotesque"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"500"}
                lineHeight={"20px"}
              >
                ₹10,125.00
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-end"}
              gap={"-1px"}
              flex={"1 0 0"}
              w={"150.67px"}
              h={"20px"}
            >
              <Text
                color={"#4D4D4D"}
                textAlign={"right"}
                fontFamily={"Galano Grotesque"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"500"}
                lineHeight={"20px"}
              >
                ₹1,125.00
              </Text>
            </Flex>
            <Flex
              direction={"column"}
              justifyContent={"center"}
              alignItems={"flex-end"}
              gap={"-1px"}
              flex={"1 0 0"}
              w={"150.67px"}
              h={"20px"}
            >
              <Text
                color={"#4D4D4D"}
                textAlign={"right"}
                fontFamily={"Galano Grotesque"}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"500"}
                lineHeight={"20px"}
              >
                ₹9,312
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
