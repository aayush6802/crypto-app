import {
  Image,
  VStack,
  Text,
  Heading,
  Badge,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { exchangeCardProp } from "../styles/styles.js";

const CoinCard = ({
  id,
  image,
  current_price: price,
  market_cap_rank,
  symbol,
  currencySymbol = "₹",
}) => {
  const [mobileView] = useMediaQuery("(min-width: 480px)");
  return (
    <Link to={`/coins/${id}`}>
      <VStack
        p={"4"}
        m={"4"}
        // boxShadow={"0px 1px 10px 1px #bebaba"}
        w={"210px"}
        h={"210px"}
        justifyContent={"center"}
        border={"1px solid transparent"}
        borderRadius={"10px"}
        boxShadow={`0px 1px 5px 1px #161414`}
        transition={"all 0.5s linear"}
        animation={"borderA 3s infinite reverse"}
        css={{
          "&:hover": {
            boxShadow: "0px 1px 1px 1px #f7542f",
          },
        }}
      >
        <Image src={image} objectFit={"cover"} w={"80px"} h={"80px"} />
        <Heading noOfLines size={"1.8"}>
          <Badge fontSize={"md"} background={"transparent"}>
            #{market_cap_rank}
          </Badge>
          {` ${symbol.toUpperCase()}`}
        </Heading>
        <Text noOfLines={1} my={"10px"} textTransform={"capitalize"}>
          {id}
        </Text>
        <Text
          noOfLines={1}
          my={"10px"}
          fontWeight={"bolder"}
          fontSize={"xl"}
          color={"#106bf7"}
        >
          {price ? `${currencySymbol} ${price}` : "NA"}
        </Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
