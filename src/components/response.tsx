import { Box, Card } from "@chakra-ui/react";
import { ReadingCard } from "./card";

const Response = (data: object) => {
  return (
    <Box>
      <Card maxW="sm">
        <ReadingCard
          title="Career"
          text={"career" in data ? String(data["career"]) : ""}
          cardImg="https://i.ibb.co/x266whp/career.png"
        />
      </Card>
      <br />
      <Card maxW="sm">
        <ReadingCard
          title="Relationship"
          text={"relationship" in data ? String(data["relationship"]) : ""}
          cardImg="https://i.ibb.co/WvJs0z1/relationship.png"
        />
      </Card>
    </Box>
  );
};

export default Response;
