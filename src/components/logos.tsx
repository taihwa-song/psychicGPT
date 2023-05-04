import { Box, Spacer, Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";

export default function Logos() {
  return (
    <Flex width="100%">
      <Box>
        <Logo h={{ base: "5rem", md: "10rem" }} pointerEvents="none" />
      </Box>

      <Spacer />
      <Box>
        <Logo h={{ base: "5rem", md: "10rem" }} pointerEvents="none" />
      </Box>
    </Flex>
  );
}
