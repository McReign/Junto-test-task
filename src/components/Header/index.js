import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.css';

class Header extends Component {
  render() {
    return (
      <Row className='header' type='flex' justify='center' align='middle'>
        <Col className='title'>
          Контроль расходов
        </Col>
      </Row>
    );
  }
}

export default Header;
