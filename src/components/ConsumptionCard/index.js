import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Card, Row, Col, Icon } from 'antd';

class ConsumptionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className='card' hoverable>
        <Col span={6}>
          <p style={{fontSize: 26}}>{this.props.price} руб.</p>
          <p style={{marginBottom: 0}}>{this.props.date}</p>
        </Col>
        <Col span={17} offset={1}>
          <p style={{fontSize: 12}}>Описание</p>
          <p style={{fontSize: 16, wordBreak: 'break-word'}}>{this.props.desc}</p>
        </Col>
        <Icon type="edit" className='edit' />
        <Icon type="close" className='close'/>
      </Card>
    )
  }
}

ConsumptionCard.defaultProps = {
  price: 0,
  date: 'Нет даты',
  desc: 'Нет описания'
};

ConsumptionCard.propTypes = {
  price: PropTypes.number,
  date: PropTypes.string,
  desc: PropTypes.string
};

export default ConsumptionCard;