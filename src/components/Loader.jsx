import { Box, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    // <VStack h={'90vh'} justifyContent={'center'}>
    //   <Box transform={"scale(3)"}>
    //     <Spinner size={'xl'}/>
    //   </Box>
    // </VStack>
  
    <VStack h={"90vh"} justifyContent={"center"} alignItems={"center"}>
      <VStack
        transform={"scale(3)"}
        my={"12"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner color="#f7542f" thickness="2px" />
      </VStack>
      <Text fontSize={"30px"} textAlign={"center"} textTransform={"uppercase"}>
        Loading...
      </Text>
    </VStack>
    )
  
};

export default Loader;
