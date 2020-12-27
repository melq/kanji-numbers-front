import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<
  Pick<ButtonProps, 'fillColor' | 'textColor' | 'borderRadius'>
  >`
  width: 50%;
  height: 60px;
  font-size: 25px;
  font-weight: bold;
  border: none;
  outline: none;
  font-family: "Hiragino Sans";
  background: ${({ fillColor }) => fillColor};
  color: ${({ textColor }) => textColor};
  border-radius: ${({ borderRadius }) => borderRadius};
`

type ButtonProps = {
  fillColor: string,
  text: string,
  textColor: string,
  borderRadius: string,
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <StyledButton
      fillColor={props.fillColor}
      textColor={props.textColor}
      borderRadius={props.borderRadius}
    >
      {props.text}
    </StyledButton>
  )
}

export default Button
