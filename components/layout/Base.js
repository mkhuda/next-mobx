import React from "react"
import Header from "./sub/Header";
import Footer from "./sub/Footer";

class Base extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <div className={'pt-27 pb-12 pt-sm-40 pb-sm-26'}>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Base
