import type {Settings as LayoutSettings} from '@ant-design/pro-layout';
import type {RunTimeLayoutConfig} from 'umi';
import RightContent from "@/components/RightContent";
import Footer from '@/components/Footer';

export const initialStateConfig = {
  loading: <div>Loading...</div>,
}

type InitialState = {
  settings?: Partial<LayoutSettings>;
}

// https://umijs.org/zh-CN/plugins/plugin-initial-state
export async function getInitialState(): Promise<InitialState> {
  return {
    settings: {}
  }
}

export const layout: RunTimeLayoutConfig = ({initialState}) => {
  return {
    rightContentRender: () => <RightContent/>,
    disableContentMargin: false,
    waterMarkProps: {},
    footerRender: () => <Footer/>,
    onPageChange: () => {
      console.log("page changed");
    },
    links: [],
    menuHeaderRender: undefined,
    ...initialState?.settings,
  }
}
