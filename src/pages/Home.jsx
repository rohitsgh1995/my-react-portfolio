import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {

    const title = 'Rohit Singh';

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <div className='mt-5 gradient-with-shadow p-5 rounded'>
                            <h2>Hello</h2>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;