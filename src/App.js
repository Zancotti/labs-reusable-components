import React from 'react';

import img from 'img/magic-pattern.png';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div>
      <Header title='Get ready for adventure!' backgroundColor='#282627' />
      <Card
        title='The beginning of everything.'
        image={img}
        date='JANUARY 2022'
        number='01'
      />
      <Footer
        links={['About', 'Careers', 'Pricing', 'Feedback', 'Roadmap']}
        color='#282627'
      />
    </div>
  );
};
