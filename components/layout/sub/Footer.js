import React from "react"
import Link from 'next/link'
import { Container, Row, Col} from 'reactstrap';


class Footer extends React.Component {



    render() {
        return(
            <div className="py-4 border-top">
            <Container>
                <Row>
                    <Col md="6">
                        <p className="mb-1 text-bold">Customer services</p>
                        <p className="mb-0 text-muted">sales@ajobthing.com</p>
                    </Col>
                    <Col md="6" className="mt-2 mt-md-0">
                        <p className="mb-1 text-bold">Phone</p>
                        <p className="mb-0 text-muted">+603 22424822 / +603 22424922</p>
                    </Col>
                </Row>
                <div className="border-bottom mt-1 mb-3"></div>

                <Row>
                    <Col lg="" md=""  sm={{ size: 12, order: 2 }} xs={{ size: 12, order: 2 }}>
                        <small className="text-muted">© Copyright Agensi Pekerjaan Ajobthing Sdn Bhd (Formerly known as Brightan System Sdn Bhd)
                            &nbsp;
                            <div className="d-none d-lg-block d-md-block"></div>

                            | &nbsp;<Link href="/"><a className="text-muted">Terms & Condition</a></Link>&nbsp;
                            | &nbsp;<Link href="/"><a className="text-muted">Privacy & Policy</a></Link>&nbsp;
                            | &nbsp;SSM (1036935K)</small>
                    </Col>
                    <Col lg={{order: 2}} md={{order: 2}} className="col-md-auto text-right-md">
                        <Link href="/"><a className="text-muted"><i className="fab fa-facebook-f"></i></a></Link>
                        <Link href="/"><a className="text-muted ml-3"><i className="fab fa-twitter"></i></a></Link>
                        <Link href="/"><a className="text-muted ml-3"><i className="fab fa-instagram"></i></a></Link>
                        <Link href="/"><a className="text-muted ml-3"><i className="fab fa-blogger-b"></i></a></Link>
                    </Col>
                </Row>

            </Container>
            </div>
        )
    }
}
export default Footer
