import styled, { css } from "styled-components";

type Props = {
  ghost?: boolean;
  color?: string;
  textColor?: string;
  size?: string;
  fullWidth?: boolean;
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
  onClick,
  ...props
}: Props) {
  console.log(fullWidth);
  return (
    <DesignButton
      type="button"
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
          font-size: 12px;
        `
      : size === "medium"
      ? css`
          width: 120px;
          padding: 5px 15px;
          font-size: 15px;
        `
      : size === "large" &&
        css`
          width: 160px;
          padding: 5px 15px;
          font-size: 20px;
        `}
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
`;

const defaultProps = {
  ghost: false,
  textColor: "white",
  fullWidth: false,
};

Button.defaultProps = defaultProps;

export default Button;
