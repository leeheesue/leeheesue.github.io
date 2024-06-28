import DesktopFooterInt from './DesktopFooter';
import { Footer } from '../MediaQuery';
import MobileFooter from '../MobileFooter';

const FooterIntWithCommerce = () => {
  return (
    <Footer>
      <DesktopFooterInt className="desktopFooter" />
      <MobileFooter className="mobileFooter" isWithCommerce />
    </Footer>
  );
};

export default FooterIntWithCommerce;
