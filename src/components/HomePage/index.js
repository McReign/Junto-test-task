import React, { Component } from 'react';
import './index.css';
import PropTypes from "prop-types";
import moment from 'moment';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { filterCards, sortCards, deleteCard } from './actions';
import { Button, Row, Col, Select, DatePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/ru_RU';
import { dateCompare, priceCompare, filterByDate } from '../../globalJs';
import CardList from '../CardList';
const { RangePicker } = DatePicker;

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.sortBy !== nextProps.sortBy) {
      this.forceUpdate();
    }
  }

  render() {
    return(
      <Col xs={{span: 20, offset: 2}} sm={{span: 16, offset: 4}} lg={{span: 12, offset: 6}}>
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
              <RangePicker className='filter' value={[this.props.dates[0] ? moment(this.props.dates[0]) : null, this.props.dates[1] ? moment(this.props.dates[1]) : null]} ref={dates => this.dates = dates} format='DD.MM.YYYY' onChange={(dates) => this.props.filterCards(dates)} locale={locale}/>
            </Row>
          </Col>
        </Row>
        <Col className='total-amount'>
          <Row style={{marginBottom: 2, whiteSpace: 'nowrap'}}>Общая сумма расходов</Row>
          <Row style={{fontSize: 30}}>{this.props.cards.length ? filterByDate(this.props.cards).reduce((sum, item) => (+item.price) + sum, 0).toString() : '0'} руб.</Row>
        </Col>
        <CardList data={this.props.sortBy === 'price' ? filterByDate(this.props.cards).sort(priceCompare)
          : filterByDate(this.props.cards).sort(dateCompare)}
                  onDelete={this.props.deleteCard}
        />
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
    sortCards: (type) => dispatch(sortCards(type)),
    deleteCard: (id) => dispatch(deleteCard(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);