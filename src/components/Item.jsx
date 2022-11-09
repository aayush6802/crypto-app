import {
  Stack,
  Stat,
  StatArrow,
  StatLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Item = ({ title, value, change, sign }) => {
  return (
    <Stack
      w={["80%", "full"]}
      m={["0", "0"]}
      py={"6"}
      justifyContent={"center"}
      alignItems={"center"}
      height={["150px"]}
      borderRadius={"10px"}
      boxShadow={"0px 1px 5px 1px #161414"}
      transition={"all 0.5s linear"}
      css={{
        "&:hover": {
          boxShadow: "0px 1px 1px 1px #f7542f",
        },
      }}
    >
      <Text
        fontSize={["14px", "16px"]}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
      >
        {title}
      </Text>
      <Text fontSize={["14px", "16px"]} fontWeight={"bold"} color={"#106bf7"}>
        {value ? value : "NA"}
      </Text>
      <Stat>
        <StatLabel>
          <Text fontSize={["12px", "14px"]}>
            <StatArrow type={change >= 0 ? "increase" : "decrease"} />
            {`${change} ${sign === "%" ? "%" : ""}`}
          </Text>
        </StatLabel>
      </Stat>
    </Stack>
  );
};

export default Item;
