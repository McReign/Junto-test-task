import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { Card, Row, Col, Icon } from 'antd';
import {Link} from "react-router-dom";

class ConsumptionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card className='card' hoverable>
        <Col className='price' xs={{span: 24}} md={{span: 6}}>
          <p style={{fontSize: 26}}>{this.props.price ? this.props.price : '0'} руб.</p>
          <p style={{marginBottom: 0}}>{this.props.date ? this.props.date : 'Нет даты'}</p>
        </Col>
        <Col className='desc' xs={{span: 24}} md={{span: 17, offset: 1}}>
          <p style={{fontSize: 12, marginBottom: 6}}>Описание</p>
          <p>{this.props.desc ? this.props.desc : 'Нет описания'}</p>
        </Col>
        <Link to={`/edit/${this.props.id}`}><Icon type="edit" className='edit'/></Link>
        <Icon type="close" className='close' onClick={() => this.props.onDelete(this.props.id)}/>
      </Card>
    )
  }
}

ConsumptionCard.propTypes = {
  price: PropTypes.string,
  date: PropTypes.string,
  desc: PropTypes.string,
  onDelete: PropTypes.func
};

export default ConsumptionCard;