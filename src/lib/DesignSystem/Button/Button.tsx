import { theme } from "@styles/theme";
import React from "react";
import styled, { css } from "styled-components";

type Props = {
  type: "button" | "submit";
  ghost?: boolean;
  color?: string;
  textColor?: string;
  size?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;

  onClick: () => void;
};

function Button({
  ghost,
  color,
  textColor,
  size,
  fullWidth,
  children,
  type,
  onClick,
  ...props
}: Props) {
  return (
    <DesignButton
      type={type}
      ghost={ghost}
      color={color}
      size={size}
      textColor={textColor}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      {children}
    </DesignButton>
  );
}

const DesignButton = styled.button<Props>`
  border-radius: 6px;

  cursor: pointer;

  ${({ ghost, color, textColor }) =>
    ghost
      ? css`
          border: 1px solid ${color};
          background-color: transparent;
        `
      : css`
          border: none;
          background-color: ${color};
          color: ${textColor};
        `}
  ${({ textColor }) => css`
    color: ${textColor};
  `}

  ${({ size }) =>
    size === "small"
      ? css`
          width: 80px;
          padding: 5px 15px;
        `
      : size === "medium"
      ? css`
          width: 120px;
          padding: 5px 15px;
        `
      : size === "large" &&
        css`
          width: 335px;
          padding: 5px 15px;
        `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}

    ${({ disabled }) =>
    disabled &&
    css`
      &:disabled {
        background-color: ${theme.colors.secondary.white};
      }
    `}
`;

const defaultProps = {
  ghost: false,
  textColor: "white",
  fullWidth: false,
};

Button.defaultProps = defaultProps;

export default Button;
