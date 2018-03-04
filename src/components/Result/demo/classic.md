---
order: 1
title: Classic
---

典型结果页面。

````jsx
import Result from 'ant-design-pro/lib/Result';
import { Button, Row, Col, Icon, Steps } from 'antd';

const { Step } = Steps;

const desc1 = (
  <div style={{ fontSize: 14, position: 'relative', left: 38 }}>
    <div style={{ marginTop: 8, marginBottom: 4 }}>
      曲丽丽
      <Icon type="dingding-o" style={{ marginLeft: 8 }} />
    </div>
    <div style={{ marginTop: 8, marginBottom: 4 }}>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div style={{ fontSize: 14, position: 'relative', left: 38 }}>
    <div style={{ marginTop: 8, marginBottom: 4 }}>
      周毛毛
      <Icon type="dingding-o" style={{ color: '#00A0E9', marginLeft: 8 }} />
    </div>
    <div style={{ marginTop: 8, marginBottom: 4 }}><a href="">催一下</a></div>
  </div>
);

const extra = (
  <div>
    <div style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.85)', fontWeight: 500, marginBottom: 20 }}>
      项目名称
    </div>
    <Row style={{ marginBottom: 16 }}>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>项目 ID：</span>
        23421
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>负责人：</span>
        曲丽丽
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>生效时间：</span>
        2016-12-12 ~ 2017-12-12
      </Col>
    </Row>
    <Steps progressDot current={1}>
      <Step title="创建项目" description={desc1} />
      <Step title="部门初审" description={desc2} />
      <Step title="财务复核" />
      <Step title="完成" />
    </Steps>
  </div>
);

const actions = (
  <div>
    <Button type="primary">返回列表</Button>
    <Button>查看项目</Button>
    <Button>打 印</Button>
  </div>
);

ReactDOM.render(
  <Result
    type="success"
    title="Submitted successfully"
    description="
    The submission result page is used to feed back the processing results of a series of operation tasks. If it is a simple operation, you can use the Message Global Feedback prompt. This text area can show simple additions, and if there is a need for a similar document, the gray area below can present more complex content."
    extra={extra}
    actions={actions}
    style={{ width: '100%' }}
  />
, mountNode);
````
