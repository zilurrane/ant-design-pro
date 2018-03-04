---
order: 2
title: Failed
---

Submission Failed。

````jsx
import Result from 'ant-design-pro/lib/Result';
import { Button, Icon } from 'antd';

const extra = (
  <div>
    <div style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.85)', fontWeight: 500, marginBottom: 16 }}>
      The content you submitted has the following error:
    </div>
    <div style={{ marginBottom: 16 }}>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />Your account has been frozen
      <a style={{ marginLeft: 16 }}>Recover immediately <Icon type="right" /></a>
    </div>
    <div>
      <Icon style={{ color: '#f5222d', marginRight: 8 }} type="close-circle-o" />Your account is not eligible yet
      <a style={{ marginLeft: 16 }}>Upgrade immediately <Icon type="right" /></a>
    </div>
  </div>
);

const actions = <Button type="primary">Return to edit</Button>;

ReactDOM.render(
  <Result
    type="error"
    title="Submission Failed"
    description="Please check and modify the following information before resubmitting."
    extra={extra}
    actions={actions}
  />
, mountNode);
````
