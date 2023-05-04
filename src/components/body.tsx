import {
  Box,
  Container,
  Heading,
  VStack,
  Image,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  Text,
  Select,
  Input,
  FormControl,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Body() {
  const generateBox = (name: string, children: JSX.Element) => {
    return (
      <Box w="80%" display="flex" borderRadius={"xl"}>
        <Container w="50%">{name}</Container>
        <Container w="50%">{children}</Container>
      </Box>
    );
  };
  return (
    <Box
      borderRadius={"3xl"}
      backgroundColor={"black"}
      mt="3rem"
      pt="2rem"
      pb="2rem"
      width="100%"
    >
      <VStack spacing={6}>
        <Heading>Psychic GPT</Heading>
        <Spacer />
        <Box>
          <Image src={require("./test1.png")}></Image>
        </Box>
        <Box>
          <Text>Please tell us about yourself</Text>
        </Box>
        <FormControl>
          {generateBox(
            "Your Name",
            <Input w="100%" placeholder="Name" required={true} />
          )}
          <br />
          {generateBox(
            "Day of birth",
            <Input w="100%" id="date" type="date" name="date" required={true} />
          )}
          <br />
          <Input type="submit" value="Submit" width="3s0%" />
        </FormControl>
      </VStack>
    </Box>
  );
}
