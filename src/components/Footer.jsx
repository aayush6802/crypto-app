import {
  Box,
  Text,
  HStack,
  Button,
  Container,
  Stack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/coin-bash-logo2.png";

const Footer = () => {
  const colorCodedIcons = [
    {
      icon: <AiOutlineFacebook />,
      color: "blue",
      code: 1,
    },
  ];
  const tColor = "white";
  return (
    <Box w={"full"} >
      <Stack
        width={"full"}
        bgColor={"black"}
        direction={["column", "row"]}
        px={"8"}
        py={"4"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        
      >
        <Image src={logo} w={"230px"} />
        <HStack w={"full"} justifyContent={"center"}>
          <Button variant={"unstyled"}>
            <FaFacebookSquare
              color={tColor}
              cursor={"pointer"}
              size={"30"}
              onMouseOver={({ target }) => (target.style.color = "#3b5998")}
              onMouseOut={({ target }) => (target.style.color = `${tColor}`)}
            />
          </Button>
          <Button variant={"unstyled"}>
            <FaTwitter
              color={tColor}
              cursor={"pointer"}
              size={"30"}
              onMouseOver={({ target }) => (target.style.color = "#00acee")}
              onMouseOut={({ target }) => (target.style.color = `${tColor}`)}
            />
          </Button>
          <Button variant={"unstyled"}>
            <FaInstagram
              color={tColor}
              cursor={"pointer"}
              size={"30"}
              onMouseOver={({ target }) => (target.style.color = "#cd486b")}
              onMouseOut={({ target }) => (target.style.color = `${tColor}`)}
            />
          </Button>
          <Button variant={"unstyled"}>
            <FaYoutube
              color={tColor}
              cursor={"pointer"}
              size={"30"}
              onMouseOver={({ target }) => (target.style.color = "#FF0000")}
              onMouseOut={({ target }) => (target.style.color = `${tColor}`)}
            />
          </Button>
          <Button variant={"unstyled"}>
            <FaLinkedin
              color={tColor}
              cursor={"pointer"}
              size={"30"}
              onMouseOver={({ target }) => (target.style.color = "#0077b5")}
              onMouseOut={({ target }) => (target.style.color = `${tColor}`)}
            />
          </Button>
        </HStack>
        <Text color={tColor} w={"fit-content"} textAlign={"center"}>
          All right are reserved by &copy; Coin Bash
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
