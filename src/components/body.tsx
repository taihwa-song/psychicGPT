import {
  Box,
  Container,
  Heading,
  VStack,
  Image,
  Text,
  Input,
  FormControl,
  Spacer,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import Response from "./response";

export default function Body() {
  const [username, setUsername] = useState("");
  const [birthday, setBirthday] = useState("");
  const [response, setResponse] = useState({});
  const [hasResponded, setResponded] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };
  const handleBdayChange = (e: React.FormEvent<HTMLInputElement>) => {
    setBirthday(e.currentTarget.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    send();
  };
  const send = async () => {
    if (isLoading) return;
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        birthday: birthday,
      }),
    };
    setLoading(true);
    fetch(
      "https://nft63qhv5h.execute-api.us-east-2.amazonaws.com/psychicgpt",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => setResponse("res" in data ? data["res"] : ""))
      .finally(() => {
        setLoading(false);
        setResponded(true);
      });
  };
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
      backgroundColor={"#202123"}
      mt="3rem"
      pt="2rem"
      pb="2rem"
      width="100%"
    >
      <VStack spacing={6}>
        <Heading>PsychicGPT</Heading>
        <Spacer />
        {!hasResponded && !isLoading && (
          <>
            <Box width="80%">
              <Image
                src="https://i.ibb.co/5L2dGTb/test1-ffe1f27c85193e856cbb.png"
                width="100%"
                borderRadius="lg"
              ></Image>
            </Box>
            <Box>
              <Text>Tell me about yourself</Text>
            </Box>
            <form onSubmit={handleSubmit}>
              <FormControl>
                {generateBox(
                  "Your Name",
                  <Input
                    w="100%"
                    placeholder="Name"
                    required={true}
                    onChange={handleNameChange}
                    defaultValue={username}
                  />
                )}
                <br />
                {generateBox(
                  "Day of birth",
                  <Input
                    w="100%"
                    id="date"
                    type="date"
                    name="date"
                    required={true}
                    onChange={handleBdayChange}
                    defaultValue={birthday}
                  />
                )}
                <br />
                <Input type="submit" value="Submit" width="3s0%" />
              </FormControl>
            </form>
          </>
        )}
        {hasResponded && !isLoading && (
          <>
            {Response(response)}
            <Button
              colorScheme="yellow"
              onClick={() => {
                setResponded(false);
              }}
            >
              Ask PsychicGPT again
            </Button>
          </>
        )}
        {isLoading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="yellow.500"
            size="xl"
          />
        )}
      </VStack>
    </Box>
  );
}
