import { ChakraProvider, Box, VStack, Center } from "@chakra-ui/react";
import theme from "./theme";
import Body from "./components/body";
import Logos from "./components/logos";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize={{ base: "m", md: "xl" }} width="100%">
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
