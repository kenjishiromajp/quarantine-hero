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
        <Row justify="center" align="stretch" gutter={[16, 16]}>
          {requests.data.map((requestItem) => (
            <Col span={6} id={requestItem.id} key={requestItem.id} style={{height: "100%"}}>
              {
                <Request id={requestItem.id} name={requestItem.user.name} createdAt={requestItem.createdAt} description={requestItem.description}/>
              }
            </Col>
          )).slice(0,4)}
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
  const requests = {
    "data": [
      {
        "id": 1,
        "user": {
          "name": "Rodrigo",
          "facebookProfileURL": "afasdfasfas",
          "photoUrl": "",
          "location": {
            "suburb": "Spring Hill",
            "city": "Brisbane",
            "state": "QLD",
            "country": "Australia"
          }
        },
        "description": "I need a toilet paper",
        "status": "PENDING",
        "createdAt": "22/03/2020",
        "updatedAt": ""
      },
      {
        "id": 2,
        "user": {
          "name": "Giovanni",
          "facebookProfileURL": "afasdfasfas",
          "photoUrl": "",
          "location": {
            "suburb": "West End",
            "city": "Brisbane",
            "state": "QLD",
            "country": "Australia"
          }
        },
        "description": "I need bread",
        "status": "PENDING",
        "createdAt": "22/03/2020",
        "updatedAt": ""
      },
      {
        "id": 3,
        "user": {
          "name": "Giovanni",
          "facebookProfileURL": "afasdfasfas",
          "photoUrl": "",
          "location": {
            "suburb": "West End",
            "city": "Brisbane",
            "state": "QLD",
            "country": "Australia"
          }
        },
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "status": "PENDING",
        "createdAt": "22/03/2020",
        "updatedAt": ""
      },
      {
        "id": 4,
        "user": {
          "name": "Giovanni",
          "facebookProfileURL": "afasdfasfas",
          "photoUrl": "",
          "location": {
            "suburb": "West End",
            "city": "Brisbane",
            "state": "QLD",
            "country": "Australia"
          }
        },
        "description": "I need bred",
        "status": "PENDING",
        "createdAt": "22/03/2020",
        "updatedAt": ""
      },
      {
        "id": 5,
        "user": {
          "name": "Giovanni",
          "facebookProfileURL": "afasdfasfas",
          "photoUrl": "",
          "location": {
            "suburb": "West End",
            "city": "Brisbane",
            "state": "QLD",
            "country": "Australia"
          }
        },
        "description": "I need bred",
        "status": "PENDING",
        "createdAt": "22/03/2020",
        "updatedAt": ""
      },
      {
        "id": 6,
        "user": {
          "name": "Giovanni",
          "facebookProfileURL": "afasdfasfas",
          "photoUrl": "",
          "location": {
            "suburb": "West End",
            "city": "Brisbane",
            "state": "QLD",
            "country": "Australia"
          }
        },
        "description": "I need bred",
        "status": "PENDING",
        "createdAt": "22/03/2020",
        "updatedAt": ""
      }
    ],
    "_links": {
      "currentPage": 1,
      "total": 1
    }
  };
  return {
    requests,
  }
};

export default Home;
