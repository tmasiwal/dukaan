import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import { Sidebar } from "./Compponent/Sidebar";
import { Navbar } from "./Compponent/Navbar";
import Payoout from "./Compponent/Payoout";

function App() {
 

  return (
    <>
      <Flex w="100%" justifyContent="space-between">
        <Sidebar />
        <Box w="calc(100% - 224px)">
          <Navbar />
          <Payoout />
        </Box>
      </Flex>
    </>
  );
}

export default App;
