import React, {Component} from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionFunc } from './store';
import {
  HeaderWrapper, Logo,
  Nav, NavItem,
  NavSearch, Addition, 
  Button, SearchWrapper, 
  SearchInfo, SearchInfoTitle,
  SearchInfoSwitch, SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component{
  // 函数组件
  getListArea = () =>{
    if(this.props.focused){
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              this.props.searchItemList.map((item,index)=>{
                return (
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                )
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    }else{
      return null
    }
  }
  render(){
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={this.props.focused ? 'focused' : ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Button className="writing"><i className="iconfont">&#xe624;</i>写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    searchItemList:state.getIn(['header', 'searchItemList'])
    // focused:state.get('header').get('focused')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur() {
      dispatch(actionFunc.searchBlur())
    },
    handleInputFocus() {
      dispatch(actionFunc.getSearchItem())
      dispatch(actionFunc.searchFocus())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);