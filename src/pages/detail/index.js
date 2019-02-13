import React, { PureComponent } from 'react';
import { DetailWrapper,Header,Content } from './style';
import { connect } from 'react-redux';
import { actionFunc} from './store';

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>
          {this.props.title}
        </Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
      </DetailWrapper>
    )
  }
  componentDidMount(){
    this.props.getDetail();
  }
}
const mapState = (state) =>({
  title:state.getIn(['content','title']),
  content:state.getIn(['content','content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(){
    dispatch(actionFunc.getDetailContent())
  }
})

export default connect(mapState,mapDispatch)(Detail);