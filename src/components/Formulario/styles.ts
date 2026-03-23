import styled from 'styled-components'

export const FormContainer = styled.section`
  padding: 32px 0;
  background-color: #fff;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const Titulo = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`

export const Campo = styled.input`
  width: 100%;
  max-width: 700px;
  padding: 14px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  margin-right: 12px;
  margin-bottom: 12px;

  &:focus {
    outline: none;
    border-color: #3867d6;
  }
`

export const Botao = styled.button`
  background-color: #44bd32;
  color: #fff;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #4cd137;
  }
`