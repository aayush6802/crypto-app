import { Image, VStack, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { exchangeCardProp } from "../styles/styles.js";

const ExchangeCard = ({ name, image, url, trust_score_rank }) => {
  return (
    <a href={url} target="_blanc">
      <VStack
        p={"4"}
        m={"4"}
        // boxShadow={"0px 1px 10px 1px #bebaba"}
        w={"210px"}
        h={"210px"}
        justifyContent={"center"}
        border={"1px solid transparent"}
        borderRadius={"10px"}
        boxShadow={"0px 1px 5px 1px #161414"}
        transition={"all 0.5s linear"}
        animation={"borderA 3s infinite reverse"}
        css={{
          "&:hover": {
            boxShadow: "0px 1px 1px 1px #f7542f",
          },
        }}
      >
        <Image src={image} objectFit={"cover"} w={"80px"} h={"80px"} />
        <Text noOfLines={"1"}>{name}</Text>
        <Heading noOfLines size={"1.8"}>
          Rank : #{trust_score_rank}
        </Heading>
      </VStack>
    </a>
  );
};

export default ExchangeCard;
