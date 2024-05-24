import { useEffect, ReactNode, RefObject, useRef } from 'react';
import { createPortal } from 'react-dom';

import useMounted from '@/shared/hooks/useMounted';

interface PortalProps {
  children: ReactNode;
  containerRef?: RefObject<HTMLElement>;
  portalId?: string;
}

export const DEFAULT_PORTAL_ID = 'intr-portal';

const Portal = ({ children, containerRef, portalId = DEFAULT_PORTAL_ID }: PortalProps) => {
  const isMounted = useMounted();
  const savedScrollTop = useRef<number>();

  const createRootElement = () => {
    if (containerRef?.current) return containerRef.current;
    if (document.getElementById(portalId)) return document.getElementById(portalId) as HTMLElement;

    const rootElement = document.createElement('div');
    rootElement.setAttribute('id', portalId);
    document.body.append(rootElement);
    return rootElement;
  };

  const getRootElement = () => {
    const element = createRootElement();
    element.setAttribute('class', 'portal-container');
    return element;
  };

  useEffect(() => {
    if (!isMounted) return undefined;
    const currentPortal = document.getElementById(portalId);
    if (!currentPortal?.childElementCount) return undefined;

    if (!savedScrollTop.current) {
      const windowTop = document.documentElement.scrollTop;
      savedScrollTop.current = windowTop;
    }

    if (savedScrollTop.current) {
      document.body.style.top = `-${savedScrollTop.current}px`;
      document.body.style.position = 'fixed';
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (savedScrollTop.current) {
        document.body.style.removeProperty('top');
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('overflow');

        window.scrollTo({ top: savedScrollTop.current, behavior: 'auto' });
        savedScrollTop.current = undefined;
      }
      if (!currentPortal?.childElementCount) {
        currentPortal.remove();
      }
    };
  }, [isMounted, portalId]);

  if (!isMounted) return null;

  return <>{createPortal(children, getRootElement())}</>;
};

export default Portal;
