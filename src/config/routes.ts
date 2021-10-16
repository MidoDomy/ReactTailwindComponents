import IRoute from "interfaces/route";

import HomePage from "pages/home";
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
    name: 'Home page',
    component: HomePage,
    exact: true
  },
  {
    path: '/button',
    name: 'Button page',
    component: ButtonPage,
    exact: true
  },
  {
    path: '/image',
    name: 'Image page',
    component: ImagePage,
    exact: true
  },
  {
    path: '/input',
    name: 'Input page',
    component: InputPage,
    exact: true
  },
  {
    path: '/alert',
    name: 'Alert page',
    component: AlertPage,
    exact: true
  },
  {
    path: '/collapse',
    name: 'Collapse page',
    component: CollapsePage,
    exact: true
  },
  {
    path: '/dropdown',
    name: 'Dropdown page',
    component: DropdownPage,
    exact: true
  },
  {
    path: '/slider',
    name: 'Slider page',
    component: SliderPage,
    exact: true
  },
  {
    path: '/modal',
    name: 'Modal page',
    component: ModalPage,
    exact: true
  }
]

export default routes;
