import {
  Card,
  CardBody,
  CardProps,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC, ComponentProps } from "react";

export type ChakraCardProps = ComponentProps<typeof Card>;

export type ReadingCardProps = ChakraCardProps & {
  title: string;
  text: string;
  cardImg: string;
};

export const ReadingCard: FC<ReadingCardProps> = ({
  title,
  text,
  cardImg,
  ...props
}) => {
  return (
    <Card {...props}>
      <CardBody bgColor="#FCF2E1" borderRadius="lg">
        <Center>
          <Image src={cardImg} borderRadius="lg" w="100%" />
        </Center>

        <Stack mt="6" spacing="3">
          <Heading size="md" textColor="#202123">
            {title}
          </Heading>
          <Text textColor="#202123">{text}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
