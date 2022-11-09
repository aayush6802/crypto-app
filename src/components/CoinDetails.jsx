import {
  Container,
  Box,
  useToast,
  RadioGroup,
  HStack,
  Radio,
  VStack,
  Text,
  Img,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Button,
  Stack,
} from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";
import CustomBar from "./CustomBar";
import { server } from "../index";
import Item from "./Item";
import Chart from "./Chart";
import { AppContext } from "../ContextAPI";
let c = 0;

const CoinDetails = () => {
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  // const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArr, setChartArr] = useState([]);
  const timePeriod = ["24h", "7d", "30d", "6m", "1y", "max"];

  const { currency, setCurrency } = useContext(AppContext);
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";
  const { id } = useParams();
  const toast = useToast();
  const handleTimeChange = (key) => {
    if (key === "6m") key = "365d";
    setDays(key);
    setLoading(true);
  };
  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setChartArr(chartData.prices);
        setCoin(() => data);
        console.log(data);
        // console.log(chartData.prices);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoin();
    c = 0;
  }, [id, currency, days]);
  if (error) {
    if (c == 0) {
      c++;
      return toast({
        title: "Something went wrong...",
        description: "error while loading from server",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Stack
            w={"full"}
            alignItems={"center"}
            spacing={4}
            py={["8"]}
            px={["2", "16"]}
            direction={["column", "row"]}
            justifyContent={["center", "space-between"]}
          >
            
            

              <HStack gap={"2"}>
                <Image src={coin.image.large} w={"24"} h={"24"} />
                <Badge
                  fontSize={"2xl"}
                  my={0}
                  bgColor={"blackAlpha.900"}
                  color={"white"}
                >
                  #{coin.market_cap_rank}
                </Badge>
                <Text
                  fontSize={"24px"}
                  fontWeight={"bold"}
                  textTransform={"uppercase"}
                >
                  {coin.name}
                </Text>

              </HStack>

              <VStack
                direction={["column", "row"]}
                alignItems={["center", "flex-end"]}
                justifyContent={"flex-end"}
                w={['100vw','27vw']}
              >
                <Stat spacing={4}>
                  <VStack alignItems={"flex-start"}>
                    <StatLabel>{coin.name} Price</StatLabel>

                    <Box>
                      <HStack spacing={"15px"} mt={"-15px"}>
                        <StatNumber mb={"10px"}>
                          <Text
                            fontSize={"35px"}
                            fontWeight={"extrabold"}
                            textAlign={"right"}
                            color={"#3391ff"}
                          >
                            {currencySymbol}
                            {coin.market_data.current_price[`${currency}`]}
                          </Text>
                        </StatNumber>

                        <StatHelpText>
                          <StatArrow
                            type={
                              coin.market_data.price_change_percentage_24h > 0
                                ? "increase"
                                : "decrease"
                            }
                          />
                          {coin.market_data.price_change_percentage_24h}%
                        </StatHelpText>
                      </HStack>
                    </Box>
                  </VStack>
                </Stat>
                <CustomBar
                  mx="auto"
                  low={`${currencySymbol} ${coin.market_data.low_24h[currency]}`}
                  high={`${currencySymbol} ${coin.market_data.high_24h[currency]}`}
                />
              </VStack>

              
              
              
            
          </Stack>
          <RadioGroup
            defaultValue={currency}
            spacing={"8"}
            onChange={setCurrency}
          >
            <HStack
              width={"full"}
              justifyContent={"center"}
              spacing={4}
              p={"4"}
            >
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <Box w={"full"} padding={"2"} height={"100%"} objectFit={"contain"}>
            <Text
              fontSize={"small"}
              alignSelf={"center"}
              w={"full"}
              textAlign={"right"}
            >
              Last updated at : {coin.last_updated.split("Z")[0]}
            </Text>
            <Chart arr={chartArr} currencySymbol={currencySymbol} days={days} />
          </Box>
          <HStack m={"auto"} w={"fit-content"}>
            {timePeriod.map((time) => {
              return (
                <Button
                  px={"2"}
                  py={"1"}
                  bgColor={"blackAlpha.500"}
                  color={"white"}
                  fontWeight="thin"
                  fontSize={["12px", "18px"]}
                  css={{
                    "&:hover": {
                      background: "black",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                  key={time}
                  onClick={(e) => handleTimeChange(e.target.innerHTML)}
                >
                  {time}
                </Button>
              );
            })}
          </HStack>

          <HStack
            w={"full"}
            px={"4"}
            py={"8"}
            flexWrap={["wrap", "nowrap"]}
            justifyContent={"center"}
            gap={"4"}
            overflowX={"auto"}
          >
            <Item
              title={"Max Supply"}
              value={coin.market_data.max_supply}
              change={0}
              sign={"+"}
            />
            <Item
              title={"Circulating Supply"}
              value={coin.market_data.circulating_supply}
              change={0}
              sign={"+"}
            />
            <Item
              title={"Market Cap"}
              value={
                `${currencySymbol} ` + coin.market_data.market_cap[currency]
              }
              change={coin.market_data.market_cap_change_24h}
              sign={"+"}
            />
            <Item
              title={"All Time Low"}
              value={`${currencySymbol} ` + coin.market_data.atl[currency]}
              change={coin.market_data.atl_change_percentage[currency]}
              sign={"%"}
            />
            <Item
              title={"All Time High"}
              value={`${currencySymbol} ` + coin.market_data.ath[currency]}
              change={coin.market_data.ath_change_percentage[currency]}
              sign={"%"}
            />
          </HStack>
        </>
      )}
    </Container>
  );
};

export default CoinDetails;
