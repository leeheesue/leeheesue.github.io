import { COLORS } from '@/shared/constants';

interface IconShareProps {
  size?: number;
  color?: string;
}

export const IconShare = ({ size = 24, color = COLORS.gray900 }: IconShareProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.59961 14.2197V18.9256C3.59961 19.4873 3.82086 20.0259 4.21469 20.423C4.60851 20.8202 5.14265 21.0433 5.69961 21.0433H18.2996C18.8566 21.0433 19.3907 20.8202 19.7845 20.423C20.1784 20.0259 20.3996 19.4872 20.3996 18.9256V14.2197M12.043 14.9565V2.95654M12.043 2.95654L7.24297 7.54169M12.043 2.95654L16.8429 7.54169"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
