import React, { Component } from 'react';
import './index.css';
import { Card, Row, Col, Icon } from 'antd';

class ConsumptionCard extends Component {
  render() {
    return (
      <Card className='card' hoverable>
        <Col span={6}>
          <p style={{fontSize: 28}}>38000 руб.</p>
          <p>14.05.2018</p>
        </Col>
        <Col span={17} offset={1}>
          <p style={{fontSize: 12}}>Описание</p>
          <p style={{fontSize: 16, wordBreak: 'break-word'}}>ОписаниеОписаниеОписан иеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписаниеОписание</p>
        </Col>
        <Icon type="edit" className='edit' />
        <Icon type="close" className='close'/>
      </Card>
    )
  }
}

export default ConsumptionCard;