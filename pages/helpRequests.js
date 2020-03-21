import React from 'react';
import Head from 'next/head';
import { Button, Col, Pagination, Row } from 'antd';
import '../assets/index.less';
import MainLayout from '../layouts/MainLayout';

const HelpRequests = ( { requests }) => (
  <MainLayout>
    <div className="container">
      <Head>
        <title>Quarantine Hero - Requests</title>
      </Head>
      <main>

        <Pagination defaultCurrent={1} total={50} />
      </main>
    </div>
  </MainLayout>
);

HelpRequests.getInitialProps = async ctx => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json();
  const requests = [1,2,3,4];
  return {
    requests,
  }
};

export default HelpRequests;
