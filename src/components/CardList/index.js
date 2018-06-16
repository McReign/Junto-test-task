import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col} from 'antd';
import ConsumptionCard from '../ConsumptionCard';

class CardList extends Component {
  render() {
    return (
      <Row style={{margin: '40px 0'}}>
        {this.props.data && this.props.data.length ?
          this.props.data.map((item, index) =>
            <ConsumptionCard key={item.id} {...item} onDelete={this.props.onDelete}/>
        )
        : <Row type='flex' justify='center' style={{fontSize: 18}}>Нет данных о расходах. Вы можете добавить их!</Row>
        }
      </Row>
    )
  }
}

CardList.defaultProps = {
  data: []
};

CardList.propTypes = {
  data: PropTypes.array
};

export default CardList;