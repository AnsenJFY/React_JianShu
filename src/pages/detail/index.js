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
    this.props.getDetail(this.props.match.params.id);
  }
}
const mapState = (state) =>({
  title:state.getIn(['content','title']),
  content:state.getIn(['content','content'])
})

const mapDispatch = (dispatch) => ({
  getDetail(id){
    dispatch(actionFunc.getDetailContent(id))
  }
})

export default connect(mapState,mapDispatch)(Detail);