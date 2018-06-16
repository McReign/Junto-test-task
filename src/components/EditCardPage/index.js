import React, { Component } from 'react';
import './index.css';
import PropTypes from "prop-types";
import moment from 'moment';
import {Link} from "react-router-dom";
import { editCard } from "./actions";
import { connect } from "react-redux";
import { Button, Row, Col, InputNumber, Input, DatePicker, Form } from 'antd';

class EditCardPage extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editCard(this.props.match.params.id, this.price.inputNumberRef.input.value, this.desc.textAreaRef.value, this.date.picker.input.value);
    window.location.assign('/');
  };

  render() {
    return(
      <Col offset={6} span={12}>
        <form>
          <Row className='form-item'>
            <Row className='label'>Сумма</Row>
            <Row><InputNumber style={{width: '100%'}} min={0}
                              defaultValue={this.props.cards.filter(item => item.id === this.props.match.params.id)[0].price}
                              ref={price => this.price = price}/></Row>
          </Row>
          <Row className='form-item'>
            <Row className='label'>Описание</Row>
            <Row><Input.TextArea autosize={{minRows: 3}}
                                 defaultValue={this.props.cards.filter(item => item.id === this.props.match.params.id)[0].desc}
                                 ref={desc => this.desc = desc}/></Row>
          </Row>
          <Row className='form-item'>
            <Row className='label'>Дата</Row>
            <Row><DatePicker format='DD.MM.YYYY'
                             defaultValue={moment(this.props.cards.filter(item => item.id === this.props.match.params.id)[0].date, 'DD.MM.YYYY')}
                             style={{width: '100%'}} ref={date => this.date = date}/></Row>
          </Row>
          <Row type='flex' justify='center'>
            <Button type='primary' size='large'
                    htmlType='submit'
                    onClick={this.handleSubmit}
                    style={{marginTop: 20, marginRight: 12}}>Сохранить</Button>
            <Button size='large' onClick={() => window.history.back()} style={{marginTop: 20}}>Отмена</Button>
          </Row>
        </form>
      </Col>
    )
  }
}

function mapStateToProps(state) {
  return {
    cards: state.homePage.cards
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editCard: (id, price, desc, date) => dispatch(editCard(id, price, desc, date))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCardPage);