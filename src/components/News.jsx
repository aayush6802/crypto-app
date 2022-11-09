import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { AppContext } from "../ContextAPI";
import Loader from "./Loader";
import NewsCard from "./NewsCard";
const API_KEY = "5dec09efa938437c8094533e13f8c8f6";
const News = ({ direction }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { news, setNews, newsCount, setNewsCount } = useContext(AppContext);
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
  const handlePageChange = (page) => {
    setPage(page);
    setLoading(true);
  };
  useEffect(() => {
    const fetchNews = () => {
      const options = {
        method: "GET",
        url: `https://bing-news-search1.p.rapidapi.com/news/search?q=cryptocurrency&count=100`,
        params: {
          safeSearch: "Off",
          textFormat: "Raw",
        },
        headers: {
          "X-BingApis-SDK": "true",
          "X-RapidAPI-Key":
            "23f58a7214mshc8b5547ebb6c141p1bd09fjsn4f9bdbd82d1b",
          "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
        },
      };

      axios
        .request(options)
        .then(function ({ data }) {
          setNews(() => {
            const i = (page - 1) * 10;
            const j = page * 10;
            console.log(data.value.slice(i, j));
            return data.value.slice(i, j);
          });
          setLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
      //   console.log(articles);
    };
    fetchNews();
  }, [page]);
  return (
    <Container maxW={"container.xl"} >
      {loading ? (
        <Loader />
      ) : (
        <>
          <Heading
            width={"fit-content"}
            m={"auto"}
            py={"6"}
            textTransform={"uppercase"}
          >
            Top Crypto News
          </Heading>
          <HStack
            w={"full"}
            alignItems={"flex-start"}
            flexWrap={"wrap"}
            px={["4", "8"]}
            py={"4"}
            gap={4}
            justifyContent={"center"}
            overflowX={"auto"}
          >
            {news.map((item) => {
              return (
                <NewsCard
                  key={item.datePublished}
                  {...item}
                  direction={direction}
                  source={item.provider[0].name}
                />
              );
            })}
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

export default News;
