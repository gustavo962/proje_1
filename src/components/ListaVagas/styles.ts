import styled from 'styled-components'

export const Secao = styled.section`
  padding: 32px 0 48px;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`

export const Titulo = styled.h2`
  font-size: 28px;
  margin-bottom: 24px;
  color: #182c61;
`

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`