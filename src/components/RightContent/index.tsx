import {Space} from "antd";
import {useModel, SelectLang} from 'umi';
import React from "react";
import styles from './index.less';

const GlobalHeaderRight: React.FC = () => {
  const {initialState} = useModel('@@initialState');
  if (!initialState || !initialState.settings) {
    return null;
  }
  const {navTheme, layout} = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }

  return (
    <Space>
      <SelectLang className={styles.action}/>
      <span className={className}>用户名</span>
    </Space>
  )
}

export default GlobalHeaderRight;
