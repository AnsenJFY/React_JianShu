import React, { PureComponent } from 'react';
import { WriterWrapper, WriterItem } from '../style';
import { connect } from 'react-redux';

class Writer extends PureComponent {
  render() {
    return (
      <WriterWrapper>
        <WriterItem>Demo</WriterItem>
      </WriterWrapper>
    )
  }
}
const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Writer);