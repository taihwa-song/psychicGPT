import * as React from "react";
import {
  ChakraProvider,
  Box,
  VStack,
  Container,
  Heading,
  Image,
  StackDivider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Text,
  Spacer,
  Flex,
  Center,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import theme from "./theme";
import Body from "./components/body";
import Logos from "./components/logos";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" width="100%">
      <Center>
        <VStack mt="3rem" width={{ base: "100%", md: "40%" }}>
          <Logos />
          <Body />
          <Logos />
        </VStack>
      </Center>
    </Box>
  </ChakraProvider>
);
