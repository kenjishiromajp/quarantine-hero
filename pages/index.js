import React from 'react';
import Head from 'next/head';
import { Button, Col, Row } from 'antd';
import '../assets/index.less';
import Request from '../components/Request';
import Link from 'next/link';

const Home = ({ requests }) => (
  <div className="container">
    <Head>
      <title>Quarantine Hero</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <section className="main full-width">
        <div className="orange-background">
          <h1 className="text-center title">
            <span className="text-orange">Do you</span> need something<span className="text-orange">during the</span> quarantine period?
          </h1>
          <h2 className="text-center title"><span className="text-orange">You can ask for helpto</span> quarantine heroes!</h2>
        </div>
        <div className="white-background">
          <p className="subtitle text-center">
            Website to help people who are vulnerable to the virus that cannot go out because of quarantine, you can pick up one or more help posted or you can ask for help in simple stuffs
          </p>
          <Row justify="center" align="center" gutter={[16, 16]} >
            <Col flex="0">
              <Button size="large" shape="round" >Someone needs a quarantine hero</Button>
            </Col>
            <Col flex="0">
              <Button size="large" shape="round" type="primary">I want to be a quarantine hero</Button>
            </Col>
          </Row>
        </div>
      </section>
      <section className="centralize">
        <p className="text-center">
          During this time of quarantine, there are some people who are more likely to contract the virus and will be more affected by the symptoms.
        </p>
        <p className="text-center">
          So even simple tasks such as walking around with a dog or buying groceries, or transporting the children can be a problem for them.
        </p>
      </section>

      <section className="gray-1-background">
          <Row justify="center" align="center" gutter={[16,16]}>
            {requests.map((request) => (
              <Col span={6}>
                <Request />
              </Col>
              ) )}
          </Row>
          <Row justify="center" align="center">
            <Col flex="0">
              <Button shape="round" size="large">
                <Link href="/helpRequests">Browse all the tasks</Link>
              </Button>
            </Col>
          </Row>
      </section>
    </main>
  </div>
);

Home.getInitialProps = async ctx => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json();
  const requests = [1,2,3,4];
  return {
    requests,
  }
};

export default Home;
