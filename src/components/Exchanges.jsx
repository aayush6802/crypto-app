import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  useToast,
  Button,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ExchangeCard from "./ExchangeCard";
import { render } from "@testing-library/react";
import Toast from "./Toast";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineSearch,
} from "react-icons/ai";
let c = 0;

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchCoin, setSeacrhCoin] = useState("");
  const toast = useToast();
  const pages = [1, 2, 3, 4, 5];

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

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges?page=${page}`);
        setExchanges(() => [...data]);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(true);
      }
    };
    fetchExchanges();
    c = 0;
  }, [page]);
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
            <AiOutlineSearch size={"20px"} />
            <Input
              placeholder="Search By Name..."
              type={"text"}
              padding={"8px"}
              onChange={({ target }) => setSeacrhCoin(target.value)}
              focusBorderColor={"transparent"}
              boxShadow={"0px 1px 5px 1px #161414"}
              borderRadius={"0"}
              border={"none"}
              css={{
                "&::placeholder": {
                  color: "gray",
                },
                "&:focus": {
                  borderBottom: "2px solid #f7542f",
                },
              }}
            />
          </HStack>
          <HStack wrap={"wrap"} padding={"4"} justifyContent={"center"}>
            {exchanges
              .filter((exchange) => {
                if (exchange.id === "") {
                  return exchange;
                } else if (
                  exchange.id.toLowerCase().includes(searchCoin.toLowerCase())
                ) {
                  return exchange;
                }
              })
              .map((coinExchange) => (
                <ExchangeCard key={coinExchange.id} {...coinExchange} />
              ))}
          </HStack>

          <HStack width={["full", "fit-content"]} m={"auto"} p={"4"}>
            <Button onClick={handleLeft}>
              <AiFillCaretLeft />
            </Button>
            {pages.map((item) => {
              return (
                <>
                  <Button
                    fontWeight={"thin"}
                    key={item}
                    onClick={() => handlePageChange(item)}
                  >
                    {item}
                  </Button>
                </>
              );
            })}

            <Button onClick={handleRight}>
              <AiFillCaretRight />
            </Button>
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
