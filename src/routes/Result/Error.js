import React, { Fragment } from 'react';
import { Button, Icon, Card } from 'antd';
import Result from '../../components/Result';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const extra = (
  <Fragment>
    <div style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.85)', fontWeight: '500', marginBottom: 16 }}>
    The content you submitted has the following errors:
    </div>
    <div style={{ marginBottom: 16 }}>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />Your account has been frozen
      <a style={{ marginLeft: 16 }}>Recover immediately <Icon type="right" /></a>
    </div>
    <div>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />Your account is not eligible yet
      <a style={{ marginLeft: 16 }}>Upgrade immediately <Icon type="right" /></a>
    </div>
  </Fragment>
);

const actions = <Button type="primary">Return to edit</Button>;

export default () => (
  <PageHeaderLayout>
    <Card bordered={false}>
      <Result
        type="error"
        title="Submission Failed"
        description="Please check and modify the following information before resubmitting.。"
        extra={extra}
        actions={actions}
        style={{ marginTop: 48, marginBottom: 16 }}
      />
    </Card>
  </PageHeaderLayout>
);
