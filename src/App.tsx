import { Flex, Text, Button, Theme, Avatar } from "@radix-ui/themes";
import CustomButton from "./components/Button.component";
import "@radix-ui/themes/styles.css";
import InvoicePaid from "./components/InvoicePaid.component";

function App() {
  return (
    <Theme>
      <Flex direction="column" gap="3" align="center">
        <br />
        <Avatar
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          fallback="success"
        />
        <Text size="7">Here is your Invoice :)</Text>
        <CustomButton size="2" text="Print" color="red"></CustomButton>
        <br />
        <InvoicePaid />
        <br />
        <Button size="2" variant="classic">
          Home
        </Button>
      </Flex>
    </Theme>
  );
}

export default App;
