import React, {FunctionComponent} from 'react';
import Alert from 'antd/lib/alert';
import AutoComplete from 'antd/lib/auto-complete';
import Badge from 'antd/lib/badge';
import Button from 'antd/lib/button';
import Checkbox from 'antd/lib/checkbox';
import Divider from 'antd/lib/divider';
import Drawer from 'antd/lib/drawer';
import Dropdown from 'antd/lib/dropdown';
import Empty from 'antd/lib/empty';
import Input from 'antd/lib/input';
import InputNumber from 'antd/lib/input-number';
import Layout from 'antd/lib/layout';
import List from 'antd/lib/list';
import Mentions from 'antd/lib/mentions';
import Menu from 'antd/lib/menu';
import Modal from 'antd/lib/modal';
import notification from 'antd/lib/notification';
import Popconfirm from 'antd/lib/popconfirm';
import Popover from 'antd/lib/popover';
import Radio from 'antd/lib/radio';
import Result from 'antd/lib/result';
import Select from 'antd/lib/select';
import Spin from 'antd/lib/spin';
import Statistic from 'antd/lib/statistic';
import Switch from 'antd/lib/switch';
import Table from 'antd/lib/table';
import Tabs from 'antd/lib/tabs';
import Tag from 'antd/lib/tag';
import Tooltip from 'antd/lib/tooltip';
import Typography from 'antd/lib/typography';
import Upload from 'antd/lib/upload';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {prism as syntaxHighlightingLanguage} from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
  blue,
  green,
  red,
  volcano,
  orange,
  gold,
  purple,
  magenta,
  grey,
} from '@ant-design/colors';

import {Box, BoxProps, Flex, SxProp} from 'theme-ui';
import DatePicker from './DatePicker';
import MarkdownRenderer from './MarkdownRenderer';
import {ConfigProvider} from 'antd';

export type {UploadChangeParam} from 'antd/lib/upload';
export type {UploadFile} from 'antd/lib/upload/interface';

const {Title: AntdTitle, Text, Paragraph} = Typography;

// override title with styled version
const Title = (props: any) => (
  <ConfigProvider
    theme={{
      token: {
        colorText: colors.text,
      },
    }}
  >
    <AntdTitle
      {...props}
      style={{
        color: colors.text,
        ...props.style,
      }}
    />
  </ConfigProvider>
);

const {Header, Content, Footer, Sider} = Layout;
const {RangePicker} = DatePicker;

export const colors = {
  white: '#fff',
  black: '#000',
  primaryAccent: '#2563eb', // tailwind blue-600
  green: green[5],
  red: red[5],
  gold: gold[5],
  volcano: volcano[5],
  orange: orange[5],
  purple: purple[5],
  magenta: magenta[5],
  blue: blue, // expose all blues
  gray: grey, // expose all grays
  text: 'rgb(248, 250, 252)',
  // secondary: 'rgb(203, 213, 225)',
  note: '#fff1b8',
  noteSecondary: gold[5],

  bg: 'hsl(var(--background))',

  primary: 'hsl(var(--primary))',
  primaryForeground: 'hsl(var(--primary-foreground))',
  secondary: 'hsl(var(--secondary))',
  secondaryForeground: 'hsl(var(--secondary-foreground))',

  slate50: '#f9fafb',
  slate100: '#f4f5f7',
  slate200: '#e5e7eb',
  slate300: '#d2d6dc',
  slate400: '#9fa6b2',
  slate500: '#6b7280',
  slate600: '#4b5563',
  slate700: '#374151',
  slate800: '#252f3f',
  slate900: '#161e2e',

  brand3: 'rgba(226, 240, 253, 0.08)',
  brand6: 'rgba(223,239,254,.139)',
};

export const shadows = {
  primary:
    '0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  small: '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  medium:
    '0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  large:
    '0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
};

export const StandardSyntaxHighlighter: FunctionComponent<{
  language: string;
  style?: any;
}> = ({language, children, style = {}}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={syntaxHighlightingLanguage}
      customStyle={style}
    >
      {children}
    </SyntaxHighlighter>
  );
};

export const Card = ({
  children,
  shadow = false,
  sx = {},
  ...props
}: {
  children: any;
  shadow?: boolean | 'small' | 'medium' | 'large';
  sx?: any;
} & BoxProps) => {
  const shadowKey = shadow && typeof shadow === 'boolean' ? 'primary' : shadow;

  // @ts-ignore
  const boxShadow = shadowKey ? shadows[shadowKey] || shadows.primary : 'none';

  return (
    <Box
      sx={{
        bg: colors.bg,
        color: colors.slate200,
        border: `1px solid ${colors.brand6}`,
        borderRadius: 4,
        boxShadow,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export const Container = ({
  children,
  sx = {},
}: {
  children: any;
  sx?: SxProp;
}) => {
  return (
    <Flex
      sx={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box p={4} sx={{flex: 1, width: '100%', maxWidth: 1080, ...sx}}>
        {children}
      </Box>
    </Flex>
  );
};

export const TextArea = Input.TextArea;

/**
 * Whitelist node types that we allow when we render markdown.
 * Reference https://github.com/rexxars/react-markdown#node-types
 */
export const allowedNodeTypes: Array<any> = [
  'root',
  'text',
  'break',
  'paragraph',
  'emphasis',
  'strong',
  'blockquote',
  'delete',
  'link',
  'linkReference',
  'list',
  'listItem',
  'heading',
  'inlineCode',
  'code',
  'image',
];

export {
  // Typography
  Title,
  Text,
  Paragraph,
  // Layout
  Content,
  Footer,
  Layout,
  Header,
  Sider,
  // Components
  Alert,
  AutoComplete,
  Badge,
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Input,
  InputNumber,
  List,
  MarkdownRenderer,
  Mentions,
  Menu,
  Modal,
  notification,
  Popconfirm,
  Popover,
  Radio,
  RangePicker,
  Result,
  Select,
  Switch,
  Spin,
  Statistic,
  Table,
  Tabs,
  Tag,
  Tooltip,
  Upload,
};
