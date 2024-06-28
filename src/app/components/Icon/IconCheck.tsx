export const IconCheck = ({ size = 12, color = '#ddd' }: { size?: number; color?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7704 3.04007C11.0732 3.33828 11.077 3.82552 10.7788 4.12835L5.53596 9.45257C5.14243 9.85222 4.49722 9.85011 4.10631 9.44789L1.21769 6.47566C0.921479 6.17087 0.928429 5.68366 1.23322 5.38745C1.538 5.09124 2.02521 5.09819 2.32142 5.40297L4.82596 7.98L9.68211 3.04845C9.98032 2.74562 10.4676 2.74186 10.7704 3.04007Z"
        fill={color}
      />
    </svg>
  );
};
