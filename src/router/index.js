import Home from '../pages/home';
import Detail from '../pages/detail'

export const Router = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/detail",
    exact: true,
    component: Detail
  }
]