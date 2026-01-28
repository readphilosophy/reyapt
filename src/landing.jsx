import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import heroDisplay from './assets/hero-display.webp'


const Container = styled.div`
    min-height: 1400px;
    min-width: 100vw;
    max-width: 1280px;
    margin: 0 auto;
    background: radial-gradient(
        circle at bottom,
        #FFFFFF 10%,
        #E0EFFC 30%,
        #3389FF 60%,
        #0C367B 76%,
        #050B1D 98%
    );
`
const Header = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 80px;
    align-items: center;
    padding-inline: 10%;
    gap: 20px;
`
const Logo = styled.div`
    font-weight: 800;
    margin-right: 20px;
`
const NavButton = styled.div`
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
`
const UpdateNotice = styled.div`
    display: flex; 
    width: 95%;
    height: 50px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 14px;
    justify-self: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    text-align: center;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    align-items: center;
    justify-self: center;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 80px;
`
const Title = styled.h1`
    font-size: 62px;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
    letter-spacing: -1px;
	text-wrap-style: balance;
`
const Subtitle = styled.p`
    // font-size: 18px;
    margin-block: 30px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const Button = styled.button`
    border-radius: 10px;
    border: none;
    padding: 12px 22px;
    font-size: 18px;
    font-weight: 600;
    font-family: inherit;
    background: ${props => props.variant === 'secondary' ? '#FFFFFF' : '#050B1D'};
    color: ${props => props.variant === 'secondary' ? '#050B1D' : '#FFFFFF'};
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
        scale: 0.96;
    }
`
const HeroImage = styled.img`
    max-width: 1000px;
    height: auto;
    margin-top: 40px;
    border-radius: 12px;
    // box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`



export function LandingPage(){
    const [count, setCount] = useState(0)
    const navigate = useNavigate()

    return(
        <Container>
            <Header>
                <Logo>📄 GOVY</Logo>
                <NavButton onClick={() => navigate('/app')}>Generate</NavButton>
                <NavButton>Insider Tips</NavButton>
                <NavButton>Pricing</NavButton>
            </Header>
            <UpdateNotice>New: Tailored Resumes, Match Analysis and more!</UpdateNotice>
            <Section>
                <Title>Application Generator for Australian Government</Title>
                <Subtitle>Govy generates tailored resumes and suitability statements for Government professionals in 60 seconds.</Subtitle>
                <ButtonsContainer>
                    <Button onClick={() => setCount((count) => count + 1)}>Get Started</Button>
                    <Button variant="secondary">See Insider Tips</Button>
                </ButtonsContainer>
                <HeroImage src={heroDisplay} alt="Govy Application Generator" />
            </Section>
        </Container>
    )
}