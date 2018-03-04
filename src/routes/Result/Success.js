import React, { Fragment } from 'react';
import { Button, Row, Col, Icon, Steps, Card } from 'antd';
import Result from '../../components/Result';
import PageHeaderLayout from '../../layouts/PageHeaderLayout';

const { Step } = Steps;
const desc1 = (
  <div style={{ fontSize: 14, position: 'relative', left: 38 }}>
    <div style={{ marginTop: 8, marginBottom: 4 }}>
      Qu Lili
      <Icon type="dingding-o" style={{ marginLeft: 8 }} />
    </div>
    <div style={{ marginTop: 8, marginBottom: 4 }}>2016-12-12 12:32</div>
  </div>
);

const desc2 = (
  <div style={{ fontSize: 14, position: 'relative', left: 38 }}>
    <div style={{ marginTop: 8, marginBottom: 4 }}>
       Mungi li
      <Icon type="dingding-o" style={{ color: '#00A0E9', marginLeft: 8 }} />
    </div>
    <div style={{ marginTop: 8, marginBottom: 4 }}><a href="">Urging</a></div>
  </div>
);

const extra = (
  <Fragment>
    <div style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.85)', fontWeight: 500, marginBottom: 20 }}>
      Project Name
    </div>
    <Row style={{ marginBottom: 16 }}>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>Project ID：</span>
        23421
      </Col>
      <Col xs={24} sm={12} md={12} lg={12} xl={6}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>Principal: </span>
        Ziluli
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12}>
        <span style={{ color: 'rgba(0, 0, 0, 0.85)' }}>Effective time: </span>
        2016-12-12 ~ 2017-12-12
      </Col>
    </Row>
    <Steps progressDot current={1}>
      <Step title="Create Project" description={desc1} />
      <Step title="Department first instance" description={desc2} />
      <Step title="Financial Review" />
      <Step title="Finished" />
    </Steps>
  </Fragment>
);

const actions = (
  <div>
    <Button type="primary"> Return list </Button>
    <Button> View Item </Button>
    <Button> Print </Button>
  </div>
);

export default () => (
  <PageHeaderLayout>
    <Card bordered={false}>
      <Result
        type="success"
        title="Submitted successfully"
        description="The submission result page is used to feed back the processing results of a series of operation tasks. If it is a simple operation, you can use the Message Global Feedback prompt. This text area can show simple additions, and if there is a need for a similar document, the gray area below can present more complex content."
        extra={extra}
        actions={actions}
        style={{ marginTop: 48, marginBottom: 16 }}
      />
    </Card>
  </PageHeaderLayout>
);
