import React, { useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
import colors from "../../assets/colors";

const Container = styled.div`
  padding: 20px;
`

const Description = styled.div`
  color: ${colors.textColor};
  font-size: 20px;
`

const Form = styled.form`
  max-width: 100%;
  text-align: center;
`

const InputBar = styled.div`
  position: relative;
  margin: 20px auto;
  display: flex;
  min-width: 500px;
  align-items: center;
  justify-content: center;
`

const InputBox = styled.input`
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  font-size: 18px;
  padding: 0 30px;
  width: 95%;
  height: 50px;
  border-radius: 50px;
  vertical-align: middle;
  outline: none;
  border: none;
`

const Result = styled.div`
  width: 80%;

`
const ResultText = styled.div`
  color: ${colors.textColor};
  font-size: 24px;
`

type ButtonProps = {
  mode: string,
}

const Contents: React.FC<ButtonProps> = (props) => {
  const [result, setResult] = useState('')

  // const server = 'http://kanji-number-back.an.r.appspot.com/'
  const server = 'http://localhost:8080/v1/'

  const handleChange = (event: any) => {
    const query = event.target.value
    if (query === '') {
      setResult('')
      return
    }
    const serverUrl = `${server}${props.mode}/${query}`
    console.log(serverUrl)
    axios.get(serverUrl).then((res) => {
      if (res.data === '') setResult('正しくない文字列です')
      else setResult(res.data)
    }).catch(console.error)
  }

  return (
    <Container>
      <Form>
        <Description> 【入力例】</Description>
        <Description>number2kanji: 1234567890 (0 ~ 9,999,999,999,999,999 の範囲)</Description>
        <Description>kanji2number: 壱拾弐億参千四百五拾六万七千八百九拾</Description>
        <InputBar>
          <InputBox type="text" placeholder={'変換したい文字列を入力！'} onChange={handleChange} />
        </InputBar>
      </Form>
      <Result>
        <ResultText>結果: {result}</ResultText>
      </Result>
    </Container>
  )
}

export default Contents
