import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import CharDetails from '../charDetails/charDetails';
import Header from '../header/header';
import ItemList from '../itemList/itemList';
import RandomChar from '../randomChar/randomChar';
import styled from 'styled-components'

const Button = styled.button`
    display: block
    margin-bottom: 40px
    padding: 4px 10px
    background-color: #ccc
    color: #303f53
    font-size: 16px
    font-weight: 500
    border:none
    border-radius: 4px
`

// const ToggleRandomChar = () => {
//     const randomChar = 
// }

const App = () => {
    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
                    </Col>
                </Row>
                {/* <Button
                onClick={ToggleRandomChar}>
                    Toggle Random Character
                </Button> */}
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;