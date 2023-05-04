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
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { Logo } from "../Logo";

export default function Logos() {
  return (
    <Flex width="100%">
      <Box>
        <Logo h="10vmin" pointerEvents="none" />
      </Box>

      <Spacer />
      <Box>
        <Logo h="10vmin" pointerEvents="none" />
      </Box>
    </Flex>
  );
}
