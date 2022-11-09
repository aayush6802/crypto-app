import React, { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  RadioGroup,
  Radio,
  Stack,
  Button,
  useDisclosure,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AppContext } from "../ContextAPI";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../assets/coin-bash-logo2.png";

const AppDrawer = ({ handleDrawer }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  const { state, setState } = useContext(AppContext);

  return (
    <>
      <Stack bgColor={"#07041b"} color={"white"} w={"full"} zIndex={"6"}>
        <HStack
          pos={"relative"}
          left={"10px"}
          top={"10px"}
          mb={"20px"}
          w={"fit-content"}
        >
          <Image src={logo} w={"120px"} />
        </HStack>
        <Button
          variant={"unstyled"}
          pos={"absolute"}
          top={"-3px"}
          right={"2px"}
          className="appBtn"
          onClick={onOpen}
        >
          <CgMenuGridO size={"30px"} color={"#f7542f"} />
        </Button>

        <Drawer
          placement={"left"}
          onClose={onClose}
          isOpen={isOpen}
          background={"transparent"}
          size={"full"}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody display={"flex"} justifyContent={"center"}>
              <DrawerCloseButton size={"20px"} margin={"8px"} />
              <VStack
                gap={"50px"}
                w={"fit-content"}
                className="navLinks"
                // background={"red"}
                justifyContent={"center"}
              >
                <Button
                  fontSize={["8px", "15px"]}
                  background={"transparent"}
                  borderRadius={"0px"}
                  css={{
                    "&:hover": {
                      background: "transparent",
                      borderBottom: "2px solid #f7542f",
                    },
                    "&:active": {
                      borderBottom: "2px solid #f7542f",
                    },
                  }}
                  onClick={onClose}
                >
                  <Link to="/">HOME</Link>
                </Button>
                <Button
                  fontSize={["8px", "15px"]}
                  background={"transparent"}
                  borderRadius={"0px"}
                  css={{
                    "&:hover": {
                      background: "transparent",
                      borderBottom: "2px solid #f7542f",
                    },
                    "&:active": {
                      borderBottom: "2px solid #f7542f",
                    },
                  }}
                  // onClick={handleDrawer}
                  onClick={onClose}
                >
                  <Link to="/coins">COINS</Link>
                </Button>
                <Button
                  fontSize={["8px", "15px"]}
                  background={"transparent"}
                  borderRadius={"0px"}
                  css={{
                    "&:hover": {
                      background: "transparent",
                      borderBottom: "2px solid #f7542f",
                    },
                    "&:active": {
                      borderBottom: "2px solid #f7542f",
                    },
                  }}
                  onClick={onClose}
                >
                  <Link to="/exchanges">EXCHANGES</Link>
                </Button>
                <Button
                  fontSize={["8px", "15px"]}
                  background={"transparent"}
                  borderRadius={"0px"}
                  css={{
                    "&:hover": {
                      background: "transparent",
                      borderBottom: "2px solid #f7542f",
                    },
                    "&:active": {
                      borderBottom: "2px solid #f7542f",
                    },
                  }}
                  onClick={onClose}
                >
                  <Link to="/news">NEWS</Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Stack>
    </>
  );
};
export default AppDrawer;
