import React, { ReactNode } from 'react';

type TabPanelProps = React.ComponentPropsWithoutRef<'div'> & {
  isActive: boolean;
  children: ReactNode;
};

const TabPanel = ({ isActive, children, className }: TabPanelProps) => {
  return isActive ? <div className={className}>{children}</div> : null;
};

export default TabPanel;
