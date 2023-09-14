import React from "react";
import "./App.css";
import { Flex, Text, Button, Theme } from "@radix-ui/themes";
import RadixButton from "./stories/RadixButton";
import "@radix-ui/themes/styles.css";

function App() {
  return (
    <Theme>
      <Flex direction="column" gap="3" align="center">
        <Text>Hello from Radix Themes :)</Text>
        <Text>Basic Buttons</Text>
        <Button size="2" variant="classic">
          Let's go!!
        </Button>
        <Button size="3" radius="small" color="blue">
          Here we go!!
        </Button>
      </Flex>
      <Text>My Radix Button</Text>
      <RadixButton text="Submit" color="red"></RadixButton>
    </Theme>
  );
}

export default App;
