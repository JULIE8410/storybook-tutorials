import { Button, Flex } from "@radix-ui/themes";

export interface ButtonProps {
  size?: "1" | "2" | "3" | "4" | undefined;
  text?: string;
  color?:
    | "ruby"
    | "tomato"
    | "red"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "brown"
    | "orange"
    | "sky"
    | undefined;
  variant?: "classic" | "solid" | "soft" | "outline" | "surface" | undefined;
}

function CustomButton({ size, text, color, variant = "classic" }: ButtonProps) {
  return (
    <Flex gap="3" align="center">
      <Button size={size} variant={variant} color={color}>
        {text}
      </Button>
    </Flex>
  );
}

export default CustomButton;
