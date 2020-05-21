import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Index: React.FC<Props> = ({children}) => {
  return (
    <header>
      <div>test</div>
      {React.Children.map(children, item => {
        return item;
      })}
    </header>
  );
};

export default Index;
