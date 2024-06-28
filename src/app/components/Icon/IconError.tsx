import { COLORS } from '@/shared/constants';

interface ErrorIconProps {
  service: 'tour' | 'ticket';
}

export const IconError = ({ service }: ErrorIconProps) => {
  const color = service === 'tour' ? COLORS.blue300 : COLORS.purple300;
  return (
    <svg width="161" height="121" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m53.302 26.956.004-.01c.099-.245.255-.477.457-.682.204-.207.434-.365.667-.463.263-.11.541-.172.835-.172h38.923l3.176 3.217 3.542 3.59 3.542 3.59 3.182 3.223v52.7c0 .305-.062.593-.173.863a2.123 2.123 0 0 1-.461.682 2.078 2.078 0 0 1-.667.463l.485 1.153-.485-1.153c-.262.11-.541.172-.834.172h-50.23c-.29 0-.564-.06-.823-.167a2.252 2.252 0 0 1-.679-.468 2.141 2.141 0 0 1-.46-.682 2.265 2.265 0 0 1-.173-.863V27.82c0-.305.062-.593.172-.863Z"
        fill="#fff"
        stroke="#CCC"
        strokeWidth="2.5"
      />
      <circle cx="79.38" cy="61.879" r="13" stroke={color} strokeWidth="3" />
      <path d="m88.88 53.379-18 18" stroke={color} strokeWidth="3" />
      <path d="M100.88 41.379h-9v-9" stroke="#CCC" strokeWidth="2.5" />
    </svg>
  );
};
