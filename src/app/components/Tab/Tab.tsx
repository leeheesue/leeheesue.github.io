import React from 'react';

import styled from '@emotion/styled';

type TabProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode;
};

const Tab = ({ children, className }: TabProps) => {
  return (
    <TabContainer className={className}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child);
        }
        return null;
      })}
    </TabContainer>
  );
};

export default Tab;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
