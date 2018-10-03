import React from "react";
import axios from "axios";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import {Row,Col, Button, Form, FormGroup, Label, CustomInput,Alert } from 'reactstrap';
import ReactLoading from "react-loading";
//import Router from 'next/router';
import {Router} from '../routes'

const Wrapper = styled.div`
  .custom-select{
    color:#adb5bd
  }
`;

const Loading = styled.div`
    @media (min-width: 991px) {
        color:#ffffff
    }
`


@inject('store') @observer
class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            selectedCategory: '',
            title : [],
            selectedTitle: '',
            isLoading: false,
            isError : false
        }
    }

    componentDidMount(){
        axios.get('http://111.90.140.10:8888/categories', {
            params: {}
        })
        .then((response) => {
            this.setState({categories: response.data})
        })
        .catch((error) => {
            console.log(error);
        });
    }

    onChangeCategory = (val) => {
        this.setState({selectedCategory: val}) //update selected category
        this.setState({title: []})
        this.setState({selectedTitle: ''}) // reset state
        axios.get('http://111.90.140.10:8888/category/'+val+'/positions', {
            params: {}
        })
        .then((response) => {
            this.setState({title: response.data})
        })
        .catch((error) => {
            console.log(error);
        });
    }

    onChangeTitle = (val) => {
        this.setState({selectedTitle: val})
    }

    getCategoryName(){
        var activeName =  '';
        for (var value of this.state.categories) {
            if(value.id == this.state.selectedCategory){
                activeName =  value.name;
                break;
            }
        }
        return activeName;
    }

    getTitleName(){
        var activeName =  '';
        for (var value of this.state.title) {
            if(value.id == this.state.selectedTitle){
                activeName =  value.name;
                break;
            }
        }
        return activeName;
    }

    onClickSearch = () => {
        this.setState({isError: false});
        this.setState({isLoading: true});

        axios.post('http://111.90.140.10:8888/salary', {
            position : this.getTitleName()
        })
        .then((response) => {
            console.log(response)
            this.setState({isLoading: false})
            Router.pushRoute('/result?position='+this.getTitleName()+'')
        })
        .catch((error) => {
            console.log(error);
            this.setState({isLoading: false});
            this.setState({isError: true});
        });

    }





    render() {
        return (
            <Wrapper>
                <Row>
                    <Col lg={{size:6, offset:0}} sm={{size:8, offset:2}}>


                        <Row className={"text-lg-left"}>
                            <Col lg={{size:10,}}>

                                <h1 className="h2">Get Your Salary Right</h1>
                                <p className="mb-4 text-muted">95% of job seekers think salary is the main factor in deciding which jobs to apply to. Is your salary competitive and attractive enough? How does it compare to the market rate?</p>
                                <p className="mb-1">Use our salary guide to find out:</p>

                                {this.state.isError ?
                                    <Alert color="danger" className={'mb-2 mt-2'}>
                                        Something went wrong try again
                                    </Alert>
                                    : null
                                }

                                <Form>
                                    <FormGroup>
                                        <Label className="text-muted" for="category">Select Job Category</Label>
                                        <CustomInput type="select" id="categories" onChange={(e) => this.onChangeCategory(`${e.target.value}`)} disabled = {(!this.state.categories.length | this.state.isLoading)? "disabled" : ""}>
                                            <option value="">Category</option>
                                            {this.state.categories.map((category, key) => {
                                                return <option key={key} value={category.id}>{category.name}</option>;
                                            })}
                                        </CustomInput>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="text-muted" for="title">Select Job Title</Label>
                                        <CustomInput type="select" id="title" onChange={(e) => this.onChangeTitle(`${e.target.value}`)} disabled = {(!this.state.title.length | this.state.isLoading)? "disabled" : ""}>
                                            <option value="">Job Title</option>
                                            {this.state.title.map((title, key) => {
                                                return <option key={key} value={title.id}>{title.name}</option>;
                                            })}
                                        </CustomInput>
                                    </FormGroup>
                                    <Row>
                                        <Col lg="6">
                                            <Button disabled={(  this.state.isLoading | this.state.selectedTitle == '' ) ? true : false} onClick={() => this.onClickSearch()} color="primary" block={true} className="mt-4">
                                                {(this.state.isLoading) ? 'Searching...' : 'Search' }
                                            </Button>
                                        </Col>
                                    </Row>


                                </Form>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg="6" md="12">
                        <Row>
                            <Col sm={{size:10, offset:1}}>
                                { this.state.isLoading ?
                                    <Loading className={"text-lg-left text-center mt-10 mt-lg-0"}>
                                        <ReactLoading className={'mb-4 mx-auto mx-lg-0'} type={'spin'} color={'#e6b05a'} height={'80px'} width={'80px'} />
                                        <h5 className="text-bold mb-1">{this.getTitleName()} in {this.getCategoryName()}</h5>
                                        <p className="mb-0">Searching from 99,999 jobs in our database...</p>
                                    </Loading>
                                    : null
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Wrapper>
        );
    }
}

export default SearchForm


