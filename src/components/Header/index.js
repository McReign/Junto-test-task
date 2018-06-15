import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.css';
import {Link} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <Row className='header' type='flex' justify='center' align='middle'>
        <Col className='title'>
          <Link to='/' className='main-title'>Контроль расходов</Link>
        </Col>
      </Row>
    );
  }
}

export default Header;
