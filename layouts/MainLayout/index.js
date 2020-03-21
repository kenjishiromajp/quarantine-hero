import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const MainLayout = ({ backgroundImage, children, topNav, bottomNav, user }) => {
  return (
    <div className="main-layout layout">
      <Header links={topNav} user={user} />
      <main>{children}</main>
      <Footer links={bottomNav} />
    </div>
  );
};

export default MainLayout;
