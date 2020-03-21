import React from 'react';
import { Avatar, Button, Card, Col, Row } from 'antd';
const { Meta } = Card;

const Request = () => (
  <Card>
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Username"
      description="11/12/2013"
    />
    <div>
      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magni, quia! Animi architecto
          beatae doloribus esse, ex iusto neque obcaecati sed sint vitae?
          Facere illo inventore labore molestiae sapiente temporibus?
      </p>
    </div>
    <Button shape="round" color="primary" >Help this person</Button>
  </Card>
);

export default Request;
