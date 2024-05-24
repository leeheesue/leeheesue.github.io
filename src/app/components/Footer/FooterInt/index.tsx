import DesktopFooter from './DesktopFooter';
import { Footer } from '../MediaQuery';
import MobileFooter from '../MobileFooter';

const FooterInterpark = () => {
  return (
    <Footer>
      <DesktopFooter className="desktopFooter" />
      <MobileFooter className="mobileFooter" />
    </Footer>
  );
};

export default FooterInterpark;
