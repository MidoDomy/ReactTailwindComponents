import IRoute from "interfaces/route";

import HomePage from "pages/home";
import GridPage from "pages/grid";
import ButtonPage from "pages/button";
import ImagePage from "pages/image";
import InputPage from "pages/input";
import AlertPage from "pages/alert";
import CollapsePage from "pages/collapse";
import DropdownPage from "pages/dropdown";
import SliderPage from "pages/slider";
import ModalPage from "pages/modal";

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    exact: true
  },
  {
    path: '/grid',
    name: 'Grid',
    component: GridPage,
    exact: true
  },
  {
    path: '/button',
    name: 'Button',
    component: ButtonPage,
    exact: true
  },
  {
    path: '/image',
    name: 'Image',
    component: ImagePage,
    exact: true
  },
  {
    path: '/input',
    name: 'Input',
    component: InputPage,
    exact: true
  },
  {
    path: '/alert',
    name: 'Alert',
    component: AlertPage,
    exact: true
  },
  {
    path: '/collapse',
    name: 'Collapse',
    component: CollapsePage,
    exact: true
  },
  {
    path: '/dropdown',
    name: 'Dropdown',
    component: DropdownPage,
    exact: true
  },
  {
    path: '/slider',
    name: 'Slider',
    component: SliderPage,
    exact: true
  },
  {
    path: '/modal',
    name: 'Modal',
    component: ModalPage,
    exact: true
  }
]

export default routes;
