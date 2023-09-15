import {
  Box,
  Container,
  Flex,
  Strong,
  Text,
} from "@radix-ui/themes";
import CustomButton from "./Button.component";

function InvoicePaid() {
  return (
    <Box
      style={{ background: "var(--blue-a3)", borderRadius: "var(--radius-3)" }}
      width="max-content"
      height="max-content"
    >
      <Container size="1">
        <Text size="8" as="p" align="center">
          Invoice Paid
        </Text>
        <Text size="5" as="p" align="center">
          You paid $17,975.30. A receipt copy was sent to{" "}
          <Strong>accounting@example.com</Strong>
        </Text>
        <br />
        <Flex gap="3" align="center" justify="center">
          <CustomButton text="Next invoice" variant="classic" />
          <CustomButton text="Done" variant="outline" />
        </Flex>
      </Container>
    </Box>
  );
}

export default InvoicePaid;
