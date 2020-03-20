import Head from 'next/head';
import { Button, Col, Row } from 'antd';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <section className="main orange">
        <Row justify="center" align="center">
          <Col span={24}>
            <h1>
              <span className="text-orange">Do you</span> need something<span className="text-orange">during the</span> quarantine period?
            </h1>
            <h2><span className="text-orange">You can ask for helpto</span> quarantine heroes!</h2>
          </Col>
          <p>
            Website to help people who are vulnerable to the virus that cannot go out because of quarantine, you can pick up one or more help posted or you can ask for help in simple stuffs
          </p>
        </Row>
        <Row justify="center" align="center">
          <Button>I need a quarantine hero</Button>
          <Button>I want to be a quarantine hero</Button>
        </Row>
      </section>

      <section>
        <p>
          During this time of quarantine, there are some people who are more likely to contract the virus and will be more affected by the symptoms.
        </p>
        <p>
          So even simple tasks such as walking around with a dog or buying groceries, or transporting the children can be a problem for them.
        </p>
      </section>
    </main>
  </div>
);

export default Home;
