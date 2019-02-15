import React, { Component } from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionFunc } from './store';
import { actionFunc as loginActionFunc } from '../../pages/login/store'
import {Link} from 'react-router-dom';
import {
  HeaderWrapper, Logo,
  Nav, NavItem,
  NavSearch, Addition,
  Button, SearchWrapper,
  SearchInfo, SearchInfoTitle,
  SearchInfoSwitch, SearchInfoItem,
  SearchInfoList
} from './style'

class Header extends Component {
  // 函数组件
  getListArea = () => {
    const { 
      focused, page, searchItemList,
      handleMouseEnter,handleMouseLeave,
      handleSearchChange,mouseIn,totalPage
    } = this.props;
    // 这里使用immutable的toJS方法依旧会报错，提示toJS is not a function
    // const newList = searchItemList.toJS(); // 把immutable类型的数据变成普通js对象
    const newList = JSON.parse(JSON.stringify(searchItemList)); // 临时被迫使用这种方式
    const pageList = [];
    if(newList.length){
      for (let i = page * 5; i < (page + 1) * 5 ;   i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={()=>{handleSearchChange(page,totalPage,this.spinIcon)}}
            >
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur,searchItemList,login } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          {
            login ? 
            <NavItem onClick={this.props.logout} className="right">退出</NavItem> : 
            <Link to='/login'>
              <NavItem className="right">登陆</NavItem>
            </Link>
          }
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
                onFocus={()=>handleInputFocus(searchItemList)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe614;</i>
            {this.getListArea()}
          </SearchWrapper>
          <Addition>
            <Link to="/write">
              <Button className="writing"><i className="iconfont">&#xe624;</i>写文章</Button>
            </Link>
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
    mouseIn:state.getIn(['header','mouseIn']),
    searchItemList: state.getIn(['header', 'searchItemList']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    login:state.getIn(['login','login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur() {
      dispatch(actionFunc.searchBlur())
    },
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionFunc.getSearchItem())
      dispatch(actionFunc.searchFocus())
    },
    handleMouseEnter() {
      dispatch(actionFunc.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionFunc.mouseLeave())
    },
    logout(){
      dispatch(loginActionFunc.logout())
    },
    handleSearchChange(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
      spin.style.transform = `rotate(${originAngle+360}deg)`;
      if(page < totalPage){
        dispatch(actionFunc.searchChange(++page))
      }else{
        dispatch(actionFunc.searchChange(0))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);