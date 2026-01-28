import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react {
    &:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @media (prefers-reduced-motion: no-preference) {
      animation: ${rotate} infinite 20s linear;
    }
  }
`

const Title = styled.h1`
  font-size: 3.2em;
  line-height: 1.1;
`

const Card = styled.div`
  padding: 2em;
`

const Button = styled.button`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    background-color: #f9f9f9;
  }
`

const StyledLink = styled.a`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;

  &:hover {
    color: #535bf2;
  }
`

const ReadTheDocs = styled.p`
  color: #888;
`

function LandingPage() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <div>
        <StyledLink href="https://vite.dev" target="_blank">
          <Logo src={viteLogo} alt="Vite logo" />
        </StyledLink>
        <StyledLink href="https://react.dev" target="_blank">
          <Logo src={reactLogo} className="logo react" alt="React logo" />
        </StyledLink>
      </div>
      <Title>Vite + React</Title>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>
        Click on the Vite and React logos to learn more
      </ReadTheDocs>
    </Container>
  )
}

export default LandingPage
