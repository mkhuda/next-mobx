import React from "react";
import HeadTag from "../components/common/HeadTag";
import Base from "../components/layout/Base";
import UserForm from "../components/UserForm";
import Link from 'next/link'
import { Container, Row, Col,Card,CardBody,Button,Table} from 'reactstrap';
import ReactLoading from "react-loading";


export default class Index extends React.Component {

    static async getInitialProps({ query }) {
        console.log(query)
        return {
            slug: query.slug,
            position:query.position,
            show:query.show
        };
    }

    constructor(props) {
        super(props);
        this.state = {

        };

        this.getInitalData = this.getInitalData.bind(this);
        this.getFullData = this.getFullData.bind(this);
    }
    getInitalData(){

    }
    getFullData(){

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
                                    {(this.props.show)
                                        ?
                                        <div className={"text-center py-12"}>
                                            <ReactLoading className={'mb-4 mx-auto'} type={'spin'} color={'#e6b05a'} height={'80px'} width={'80px'} />
                                            <h5 className="text-bold mb-1">{this.props.position}</h5>
                                            <p className="mb-0">Searching from 99,999 jobs in our database...</p>
                                        </div>
                                        :
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
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    {(this.props.show)
                        ?
                        null
                        :

                        <Row className={'align-items-center border-top border-bottom py-4'} noGutters={true}>
                            <Col md="12" className={'text-center'}>
                                Subscribe to view full details.
                                <div className={'d-block mt-4 mt-lg-0 d-lg-none'}></div>
                                <div className={'ml-4 d-inline-block'}><UserForm position={this.props.position} buttonLabel={<span><i className='fas fa-user'></i>&nbsp; Subscribe Now</span>} /></div>
                                {/*<Button  className={'ml-4'} outline color={'primary'}><i className={'fas fa-user'}></i>&nbsp; Already Subscribe ? </Button>*/}
                            </Col>
                        </Row>
                    }

                    <Link href="/home"><a className={'text-primary text-bold h6 mt-16 d-block'}><i className={'fas fa-search'}></i> New Search</a></Link>
                </Container>

            </Base>
        );
    }
}
