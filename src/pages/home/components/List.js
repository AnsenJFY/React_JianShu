import React, { PureComponent, Fragment } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionFunc } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { articleList, getMoreList, articlePage } = this.props;
    return (
      <Fragment>
        {articleList.map((item, index) => {
          return (
            <Link key={index} to={`/detail/${item.get('id')}`}>
              <ListItem key={index}>
                <img
                  className="list-img"
                  src={item.get('imgUrl')}
                  alt=""
                ></img>
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          )
        })}
        <LoadMore onClick={() => getMoreList(articlePage)}>更多文字</LoadMore>
      </Fragment>
    )
  }
}
const mapState = (state) => ({
  articleList: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionFunc.queryMoreList(page))
  }
})

export default connect(mapState, mapDispatch)(List);