import React, { useContext, useEffect, useState } from "react";
import { bitcoinToFiat, satoshisToBitcoin } from "bitcoin-conversion";
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaArrowCircleDown, FaExchangeAlt } from "react-icons/fa";
import { AppContext } from "../ContextAPI";

const btnStyle = {
  width: "30%",
  textAlign: "center",
};

const Convertor = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);
  const [btc, setBtc] = useState(1);
  const [cur, setCur] = useState(0);
  const [convertor, setConvertor] = useState(true);
  const [currency, setCurrency] = useState("INR");
  const convert = async () => {
    // 1 BTC = x Currency
    const oneBTCToCur = bitcoinToFiat(1, `${currency.toUpperCase()}`);
    // value BTC = Currency
    const paymentInCur = await bitcoinToFiat(
      value,
      `${currency.toUpperCase()}`
    );
    setCur(paymentInCur);
    // setBtc(payentInBtc);
  };

  const handleOnChange1 = (val) => {
    if (val === 0) {
      setCur(0);
      setBtc(0);
    } else {
      setValue(() => val);
      convert();
      setCur(cur);
    }
  };
  const handleOnChange2 = (val) => {
    if (val === 0) {
      setCur(0);
      setBtc(0);
    } else {
      setValue(() => val);
      convert();
      setCur(cur);
    }
  };
  useEffect(() => {
    convert();
  }, [value]);
  return (
    <Stack
      w={["95vw", "80vw"]}
      alignItems={"center"}
      gap={"10px"}
      px={"4"}
      py={"8"}
      m={"auto"}
      borderRadius={"10px"}
      bgColor={"transparent"}
      boxShadow={"0px 1px 5px 1px #161414"}
    >
      <Heading
        textTransform={"uppercase"}
        fontSize={["md", "2xl"]}
        my={["10px", "20px"]}
        fontWeight={"extrabold"}
        letterSpacing={"1px"}
      >
        Cryptocurrency Convertor
      </Heading>
      <Box
        my={["10px", "20px"]}
        w={"full"}
        mx={"auto"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Input
          w={["70%", "50%"]}
          type={"number"}
          placeholder={"Enter Value in BTC"}
          focusBorderColor={"transparent"}
          borderRadius={"0"}
          border={"0"}
          onChange={({ target }) => {
            handleOnChange1(target.value);
          }}
          value={value}
          mr={"20px"}
          borderBottom={"1px solid rgb(85 85 85)"}
          outline={"none"}
          css={{
            "&:focus": {
              borderBottom: "2px solid #f7542f",
            },
          }}
        />
        <Menu>
          <MenuButton
            variant={"unstyled"}
            as={Button}
            rightIcon={<FaArrowCircleDown color="#f7542f" />}
            css={{ ...btnStyle, width: "2%" }}
            fontSize={["15px", "18px"]}
          >
            {currency}
          </MenuButton>
          <MenuList>
            <MenuItem
              onClick={({ target }) => {
                setCurrency(target.innerHTML);
              }}
            >
              INR
            </MenuItem>
            <MenuItem onClick={({ target }) => setCurrency(target.innerHTML)}>
              USD
            </MenuItem>
            <MenuItem onClick={({ target }) => setCurrency(target.innerHTML)}>
              EUR
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      {/* <Input
        w={"50%"}
        type={"number"}
        placeholder={`Enter Value in ${currency}`}
        onChange={({ target }) => {
          handleOnChange2(target.value);
        }}
        value={value}
      /> */}

      <Text fontSize={"xl"} color={"#106bf7"} fontWeight={"extrabold"}>
        {value ? value : 0} BTC = {cur} {currency.toUpperCase()}
      </Text>
      {/* <Text>
        Value in {currency.toUpperCase()} : {cur ? cur : 0}
      </Text> */}

      {/* <Button onClick={}>
        <FaExchangeAlt />
      </Button> */}
      <HStack my={["10px", "30px"]} w={["", "50%"]} mx={"auto"}>
        <Button w={"60%"} onClick={convert} bgColor={"#f7542f"}>
          {" "}
          Convert{" "}
        </Button>
        <Button
          w={"60%"}
          fontSize={"medium"}
          onClick={() => {
            setCur(0);
            setValue(0);
          }}
        >
          Clear
        </Button>
      </HStack>
    </Stack>
  );
};

export default Convertor;
