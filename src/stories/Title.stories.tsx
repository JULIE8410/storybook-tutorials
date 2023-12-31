import React from "react";
import { Meta, Story } from "@storybook/react";
import Title, { TitleProps } from "../components/Title.component";

export default {
  title: "Components/Title",
  tags: ["autodocs"],
  component: Title,
} as Meta;

const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = Template.bind({});
Basic.args = { text: "Here we go" };
