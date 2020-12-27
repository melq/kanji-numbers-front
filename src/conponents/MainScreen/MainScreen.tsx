import React, { useState } from 'react'
import styled from 'styled-components'
import colors from "../../assets/colors";
import Button from "./Button";
import Contents from "./Contents";

const mode = ['number2kanji', 'kanji2number']

const MainWrapper = styled.div`
  background: ${colors.mainColor};
  position: relative;
  width: 100%;
  height: 100vh;
`

const Container = styled.div`
  background: ${colors.gray};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
  padding: 20px;
`

const Elements = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Title = styled.div`
  text-align: center;
  font-family: "Hiragino Sans";
  font-size: 80px;
  font-weight: bold;
  color: ${colors.textColor};
  margin: 100px 0 100px 0;
`

const LeftButton = styled.div`
  display: inline;
`

const RightButton = styled.div`
  display: inline;
`

const Tab = styled.div`
  background: ${colors.gray2};
  padding: 5px 50px;
  border-radius: 0 0 10px 10px;
`

const MainScreen: React.FC = () => {
  const [isLeft, setIsLeft] = useState(true)
  const [fillColorLeft, setFillColorLeft] = useState(colors.gray2)
  const [textColorLeft, setTextColorLeft] = useState(colors.textColor)
  const [fillColorRight, setFillColorRight] = useState(colors.white)
  const [textColorRight, setTextColorRight] = useState(colors.gray2)

  const selectLeft = () => {
    setIsLeft(true)
    setFillColorLeft(colors.gray2)
    setTextColorLeft(colors.textColor)
    setFillColorRight(colors.white)
    setTextColorRight(colors.gray2)
  }

  const selectRight = () => {
    setIsLeft(false)
    setFillColorLeft(colors.white)
    setTextColorLeft(colors.gray2)
    setFillColorRight(colors.gray2)
    setTextColorRight(colors.textColor)
  }

  const DisplayTab = () => {
    if (isLeft) {
      return (
        <Tab>
          <Contents mode={mode[0]} />
        </Tab>
      )
    } else {
      return (
        <Tab>
          <Contents mode={mode[1]} />
        </Tab>
      )
    }
  }

  return (
    <MainWrapper>
      <Container>
        <Elements>
          <Title>kanjinumbers.com</Title>
        </Elements>
        <Elements>
          <LeftButton onClick={selectLeft}>
            <Button
              fillColor={fillColorLeft}
              text={mode[0]}
              textColor={textColorLeft}
              borderRadius={'10px 0 0 0'}
            />
          </LeftButton>
          <RightButton onClick={selectRight}>
            <Button
              fillColor={fillColorRight}
              text={mode[1]}
              textColor={textColorRight}
              borderRadius={'0 10px 0 0'}
            />
          </RightButton>
          <DisplayTab />
        </Elements>
      </Container>
    </MainWrapper>
  )
}

export default MainScreen
