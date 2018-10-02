import React from "react"
import Link from 'next/link'
import styled from 'styled-components';
import {
    Container,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem } from 'reactstrap';


const NavbarBackground = styled.div`
    position:absolute;
    width:50%;
    height:100%;
    background:#ffffff;
    left: 0;
    z-index: -1;
    
    @media (max-width: 991px) {
    width:100%;
    }
    
`
class Header extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div className="position-relative">




                <Navbar light expand="md"  fixed="top" className="py-4">

                    <NavbarBackground></NavbarBackground>

                    <Container>

                        <Link href="/">
                            <a className="text-body">
                                <img height="40p" src="https://www.ajobthing.com/employer_assets/img/logo/y-logo.png"/>
                            </a>
                        </Link>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                {/*<NavItem>*/}
                                    {/*<Link href="/"><a className="text-body nav-link">Components</a></Link>*/}
                                {/*</NavItem>*/}
                                <NavItem className="ml-2">
                                    <Button color="primary">Hiring Now!</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Header
