import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';

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
                    <Col xs={12} md={6} p={5}>
                        <div className='gradient-with-shadow w-100 h-100'>
                            <Image src="src/assets/images/user.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;