import React from "react";
import HeadTag from "../components/common/HeadTag";
import Base from "../components/layout/Base";
import UserForm from "../components/UserForm";
import Link from 'next/link'
import { Container, Row, Col,Card,CardBody,Button,Table} from 'reactstrap';



export default class Index extends React.Component {

    static async getInitialProps({ query }) {
        return {
            slug: query.slug,
            position:query.position
        };
    }

    render() {

        return (
            <Base>
                <HeadTag title="Result" description=""/>

                <Container className={'text-center'}>
                    <Row className={'mb-12'}>
                        <Col sm={'12'}>
                            <h1 className={'h2 mb-8'}>Get Your Salary Right</h1>
                            <Row className="justify-content-center">
                                <Col lg={'7'} sm={"9"}>
                                    <Card className={'bg-light'}>
                                        <CardBody >
                                            <h5 className={'text-bold text-muted'}>{this.props.position}</h5>
                                            <h3 className={'text-bold text-primary mb-6'}>Average Salary: RM2,300</h3>

                                            <Table borderless responsive size="sm" className={'text-left'}>
                                                <tbody>
                                                <tr>
                                                    <td>Non-Executive</td>
                                                    <td className={'text-right'}>Min. *****</td>
                                                    <td className={'text-right'}>Max. *****</td>
                                                </tr>
                                                <tr>
                                                    <td>Executive Level</td>
                                                    <td className={'text-right'}>Min. *****</td>
                                                    <td className={'text-right'}>Max. *****</td>
                                                </tr>
                                                <tr>
                                                    <td>Manager Level</td>
                                                    <td className={'text-right'}>Min. *****</td>
                                                    <td className={'text-right'}>Max. *****</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <hr/>
                    <Row className={'align-items-center'}>
                        <Col md="12" className={'text-center'}>
                            Subscribe to view full details.
                            <div className={'d-block mt-4 mt-lg-0 d-lg-none'}></div>
                            <div className={'ml-4 d-inline-block'}><UserForm position={this.props.position} buttonLabel={<span><i className='fas fa-user'></i>&nbsp; Subscribe Now</span>} /></div>
                            {/*<Button  className={'ml-4'} outline color={'primary'}><i className={'fas fa-user'}></i>&nbsp; Already Subscribe ? </Button>*/}
                        </Col>
                    </Row>
                    <hr/>

                    <Link href="/home"><a className={'text-primary text-bold h6 mt-16 d-block'}><i className={'fas fa-search'}></i> New Search</a></Link>
                </Container>

            </Base>
        );
    }
}
