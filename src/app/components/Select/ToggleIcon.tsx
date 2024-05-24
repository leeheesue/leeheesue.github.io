import { IconArrow } from '@/components/Icon';

const ToggleIcon = ({ open }: { open: boolean }) => (
  <IconArrow size={16} type="line" direction={open ? 'up' : 'down'} />
);

export default ToggleIcon;
