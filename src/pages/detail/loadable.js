import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./index.js'),
  loading() {
    return (
      <div>正在加载文件</div>
    )
  },
});

export default () => <LoadableComponent />;