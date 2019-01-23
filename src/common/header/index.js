import React from 'react';
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionFunc} from './store';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button,SearchWrapper } from './style'

const Header = (props) =>{
    var i = 1;
    const {focused, handleInputFocus,handleInputBlur } = props
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
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
          </SearchWrapper>
          <Addition>
            <Button className="writing"><i className="iconfont">&#xe624;</i>写文章</Button>
            <Button className="reg">注册</Button>
          </Addition>
        </Nav>
      </HeaderWrapper>
    )
}
const mapStateToProps = (state) =>{
  return {
    focused:state.getIn(['header','focused'])
    // focused:state.get('header').get('focused')
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    handleInputBlur(){
      dispatch(actionFunc.searchBlur())
    },
    handleInputFocus(){
      dispatch(actionFunc.searchFocus())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);