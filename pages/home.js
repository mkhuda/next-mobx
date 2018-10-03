import React from "react";
import HeadTag from "../components/common/HeadTag";
import Landing from "../components/layout/Landing";
import SearchForm from "../components/SearchForm";
import styled from 'styled-components';
import { Container, Row, Col} from 'reactstrap';


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

    static async getInitialProps({ query }) {
        return {
            slug: query.slug
        };
    }

    render() {

        return (
            <Landing>
                <HeadTag title="Home" description=""/>

                <Hero className={'pt-27 pb-12 pt-sm-40 pb-sm-26 position-relative'}>
                    <HeroContainer className="row no-gutters d-lg-flex d-none">
                        <Col lg={{size:6, offset: 6}} >
                            <HeroImage className="bg-image bg-image-center bg-image-fixed"></HeroImage>
                            <div className="bg-overlay bg-overlay-dark"></div>
                        </Col>
                    </HeroContainer>
                    <Container>
                        <SearchForm/>
                    </Container>
                </Hero>

            </Landing>
        );
    }
}
