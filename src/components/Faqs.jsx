import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMinus } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";
import React from "react";

const Faqs = () => {
  return (
    <>
      <VStack>
        <Text fontSize={["xl", "4xl"]} my={2} marginBottom="75px">
          Frequently Asked Questions (FAQs)
        </Text>
        <Accordion allowMultiple>
          <AccordionItem
            w={["95vw", "60vw"]}
            mx={"auto"}
            py={"1"}
            px="2"
            border={"none"}
            bgColor={"transparent"}
            marginBottom="10px"
            borderRadius={"10px"}
            boxShadow={"0px 1px 5px 1px #161414"}
            transition={"all 0.5s linear"}
            animation={"borderA 3s infinite reverse"}
            css={{
              "&:hover": {
                boxShadow: "0px 1px 1px 1px #f7542f",
              },
            }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={"20px"}>
                      What is cryptocurrency?
                    </Box>
                    {isExpanded ? (
                      <AiOutlineMinus fontSize="25px" />
                    ) : (
                      <IoAddOutline fontSize="25px" fontWeight={"900"} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={"16px"}>
                  Cryptocurrency is basically a digital form of currency with
                  the support of cryptographic security for conducting trusted
                  transactions. The underlying technology which runs
                  cryptocurrencies is blockchain, and it offers a ledger for
                  documenting all transactions.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            w={["95vw", "60vw"]}
            mx={"auto"}
            py={"1"}
            px="2"
            border={"none"}
            bgColor={"transparent"}
            marginBottom="10px"
            borderRadius={"10px"}
            boxShadow={"0px 1px 5px 1px #161414"}
            transition={"all 0.5s linear"}
            animation={"borderA 3s infinite reverse"}
            css={{
              "&:hover": {
                boxShadow: "0px 1px 1px 1px #f7542f",
              },
            }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={"20px"}>
                      What is blockchain?
                    </Box>
                    {isExpanded ? (
                      <AiOutlineMinus fontSize="25px" />
                    ) : (
                      <IoAddOutline fontSize="25px" fontWeight={"900"} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={"16px"}>
                  The first-ever cryptocurrency, Bitcoin, is the first
                  successful implementation of blockchain in the real world.
                  Blockchain technology is basically a transparent, publicly
                  accessible, trustless, and secure ledger.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            w={["95vw", "60vw"]}
            mx={"auto"}
            py={"1"}
            px="2"
            border={"none"}
            bgColor={"transparent"}
            marginBottom="10px"
            borderRadius={"10px"}
            boxShadow={"0px 1px 5px 1px #161414"}
            transition={"all 0.5s linear"}
            animation={"borderA 3s infinite reverse"}
            css={{
              "&:hover": {
                boxShadow: "0px 1px 1px 1px #f7542f",
              },
            }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={"20px"}>
                      Can I buy crypto in India?
                    </Box>
                    {isExpanded ? (
                      <AiOutlineMinus fontSize="25px" />
                    ) : (
                      <IoAddOutline fontSize="25px" fontWeight={"900"} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={"16px"}>
                  Investors from India need to open a global account or invest
                  via brokerage platforms from a RBI-approved channel. To invest
                  in cryptocurrency ETFs overseas the investors need to transfer
                  the money under the Liberalized Remittance Schemeroute.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            w={["95vw", "60vw"]}
            mx={"auto"}
            py={"1"}
            px="2"
            border={"none"}
            bgColor={"transparent"}
            marginBottom="10px"
            borderRadius={"10px"}
            boxShadow={"0px 1px 5px 1px #161414"}
            transition={"all 0.5s linear"}
            animation={"borderA 3s infinite reverse"}
            css={{
              "&:hover": {
                boxShadow: "0px 1px 1px 1px #f7542f",
              },
            }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={"20px"}>
                      Is Crypto has future in India?
                    </Box>
                    {isExpanded ? (
                      <AiOutlineMinus fontSize="25px" />
                    ) : (
                      <IoAddOutline fontSize="25px" fontWeight={"900"} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} fontSize={"16px"}>
                  Cryptocurrency has grown in size and popularity among
                  investors to facilitate the financial activities such as
                  buying, selling and trading trading in India and around the
                  world. According to the United Nations Conference on Trade and
                  Development Report 2021, 7.3% of Indians owned cryptocurrency
                  in 2021.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem
            w={["95vw", "60vw"]}
            mx={"auto"}
            py={"1"}
            px="2"
            border={"none"}
            bgColor={"transparent"}
            marginBottom="100px"
            borderRadius={"10px"}
            boxShadow={"0px 1px 5px 1px #161414"}
            transition={"all 0.5s linear"}
            animation={"borderA 3s infinite reverse"}
            css={{
              "&:hover": {
                boxShadow: "0px 1px 1px 1px #f7542f",
              },
            }}
          >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left" fontSize={"20px"}>
                      Why the world needed cryptocurrencies?
                    </Box>
                    {isExpanded ? (
                      <AiOutlineMinus fontSize="25px" />
                    ) : (
                      <IoAddOutline fontSize="25px" fontWeight={"900"} />
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Cryptocurrencies were created as an attempt to decentralise
                  financial transactions following the 2008 financial crisis.
                  The idea was to put the power in the hands of people and
                  reduce dependency on banks and governments.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </VStack>
    </>
  );
};

export default Faqs;
