import styled from 'styled-components'

export const Card = styled.li`
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #dcdde1;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`

export const Titulo = styled.h3`
  font-size: 22px;
  margin-bottom: 8px;
  color: #182c61;
`

export const Local = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  color: #636e72;
`

export const Tag = styled.span`
  display: inline-block;
  background-color: #dfe6e9;
  color: #2d3436;
  padding: 8px 12px;
  border-radius: 16px;
  font-size: 14px;
  margin-right: 8px;
  margin-bottom: 16px;
`

export const LinkBotao = styled.a`
  display: inline-block;
  text-decoration: none;
  background-color: #3867d6;
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: #274b9f;
  }
`