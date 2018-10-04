import React from "react";
import axios from "axios";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import {Row,Col, Button, Input, Form, FormGroup, FormFeedback, FormText,Alert, Modal, ModalBody } from 'reactstrap';
import ReactLoading from "react-loading";
import validator from 'validator';
import IntlTelInput from 'react-intl-tel-input';
import {Router} from '../routes'
import "../styles/scss/components/userform.scss"

const CloseButton = styled.a`
    position: absolute;
    right: 0.7em;
    top: 0.9em;
    font-size: 2em;
    line-height: 0;
    color: #adb5bd !important; 
`;

const IconCustom = styled.i`
   margin-right:18px !important;
`;

const loadJSONP = (url, callback) => {
    const ref = window.document.getElementsByTagName('script')[0];
    const script = window.document.createElement('script');
    script.src = `${url + (url.indexOf('?') + 1 ? '&' : '?')}callback=${callback}`;
    ref.parentNode.insertBefore(script, ref);
    script.onload = () => {
        script.remove();
    };
};

const lookup = (callback) => {
    loadJSONP('http://ipinfo.io', 'sendBack');
    window.sendBack = (resp) => {
        const countryCode = (resp && resp.country) ? resp.country : '';
        callback(countryCode);
    }
};


@inject('store') @observer
class UserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name : '',
            company : '',
            title : '',
            email : '',
            phone: '',
            formatPhone: '',
            emailValid: true,
            phoneValid: true

        };

        this.toggle = this.toggle.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    toggle() {
        this.setState({
            modal: !this.state.modal,
            name: 'ss',
            company: 'ss',
            title : this.props.position,
            email: 'yamin90@live.com',
            phone: '01119901270',
            formatPhone: '',
            emailValid: true,
            phoneValid: true

        });
    }

    //form handle
    handleNameChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    handleCompanyChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    handleTitleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    handleEmailChange(event) {
        const email = event.target.name;
        const value = event.target.value;
        this.setState({[email] : value});

        //email validation
        if(!validator.isEmail(value)){
            this.setState({emailValid : false});
        }else{
            this.setState({emailValid : true});
        }
    }
    handlePhoneChange(status, value, countryData, number) {
        var trimNumber = number.replace(/[^A-Z0-9]/ig, "");
        this.setState({phone : value});
        this.setState({formatPhone : trimNumber});

        //phone validation
        if(status){
            this.setState({phoneValid : true});
        }else{
            this.setState({phoneValid : false});
        }

    };

    handleSubmit(event) {

        Router.pushRoute('/result?position='+this.props.position+'&show=true')
        this.toggle();

        axios.post('http://111.90.140.10:8888/register', {
            name : this.state.name,
            email : this.state.email,
            phone : this.state.formatPhone,
            company: this.state.company
        })
        .then((response) => {
            console.log(response)
            Router.pushRoute('/result?position='+this.props.position+'&&show=true')
        })
        .catch((error) => {
            console.log(error.response)
        });

        event.preventDefault();
    }






    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} size={''}>
                    <ModalBody className={'p-8 p-lg-12'}>
                        <CloseButton className={'pointer'} onClick={this.toggle}>&times;</CloseButton>
                        <h3 className={'mt-0 pr-8 pr-md-0'} >Get the Latest Salary and Recruitment Guides</h3>
                        <p className={'text-muted mb-8'}>Fill in your details below and we’ll select the top hiring tips to help you recruit faster and more effectively:</p>

                        <Form className={'mb-8'}>
                            <FormGroup>
                                <Row noGutters={true}>
                                    <Col className={'col-auto p-0'}>
                                        <i className={'far fa-user mt-3 mr-3 text-muted'}></i>
                                    </Col>
                                    <Col className={'p-0'}>
                                        <Input invalid={false} type="text" name="name" id="name" placeholder="Name" value={this.state.name}  onChange={this.handleNameChange}/>
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row noGutters={true}>
                                    <Col className={'col-auto p-0'}>
                                        <i className={'far fa-building mt-3 mr-3 text-muted'}></i>
                                    </Col>
                                    <Col className={'p-0'}>
                                        <Input invalid={false} type="text" name="company" id="company" placeholder="Company Name" value={this.state.company} onChange={this.handleCompanyChange}/>
                                        <FormFeedback>You will not be able to see this</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row noGutters={true}>
                                    <Col className={'col-auto p-0'}>
                                        <i className={'fas fa-briefcase mt-3 mr-3 text-muted'}></i>
                                    </Col>
                                    <Col className={'p-0'}>
                                        <Input invalid={false} type="text" name="title" id="title" placeholder="Job Title" disabled={true} value={this.state.title}  onChange={this.handleTitleChange}/>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row noGutters={true}>
                                    <Col className={'col-auto p-0'}>
                                        <i className={'far fa-envelope mt-3 mr-3 text-muted'}></i>
                                    </Col>
                                    <Col className={'p-0'}>
                                        <Input invalid={!this.state.emailValid} type="email" name="email" id="email" placeholder="Email" value={this.state.email}  onChange={this.handleEmailChange}/>
                                        <FormFeedback>Please enter valid email address</FormFeedback>
                                    </Col>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row noGutters={true}>
                                    <Col className={'col-auto p-0'}>
                                        <IconCustom className={'fas fa-mobile-alt mt-3 text-muted'}></IconCustom>
                                    </Col>
                                    <Col className={'p-0'}>
                                        <IntlTelInput
                                            onPhoneNumberChange={ this.handlePhoneChange }
                                            onPhoneNumberBlur={ this.handlePhoneChange }
                                            style={ { width: '100%' } }
                                            css={['intl-tel-input', 'form-control' ]}
                                            utilsScript={'/static/js/libphonenumber.js'}
                                            defaultCountry={ 'auto' }
                                            geoIpLookup={ lookup }
                                            preferredCountries={['my','id']}
                                            value={this.state.phone}
                                            formatOnInit={false}
                                        />
                                        {(this.state.phoneValid) ? null :  <span className="invalid-feedback d-block">Phone number not valid</span> }

                                    </Col>
                                </Row>
                            </FormGroup>



                            <Button disabled={(
                                this.state.name &&
                                this.state.company &&
                                this.state.title &&
                                this.state.email &&
                                this.state.phone &&
                                this.state.emailValid &&
                                this.state.phoneValid
                            ) ? false : true} block={true} color="primary" className={'mt-6'} onClick={this.handleSubmit}>Subsribe</Button>
                            <a href="/" className={'text-primary d-block mt-4'}>Already subscribe? Validate your email here</a>
                        </Form>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default UserForm


