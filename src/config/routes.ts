import IRoute from "interfaces/route";

import HomePage from "pages/home";
import GridPage from "pages/grid";
import ButtonPage from "pages/button";
import ImagePage from "pages/image";
import FormPage from "pages/form/form";
import LabelPage from "pages/form/label";
import InputPage from "pages/form/input";
import GroupPage from "pages/form/group";
import SelectPage from "pages/form/select";
import TextareaPage from "pages/form/textarea";
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
    path: '/form',
    name: 'Form',
    component: FormPage,
    exact: true
  },
  {
    path: '/label',
    name: 'Label',
    component: LabelPage,
    exact: true
  },
  {
    path: '/input',
    name: 'Input',
    component: InputPage,
    exact: true
  },
  {
    path: '/group',
    name: 'Group',
    component: GroupPage,
    exact: true
  },
  {
    path: '/select',
    name: 'Select',
    component: SelectPage,
    exact: true
  },
  {
    path: '/textarea',
    name: 'Textarea',
    component: TextareaPage,
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
