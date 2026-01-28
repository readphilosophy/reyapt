import { useState } from 'react'
import styled from 'styled-components'
import { Applications } from './applications'
import { Resumes } from './resumes'
import { Statements } from './statements'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    background: rgba(255, 255, 255, 0.98);
    overflow: hidden;
`
const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 400px;
    // background: rgba(255, 255, 255, 0.98);
    background: rgba(255, 255, 255, 0.9);
    border-right: 2px solid transparent;
    border-image: linear-gradient(to right, transparent 0%, var(--bg3) 40%, var(--bg3) 60%, transparent 100%) 1;
    border-image-slice: 1;
`
const MainPanel = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    // background: rgba(255, 255, 255, 0.98);
`
const NavTab = styled.div`
    display: flex;
    padding: 8px 14px;
    font-weight: 500;
    // background: darkblue;
    color: #050B1D;
    margin: 6px;
    border-radius: 10px;
    cursor: pointer;
`
const Upgrade = styled.div`
    // font-size: 14px;
`

export function Dashboard(){

    const [activeTab, setActiveTab] = useState('Applications')

    const renderContent = () => {
        switch(activeTab){
            case 'Applications':
                return <Applications />
            case 'Resumes':
                return <Resumes />
            case 'Statements':
                return <Statements />
            default:
                return <Applications />
        }
    }

    return(
        <Container>
            <Sidebar>
                <NavTab 
                    $active={activeTab === 'Applications'} 
                    onClick={() => setActiveTab('Applications')}>Applications</NavTab>
                <NavTab 
                    $active={activeTab === 'Resumes'} 
                    onClick={() => setActiveTab('Resumes')}>Resumes</NavTab>
                <NavTab
                    $active={activeTab === 'Statements'} 
                    onClick={() => setActiveTab('Statements')}>Statements</NavTab>
                
                <Upgrade>Upgrade to Pro</Upgrade>
            </Sidebar>
            <MainPanel>
                {renderContent()}
            </MainPanel>
        </Container>
    )
}