import React, { Component } from 'react';
import './index.css';
import PropTypes from "prop-types";
import moment from 'moment';
import uuid from 'uuid';
import { connect } from "react-redux";
import { addCard } from "./actions";
import { Button, Row, Col, InputNumber, Input, DatePicker } from 'antd';

class AddCardPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(uuid.v4(), this.price.inputNumberRef.input.value, this.desc.textAreaRef.value, this.date.picker.input.value);
    window.location.assign('/');
  };

  render() {
    return(
      <Col xs={{span: 20, offset: 2}} md={{span: 12, offset: 6}} sm={{span: 16, offset: 4}} lg={{span: 10, offset: 7}}>
        <form>
          <Row className='form-item'>
            <Row className='label'>Сумма</Row>
            <Row><InputNumber style={{width: '100%'}} min={0} ref={price => this.price = price}/></Row>
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
            <Button type='primary' size='large' htmlType='submit' onClick={this.handleSubmit} style={{marginTop: 20}}>Добавить</Button>
          </Row>
        </form>
      </Col>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCard: (id, price, desc, date) => dispatch(addCard(id, price, desc, date))
  };
}

export default connect(null, mapDispatchToProps)(AddCardPage);