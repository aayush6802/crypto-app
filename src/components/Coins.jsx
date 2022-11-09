import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import {
  AiFillCaretDown,
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineFileSearch,
  AiOutlineSearch,
} from "react-icons/ai";
import { server } from "../index";
import {
  Container,
  HStack,
  useToast,
  Button,
  ButtonGroup,
  RadioGroup,
  Radio,
  Stack,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import CoinCard from "./CoinCard";
import { AppContext } from "../ContextAPI";
// import { Button } from "rsuite";

// import "rsuite/dist/rsuite.min.css";
let c = 0;

const Coins = () => {
  const { theming, setTheming } = useContext(AppContext);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [error, setError] = useState(false);
  // const [currency, setCurrency] = useState("inr");
  const { currency, setCurrency } = useContext(AppContext);

  const [searchCoin, setSeacrhCoin] = useState("");
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const perPageArr = [10, 25, 50, 100];
  const toast = useToast();
  const handlePageChange = (page) => {
    setPage(page);
    setLoading(true);
  };

  const handleLeft = () => {
    if (page === 1) {
      setPage(pages.length);
    } else {
      setPage(page - 1);
    }
    setLoading(true);
  };
  const handleRight = () => {
    if (page === pages.length) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
    setLoading(true);
  };
  const handlePerPage = (val) => {
    setPerPage(() => {
      const a = parseInt(val);
      return a;
    });
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`
        );
        setCoins(() => [...data]);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
    c = 0;
  }, [currency, page, searchCoin, perPage]);
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
          <HStack width={["80vw", "50vw"]} m={"auto"} p={"20px"}>
            {perPage === 10 ? (
              <></>
            ) : (
              <>
                <Text>
                  <AiOutlineSearch size={"20px"} />
                </Text>
                <Input
                  placeholder="Search Your Favorite Coin..."
                  type={"text"}
                  padding={"8px"}
                  onChange={({ target }) => setSeacrhCoin(target.value)}
                  focusBorderColor={"transparent"}
                  boxShadow={"0px 1px 5px 1px #161414"}
                  borderRadius={"0"}
                  border={"none"}
                  css={{
                    "&::placeholder": {},
                    "&:focus": {
                      borderBottom: "2px solid #f7542f",
                    },
                  }}
                />
              </>
            )}
          </HStack>
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
          <HStack w={"full"} justifyContent={"flex-end"} px={"8"}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<AiFillCaretDown />}
                variant={"unstyled"}
              >
                show
              </MenuButton>
              <MenuList>
                {perPageArr.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={({ target }) => handlePerPage(page)}
                  >
                    Top {page} coins
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </HStack>
          <HStack
            wrap={"wrap"}
            padding={"4"}
            justifyContent={"center"}
            width={"full"}
          >
            {coins
              .filter((coin) => {
                if (coin.id === "") {
                  return coin;
                } else if (
                  coin.id.toLowerCase().includes(searchCoin.toLowerCase())
                ) {
                  return coin;
                }
              })
              .map((coin) => (
                <CoinCard
                  key={coin.id}
                  {...coin}
                  currencySymbol={currencySymbol}
                />
              ))}
          </HStack>
          <HStack width={["full", "fit-content"]} m={"auto"} p={"4"}>
            <Button onClick={handleLeft}>
              <AiFillCaretLeft />
            </Button>
            <HStack overflowX={"auto"} width={"full"}>
              {pages.map((item) => {
                return (
                  <>
                    <Button
                      p={"0"}
                      fontWeight={"thin"}
                      key={item}
                      onClick={() => handlePageChange(item)}
                    >
                      {item}
                    </Button>
                  </>
                );
              })}
            </HStack>
            <Button onClick={handleRight}>
              <AiFillCaretRight />
            </Button>
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
