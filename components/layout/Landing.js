import React from "react"
import Header from "./sub/Header";
import Footer from "./sub/Footer";

class Landing extends React.Component {
    render() {
        return(
            <div>
                <Header half={true}/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default Landing
