import React from 'react';
import Header from '../../components/landing-page/header/header';
import Boxer from '../../components/landing-page/boxer/boxer';
import FootbalMan from '../../components/landing-page/footbalMan/footbalMan';
import TennisWoman from '../../components/landing-page/tennisWoman/tennisWoman';
import Motivation from '../../components/landing-page/motivation/motivation';
import JoinTeam from '../../components/landing-page/joinTeam/joinTeam';
import ReqestDetails from '../../components/landing-page/requestDetails/requestDetails';
import Footer from '../../components/landing-page/footer/footer';

const SalesPage: React.FC = () => {
  return (
    <div>
      <Header />
      <Boxer />
      <FootbalMan />
      <TennisWoman />
      <Motivation />
      <JoinTeam />
      <ReqestDetails />
      <Footer />
    </div>
  );
};

export default SalesPage;