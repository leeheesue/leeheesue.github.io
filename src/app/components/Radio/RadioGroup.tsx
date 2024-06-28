import React, { ComponentPropsWithoutRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { pixelToRem } from '../../shared/utils';

import type { RadioProps } from './Radio';

type OmitRadioProps = Omit<RadioProps, 'onChange'>;

export interface RadioGroupProps<T> extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  children: React.ReactElement<OmitRadioProps> | React.ReactElement<OmitRadioProps>[];
  value?: T;
  direction?: 'column' | 'row';
  gap?: number;
  onChange?: (value: T) => void;
}

const RadioGroup = <T extends string>({
  children,
  value,
  direction = 'column',
  gap = 16,
  onChange,
  ...props
}: RadioGroupProps<T>) => {
  const childArray = Array.isArray(children) ? children : [children];
  const keyArray = Array.from({ length: childArray.length }).map((_, index) => index);

  const isValueSelected = (targetValue: T) => value === targetValue;

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    onChange(e.target.value as T);
  };

  return (
    <RadioGroupContaner as="ul" direction={direction} gap={gap} {...props}>
      {childArray.map((child, index) => {
        return (
          <li key={keyArray[index]} className="radioOption">
            {React.createElement(child.type, {
              ...{
                ...child.props,
                checked: child.props.checked ?? isValueSelected(child.props.value as T),
                children: child.props.children ?? child.props.value,
                onChange: handleChangeValue,
              },
            })}
          </li>
        );
      })}
    </RadioGroupContaner>
  );
};

export default RadioGroup;

const rowStyle = (gap: number) => css`
  display: flex;
  align-items: center;

  .radioOption + .radioOption {
    margin-left: ${pixelToRem(gap)};
  }
`;

const columnStyle = (gap: number) => css`
  .radioOption + .radioOption {
    margin-top: ${pixelToRem(gap)};
  }
`;

const RadioGroupContaner = styled.div<{ direction: 'column' | 'row'; gap: number }>`
  ${({ direction, gap }) => (direction === 'row' ? rowStyle(gap) : columnStyle(gap))}
`;
