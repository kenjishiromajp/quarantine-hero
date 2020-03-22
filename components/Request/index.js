import React from 'react';
import { Avatar, Button, Card, Col, Row } from 'antd';
const { Meta } = Card;

async function handleHelp({id, facebookProfileURL :profile}){
window.open(profile, "_blank");
}

const Request = ({ id, name, createdAt, description, facebookProfileURL }) => (

  <Card style={{height: "100%"}} flex="1">
    <Row gutter={[5, 5]} id={id} type="flex" flex="1">
      <Col flex="0">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Col>
      <Col>
        <Row><span className="ant-card-meta-title">{name}</span></Row>
        <Row><span className="ant-card-meta-description">{createdAt}</span></Row>
      </Col>
    </Row>
    <Row>
      <p>{description}</p>
    </Row>
    <Row justify="end" >
      <Col flex="0">
        <Button shape="round" color="primary" onClick={() => handleHelp({id, facebookProfileURL})} >Help this person</Button>
      </Col>
    </Row>
  </Card>
);

export default Request;
