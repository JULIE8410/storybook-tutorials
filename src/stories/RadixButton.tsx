import React from 'react';
import { Button, Flex } from '@radix-ui/themes';

export interface RadixButtonProps {
    text?: string;
    color?: "red" | "blue" | "gray" | undefined;
}

function RadixButton({ text, color='gray'} : RadixButtonProps) {
    return (<Flex gap="3" align="center">
    <Button size="3" variant="soft" color={color}>
      {text} 
    </Button>
    <Button size="2" variant="outline">
      Cancel
    </Button>
    <Button size="1" variant="surface">
      Edit
    </Button>
  </Flex>)
}

export default RadixButton;




   
    

