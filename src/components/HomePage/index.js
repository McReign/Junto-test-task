import React, { Component } from 'react';
import './index.css';
import PropTypes from "prop-types";
import moment from 'moment';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { filterCards, sortCards } from './actions';
import { Button, Row, Col, Select, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import CardList from '../CardList';
const { RangePicker } = DatePicker;

const data = [
  {
    id: 'sfdsafsafd',
    desc: 'saaaaaaaaaaaaaaaadqwc qecasf asdq w ds qd qw d',
    price: 12000,
    date: '12.01.2018'
  },
  {
    id: 'sfdsaf12123afd',
    desc: 'sasdaaaaadqwc qecasf asdq w ds qd qw d',
    price: 800,
    date: '12.11.2018'
  }
];

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Col offset={6} span={12}>
        <Row type='flex' align='bottom' justify='center' style={{marginBottom: 16}}>
          <Col span={8}>
            <Row style={{marginBottom: 2}}>Сортировка</Row>
            <Row>
              <Select value={this.props.sortBy} onChange={(value) => this.props.sortCards(value)} className='sort'>
                <Select.Option value='date'>По дате</Select.Option>
                <Select.Option value='price'>По сумме</Select.Option>
              </Select>
            </Row>
          </Col>
          <Col span={15} offset={1}>
            <Link to='/add'><Button type='primary' size='large' className='add-btn'>Добавить</Button></Link>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row style={{marginBottom: 2}}>Фильрация по времени</Row>
            <Row>
              <RangePicker className='filter' value={this.props.dates} format='DD.MM.YYYY' onChange={(dates) => this.props.filterCards(dates)} locale={locale}/>
            </Row>
          </Col>
        </Row>
        <Col className='total-amount'>
          <Row style={{marginBottom: 2}}>Общая сумма расходов</Row>
          <Row style={{fontSize: 30}}>{data.reduce((sum, item) => sum + item.price, 0)} руб.</Row>
        </Col>
        <CardList data={data}/>
      </Col>
    )
  }
}

HomePage.propTypes = {
  cards: PropTypes.array,
  sortBy: PropTypes.string,
  dates: PropTypes.array
};

function mapStateToProps(state) {
  return {
    cards: state.homePage.cards,
    sortBy: state.homePage.sortBy,
    dates: state.homePage.dates
  };
}

function mapDispatchToProps(dispatch) {
  return {
    filterCards: (dates) => dispatch(filterCards(dates)),
    sortCards: (type) => dispatch(sortCards(type))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);