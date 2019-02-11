import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  width:960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  width:625px;
  margin-left:15px;
  padding-top:30px;
  float:left;
  .banner-img{
    width:625px;
    height:270px;
  }
`
export const HomeRight = styled.div`
  width:280px;
  float:right;
`

export const TopicWrapper = styled.div`
  overflow:hidden;
  padding: 20px 0 10px 0;
  margin-left:-18px;
  border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float:left;
  background:#f7f7f7;
  height:32px;
  line-height:32px;
  font-size:14px;
  color:#000;
  border:1px solid #dcdcdc;
  border-radius:4px;
  padding-right:10px;
  margin-left:18px; 
  margin-bottom:18px;
  .topic-pic{
    width:32px;
    height:32px;
    display:block;
    margin-right:10px;
    float:left;
  }
`

export const ListItem = styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .list-img{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float:left;
  .title{
    font-size:18px;
    line-height:27px;
    font-weight:bold;
    color:#333;
  }
  .desc{
    font-size:13px;
    line-height:24px;
    color: #999;
  }
`

// 推荐栏目
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
	background-image: url(${props => props.imgURL});
  background-size:contain;
`

// 推荐作者
export const WriterWrapper = styled.div`
  width:278px;
  border:1px solid #dcdcdc;
  border-radius:3px;
  height:300px;
  line-height:300px;
  text-align:center;
`
export const WriterItem = styled.div`
`

// 加载更多
export const LoadMore = styled.div`
  width:100%;
  height:40px; 
  margin: 30px 0;
  line-height:40px;
  text-align:center;
  background:#a5a5a5;
  border-radius:20px;
  color: #fff;
  cursor:pointer;
`

//回到顶部
export const BackTop = styled.div`
  position:fixed;
  bottom: 30px;
  right:100px;
  width:60px;
  height:60px;
  line-height:60px;
  text-align:center;
  border:1px solid #ccc;
  font-size:14px;
`