import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';

const Header = ({ user }) => {
  return (
    <div className="header">
      <div>
        <Row>
          <Col>
            
          </Col>
          <nav>
            <Row>
              {user && (
                <Col>
                  <Link href="/logout">
                    <a>
                      Logout
                    </a>
                  </Link>
                </Col>
              )}

            </Row>
          </nav>
        </Row>
      </div>
    </div>
  );
};

export default Header;
