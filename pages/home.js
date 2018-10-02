import React from "react";
import HeadTag from "../components/common/HeadTag";
import Base from "../components/layout/Base";
import SearchForm from "../components/SearchForm";
import styled from 'styled-components';
import { Container, Row, Col} from 'reactstrap';
import axios from "axios/index";

const Hero = styled.div`
  min-height:100vh;
  @media (max-width: 991px) {
    min-height:auto;
  }
`
const HeroContainer = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  left:0px;
  top:0px;
`
const HeroImage = styled.div`
  background-image: url(https://pindrop.test/images/hero-bg.jpg)
`


export default class Index extends React.Component {

    // static async getInitialProps({ query }) {
    //
    //     const categories = await axios.get(
    //         "http://111.90.140.10:8888/categories",
    //     );
    //
    //     return {
    //         slug: query.slug,
    //         data: categories.data,
    //     };
    // }

    render() {

        return (
            <Base>
                <HeadTag title="Home" description=""/>

                <Hero className="position-relative pt-30 pb-30">
                    <HeroContainer className="row no-gutters d-lg-flex d-none">
                        <Col lg={{size:6, offset: 6}} >
                            <HeroImage className="bg-image bg-image-center bg-image-fixed"></HeroImage>
                            <div className="bg-overlay bg-overlay-dark"></div>
                        </Col>
                    </HeroContainer>
                    <Container>
                        <Row>
                            <Col lg="6" md="8">
                                <Row>


                                    {/*{this.props.data.map(category => (*/}
                                        {/*<div key={category.id}>{category.name}</div>*/}
                                    {/*))}*/}

                                    <Col lg={{size:10,}}>
                                        <h1 className="h2">Get Your Salary Right</h1>
                                        <p className="mb-4 text-muted">95% of job seekers think salary is the main factor in deciding which jobs to apply to. Is your salary competitive and attractive enough? How does it compare to the market rate?</p>
                                        <p className="mb-1">Use our salary guide to find out:</p>
                                        <SearchForm/>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg="6" md="8">
                                result
                            </Col>
                        </Row>
                    </Container>
                </Hero>

            </Base>
        );
    }
}
