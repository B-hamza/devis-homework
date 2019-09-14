/** @jsx jsx */
import * as React from "react"
import { jsx, css } from '@emotion/core'

export interface IButtonProps {
	children?: React.ReactNode
	onClick?: (e: any) => void
}

const style = css({
	border: "1px solid #eee",
	borderRadius: 3,
	backgroundColor: "#FFFFFF",
	cursor: "pointer",
	fontSize: 20,
	padding: "3px 10px",
	margin: 10
})

const Button: React.FC<IButtonProps> = props => (
	<button css={style} onClick={props.onClick} type='button'>
		{props.children}
	</button>
)

Button.defaultProps = {
	children: null,
	onClick: () => {}
}
export default Button
