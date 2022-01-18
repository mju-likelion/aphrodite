import styled, { css } from "styled-components";

type Props = {
	ghost?: boolean;
	color: string;
	textColor?: string;
	size: string;
};

function Button({ ghost, color, textColor, size, ...props }: Props) {
	console.log(ghost, color, size);
	return (
		<DesignButton
			type="button"
			ghost={ghost}
			color={color}
			size={size}
			textColor={textColor}
			{...props}
		>
			버튼
		</DesignButton>
	);
}

const DesignButton = styled.button<Props>`
	border-radius: 15px;
	background-color: white;
	color: black;
	cursor: pointer;

	${({ ghost }) =>
		ghost &&
		css`
			background-color: transparent;
		`}
	${({ color }) => css`
		color: ${color};
		border: 1px solid ${color};
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
`;

const defaultProps = {
	ghost: false,
	textColor: undefined,
};

Button.defaultProps = defaultProps;

export default Button;
