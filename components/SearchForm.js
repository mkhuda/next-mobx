import React from "react";
import axios from "axios";
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import {Row,Col, Button, Form, FormGroup, Label, CustomInput } from 'reactstrap';

const Wrapper = styled.div`
  .custom-select{
    color:#adb5bd
  }
`;

axios.defaults.headers.common['Auth-Token'] = 'foo bar';

@inject('store') @observer
class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }


    componentDidMount(){
        
        axios.get('http://111.90.140.10:8888/categories')
            .then(function (response) {
                console.log(response);
                //this.setState({categories:categories})
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onClickSearch = () => {
        alert('submit')
    }

    render() {
        return (
            <Wrapper>

                <Form>
                    <FormGroup>
                        <Label className="text-muted" for="category">Select Job Category</Label>
                        <CustomInput type="select" name="category" id="category" valid={false}>
                            <option value=''>Category</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </CustomInput>
                    </FormGroup>
                    <FormGroup>
                        <Label className="text-muted" for="title">Select Job Title</Label>
                        <CustomInput type="select" name="title" id="title" valid={false} disabled>
                            <option value=''>Job Title</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </CustomInput>
                    </FormGroup>
                    <Row>
                        <Col md="6">
                            <Button onClick={() => this.onClickSearch()} color="primary" block={true} className="mt-4">Search</Button>
                        </Col>
                    </Row>
                </Form>
            </Wrapper>
        );
    }
}

export default SearchForm


