import { Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { padding } from "@mui/system";
import React, { useEffect, useState } from "react";
import noimage from "../assets/noimage.jpg";

const NewsCard = ({ description, name, image, url, source }) => {
  const [imgUrl, setImgUrl] = useState(noimage);

  useEffect(() => {
    if (image) {
      console.log(image.thumbnail.contentUrl);
      const newLink = image.thumbnail.contentUrl;
      setImgUrl(() => {
        return newLink;
      });
    } else {
      console.log("No image");
    }
  }, []);
  return (
    <>
      <HStack
        w={"450px"}
        h={"180px"}
        py={"6"}
        px={"4"}
        gap={"10px"}
        // overflow={"auto"}
        boxShadow={"0px 1px 5px 1px #161414"}
        transition={"all 0.5s linear"}
        animation={"borderA 3s infinite reverse"}
        css={{
          "&:hover": {
            boxShadow: "0px 1px 1px 1px #f7542f",
          },
        }}
        borderRadius={"10px"}
        alignItems={"center"}
      >
        <Image src={`${imgUrl}`} w={"100px"} />
        <VStack justifyContent={"center"}>
          <a href={url} target="_blanc">
            <Text
              color={"#f7542f"}
              fontSize={["sm", "lg"]}
              fontWeight={"700"}
              textDecoration={"underline"}
            >
              {source}
            </Text>
            <Text
              textAlign={"left"}
              color={"gray.500"}
              fontWeight={"thin"}
              fontSize={["12px", "16px"]}
            >
              {name}{" "}
              <Button
                mx={"10px"}
                fontSize={"sm"}
                variant={"link"}
                textColor={"#106bf7"}
                fontWeight={"thin"}
              >
                Read Full
              </Button>
            </Text>
          </a>
          {/* <Text>
            {description.slice(0, 50)}...
            <Button>
              <a href={url} target="_blanc">
                Read More...
              </a>
            </Button>
          </Text> */}
        </VStack>
      </HStack>
    </>
  );
};

export default NewsCard;
