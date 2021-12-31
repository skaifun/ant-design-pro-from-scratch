import {PageContainer} from '@ant-design/pro-layout';
import {Alert, Card} from 'antd';
import React from 'react';

const Welcome: React.FC = () => {
  return (
    <PageContainer>
      <Card>
        <Alert type='success' message='Welcome'/>
      </Card>
    </PageContainer>
  )
}

export default Welcome;
