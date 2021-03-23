import {
    // Base,
  Affix,
  Anchor,
  AutoComplete,
  Alert,
  Avatar,
  BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Collapse,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
//   FormModel,
  Icon,
  Input,
  InputNumber,
  Layout,
  List,
  LocaleProvider,
  Menu,
  Mentions,
  Modal,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Row,
  Select,
  Slider,
  Spin,
  Statistic,
  Steps,
  Switch,
  Table,
  Transfer,
  Tree,
  TreeSelect,
  Tabs,
  Tag,
  TimePicker,
  Timeline,
  Tooltip,
  Upload,
  Drawer,
  Skeleton,
  Comment,
  // ColorPicker,
  ConfigProvider,
  Empty,
  Result,
  Descriptions,
  PageHeader,
  Space,
} from 'ant-design-vue'

const ant = {
    install(createApp: any) {
        createApp.component(Button.name, Button)
        createApp.component(Input.name, Input)
        createApp.component(Steps.name, Steps)
        createApp.component(Select.Option, Select.Option)
        createApp.component(Select.OptGroup, Select.OptGroup)
        createApp.component(Form.name, Form)
        createApp.component(Select.name, Select)
        createApp.component(Row.name, Row)
        createApp.component(Radio.name, Radio)
        createApp.component(DatePicker.name, DatePicker)
        createApp.component(Col.name, Col)
        createApp.component(Icon.name, Icon)
        createApp.component(Checkbox.name, Checkbox)
        createApp.component(Switch.name, Switch)
        // createApp.component(Switch.name, Switch)
        // 以后想引入什么就引入什么
    }
}
export default ant