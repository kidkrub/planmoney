import React, { FC } from 'react'

interface IButtonProps {color: string}

const Button:FC<IButtonProps> = (props) => {

    return (<button style={{backgroundColor:props.color}}>{props.children}</button>)
}

Button.defaultProps = { color: 'default'}

export default Button