import React, { Component } from 'react';
import './index.css';
import PropTypes from "prop-types";
import moment from 'moment';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { Button, Row, Col, Input, DatePicker, Form } from 'antd';

class AddCardPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.price.input.value, this.desc.textAreaRef.value, this.date.picker.input.value);
  };

  render() {
    return(
      <Col offset={6} span={12}>
        <Form onSubmit={this.handleSubmit}>
          <Row className='form-item'>
            <Row className='label'>Сумма</Row>
            <Row><Input addonAfter='руб.' ref={price => this.price = price}/></Row>
          </Row>
          <Row className='form-item'>
            <Row className='label'>Описание</Row>
            <Row><Input.TextArea autosize={{minRows: 3}} ref={desc => this.desc = desc}/></Row>
          </Row>
          <Row className='form-item'>
            <Row className='label'>Дата</Row>
            <Row><DatePicker defaultValue={moment()} format='DD.MM.YYYY' style={{width: '100%'}} ref={date => this.date = date}/></Row>
          </Row>
          <Row type='flex' justify='center'>
            <Button type='primary' size='large' onClick={this.handleSubmit} style={{marginTop: 20}}>Добавить</Button>
          </Row>
        </Form>
      </Col>
    )
  }
}

AddCardPage.propTypes = {

};

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardPage);