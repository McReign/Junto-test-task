import React, { Component } from 'react';
import { Row, Col} from 'antd';
import ConsumptionCard from '../ConsumptionCard';

class CardList extends Component {
  render() {
    return (
      <Row style={{margin: '40px 0'}}>
        <ConsumptionCard/>
      </Row>
    )
  }
}

export default CardList;