import React, {Component, Fragment} from 'react';
import '../../asset/css/bootstrap.min.css';
import '../../asset/css/custom.css';
import {Nav, Navbar} from "react-bootstrap";
import navLogoWhite from "../../asset/image/navlogowhite.svg";
import navLogoBlue from "../../asset/image/navlogoblue.svg";

class TopNavigation extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle: "navTitle",
            navLogo: [navLogoWhite],
            navBackground: "navBackground",
            navBarItem: "navItem"
        }
    }

    onScroll=()=>{
        if (window.scrollY > 100 ){
            this.setState({navBarTitle:'navTitleScroll', navLogo: [navLogoBlue], navBackground: 'navBackgroundScroll', navBarItem: 'navItemScroll'});
        }else if(window.scrollY < 100){
            this.setState({navBarTitle:'navTitle', navLogo: [navLogoWhite], navBackground: 'navBackground', navBarItem: 'navItem'});
        }
    }

    componentDidMount() {
       window.addEventListener('scroll', this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="lg" className={this.state.navBackground}  variant="dark">
                    <Navbar.Brand className={this.state.navBarTitle}>
                        <img src={this.state.navLogo}/>
                         Abdul Mohaimen
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>HOME</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>SERVICES</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>COURSES</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>PORTFOLIO</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>CONTACT</Nav.Link>
                            <Nav.Link href="#deets" className={this.state.navBarItem}>ABOUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;