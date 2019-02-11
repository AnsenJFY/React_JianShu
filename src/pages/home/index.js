import React, { PureComponent, Fragment } from 'react';
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Topic from './components/Topic'
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import { connect } from 'react-redux';
import { actionFunc } from './store';
import { BackTop } from './style'


class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render() {
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
              alt="swiper"
            ></img>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
          {
            this.props.showScroll && <BackTop  onClick={this.handleScrollTop}>顶部</BackTop>
          }
        </HomeWrapper>
      </Fragment>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents()
  }
  componentWillUnmount(){
    window.removeEventListener('scroll');
  }
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    dispatch(actionFunc.queryHomeData());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 300){
      dispatch(actionFunc.toggleScrollShow(true))
    }else{
      dispatch(actionFunc.toggleScrollShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home);