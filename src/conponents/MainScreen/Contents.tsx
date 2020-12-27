import React, {useState} from 'react'
import styled from 'styled-components'
import colors from "../../assets/colors";
import Search from "@material-ui/icons/Search";

const Form = styled.form`
  max-width: 100%;
  text-align: center;
  margin-top: 50px;
`

const InputBar = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  min-width: 500px;
  align-items: center;
  justify-content: center;
`

const StyledButton = styled.button`
  height: 25px;
  background: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border: none;
  outline: none;
  margin-right: 20px;
`

const InputBox = styled.input`
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  font-size: 30px;
  padding-left: 30px;
  width: 95%;
  height: 50px;
  border-radius: 50px;
  vertical-align: middle;
  outline: none;
  border: none;
`

const Result = styled.div`
  margin: 20px 0;
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
  const [query, setQuery] = useState('')

  const handleClick = () => {

  }

  const handleChange = (event: any) => {
    setQuery(event.target.value)
  }

  return (
    <div>
      <Form onSubmit={handleClick}>
        <InputBar>
          <StyledButton><Search /></StyledButton>
          <InputBox type="text" placeholder={'変換したい文字列を入力！'} onChange={handleChange} />
        </InputBar>
      </Form>
      <Result>
        <ResultText>結果: {query}</ResultText>
      </Result>
    </div>
  )
}

export default Contents
