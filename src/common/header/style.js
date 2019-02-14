import styled from 'styled-components';
import logoPic from '../../statics/images/logo.png'

export const HeaderWrapper = styled.div`
  position:relative;
  height:58px;
  border-bottom:1px solid #f0f0f0;
  z-index: 1;
`

export const Logo = styled.div`
  position:absolute;
  height:58px;
  top:0;
  left:0;
  width:100px;
  display:block;
  background:url(${logoPic}); 
  background-size:contain;
`

export const Nav = styled.div`
  width:960px;
  margin:0 auto;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
`

export const NavItem = styled.div`
  line-height:58px;
  padding:0 15px;
  font-size:17px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    height:38px;
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`

export const SearchWrapper = styled.div`
  float:left;
  position:relative;
  .zoom{
    position:absolute;
    right:5px;
    bottom: 5px;
    width: 30px;
    line-height:30px;
    border-radius:50%;
    text-align:center;
    &.focused{
      background:#777;
      color:#fff;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  margin-top:9px;
  margin-left:20px;
  padding:0 30px 0 20px ;
  box-sizing:border-box;
  width:160px;
  height:38px;
  border:none;
  outline:none;
  color: #666;
  border-radius:19px;
  background:#eee;
  font-size:14px;
  &::placeholder{
    color:#999;
  }
  &.focused{
    width:240px;
  }
  &.slide-enter{
    transition: all .2s ease-out;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-enter-active{
    width:240px;
  }
  &.slide-exit-active{
    width:160px;
  }
`

export const SearchInfo = styled.div`
  position:absolute;
  margin-left:20px;
  left:0;
  top:58px;
  width:210px;
  padding:0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background:#fff;
`

export const SearchInfoTitle = styled.div`
  margin:20px 0 15px 0;
  line-height:20px;
  font-size:14px;
  color:#969696;
`

export const SearchInfoSwitch = styled.span`
  font-size:13px;
  float:right;
  .spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition: all .2s ease-in;
    transform-origin:center center;
  }
`
export const SearchInfoList = styled.div`
  overflow:hidden;
`

export const SearchInfoItem = styled.a`
  display:block;
  float:left; 
  font-size:12px;
  padding:0 5px;
  line-height:20px;
  border:1px solid #ddd;
  color:#787878;
  border-radius:3px;
  margin:0px 10px 10px 0;
`

export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:58px;
`

export const Button = styled.div`
  float:right;
  line-height:38px;
  border-radius:19px;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  border:1px solid #ec6149;
  font-size:14px;
  &.reg{
    color:#ec6149
  }
  &.writing{
    color:#fff;
    background:#ec6149
  }
`