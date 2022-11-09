import { Badge, HStack, Progress, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const CustomBar = ({ high, low }) => {
  return (
    <VStack w={"full"}>
      {/* <Progress value={50} colorScheme={"cyan"} w={["90vw", "50vw"]} /> */}
      <HStack
        w={["95vw", "30vw"]}
        justifyContent={"center"}
        p={["0"]}
        gap={"20px"}
        m="auto"
      >
        <Badge
          fontSize={["x-small", "md"]}
          color={"white"}
          bgColor={"red"}
          py={"2"}
          px={"3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderRadius={"10px"}
        >
          <GoTriangleDown /> {low}
        </Badge>
        <Text textAlign={"center"}>24H Range</Text>
        <Badge
          fontSize={["x-small", "md"]}
          color={"white"}
          bgColor={"green"}
          py={"2"}
          px={"3"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderRadius={"10px"}
        >
          <GoTriangleUp /> {high}
        </Badge>
      </HStack>
    </VStack>
  );
};

export default CustomBar;
