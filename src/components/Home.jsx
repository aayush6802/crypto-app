import {
  Badge,
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useToast,
  Button,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import { server } from "../index";
import CoinCard from "./CoinCard";
import { Link } from "react-router-dom";
import bgImg from "../assets/bgImg.jpg";
import banner from "../assets/banner.png";
import mbanner from "../assets/mbanner4.jpg";
import baseLine from "../assets/baseLine2.png";
import calc from "../assets/calc2.png";
import News from "./News";
import { AppContext } from "../ContextAPI";
import NewsCard from "./NewsCard";
import Convertor from "./Convertor";
import Faqs from "./Faqs";
import CoinSlider from "./CoinSlider";
import Portfolio from "./Portfolio";
const imgLink =
  "https://cdn.pixabay.com/photo/2018/01/18/07/31/bitcoin-3089728__340.jpg";

let c = 0;
const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [searchCoin, setSeacrhCoin] = useState("");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";
  const toast = useToast();
  const { newsCount, news, setNewsCount } = useContext(AppContext);
  const [mobileView] = useMediaQuery("(min-width: 480px)");
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&per_page=10&page=1`
        );
        setCoins(() => [...data]);
        console.log([...data]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
    c = 0;
  }, [currency, page, searchCoin, newsCount]);
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
    <Box w={"full"}>
      <Box
        w={"full"}
        backgroundImage={mobileView ? banner : mbanner}
        backgroundRepeat={"no-repeat"}
        h={"100vh"}
        backgroundSize={["100% 100%", "cover"]}
        backgroundPosition={["left", "center"]}
        objectFit={"fill"}
        display={"flex"}
        justifyContent={["center", "flex-start"]}
        alignItems={"center"}
      >
        <Stack
          direction={"column"}
          w={["90%", "50%"]}
          alignItems={"flex-start"}
          justifyContent={"center"}
          gap={"1"}
          m={["10px", "80px"]}
        >
          <Text
            w={"95%"}
            fontSize={"4xl"}
            fontWeight={"900"}
            textTransform={"uppercase"}
            letterSpacing={"4px"}
            textAlign={"left"}
            my={"10px"}
            color="white"
            css={{
              textShadow: "2px 2px #f7542f",
            }}
          >
            Best Crypto Tracker on Internet
          </Text>
          <Text w={"80%"} textAlign={"left"} color="white" fontSize={['20px','23px']} >
          Your all-in-one solution for crypto tracking and crypto news, with much more very soon!
          </Text>
          <Button
            bgColor={"#f7542f"}
            borderRadius={"10px"}
            fontSize={"md"}
            position="relative"
            top="30px"
          >
            <a href="#coins">Explore</a>
          </Button>
        </Stack>
      </Box>

      <Stack
        direction={"column"}
        // gap={"20px"}
        w={"full"}
        id="coins"
        justifyContent={"center"}
        h={["50vh", "80vh"]}
      >
        <HStack
          w={"full"}
          justifyContent={"space-between"}
          px={"8"}
          py={"8"}
          alignItems={"center"}
        >
          <Heading fontSize={["2xl", "3xl"]} textTransform={"uppercase"}>
            Top 10 Coins
          </Heading>
        </HStack>
        <VStack>
          <HStack overflowX={"auto"} w={"full"}>
            {coins.map((coin) => (
              <CoinCard
                key={coin.id}
                {...coin}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={"92vw"} justifyContent="flex-end">
            <Link to="/coins">
              <Button variant={"link"} color={"cyan.800"} size={"sd"}>
                See more
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Stack>
      <HStack w={"full"} justifyContent={"center"} mt={"50px"}>
        <Convertor />
      </HStack>

      <Box my={"100"} w={"full"}>
        <Faqs />
      </Box>
    </Box>
  );
};

export default Home;
