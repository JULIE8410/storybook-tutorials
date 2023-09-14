import React from "react";

export interface TitleProps {
  /**
   * The text you want to show.
   */
  text?: string;
}

/**
 * Title Component
 * @param TitleProps The text you want to show.
 * @returns
 */
function Title({ text }: TitleProps) {
  return <div>{text}</div>;
}

export default Title;
