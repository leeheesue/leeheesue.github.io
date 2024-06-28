import React, { ComponentPropsWithoutRef } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { pixelToRem } from '../../shared/utils';

import type { CheckboxProps } from './Checkbox';

type OmitCheckboxProps = Omit<CheckboxProps, 'onChange'>;

export interface CheckboxGroupProps<T> extends Omit<ComponentPropsWithoutRef<'div'>, 'onChange'> {
  children: React.ReactElement<OmitCheckboxProps> | React.ReactElement<OmitCheckboxProps>[];
  values: T[];
  direction?: 'column' | 'row';
  gap?: number;
  onChange?: (value: T) => void;
}

const CheckboxGroup = <T extends string>({
  children,
  values,
  direction = 'column',
  gap = 16,
  onChange,
  ...props
}: CheckboxGroupProps<T>) => {
  const childArray = Array.isArray(children) ? children : [children];
  const keyArray = Array.from({ length: childArray.length }).map((_, index) => index);

  const isChecked = (targetValue?: T) => values.some(value => value === targetValue);

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;

    onChange(e.target.value as T);
  };

  return (
    <CheckboxGroupContainer as="ul" direction={direction} gap={gap} {...props}>
      {childArray.map((child, index) => {
        return (
          <li key={keyArray[index]} className="checkboxOption">
            {React.createElement(child.type, {
              ...{
                ...child.props,
                checked: isChecked(child.props.value as T),
                children: child.props.children ?? child.props.value,
                onChange: handleChangeValue,
              },
            })}
          </li>
        );
      })}
    </CheckboxGroupContainer>
  );
};

export default CheckboxGroup;

const rowStyle = (gap: number) => css`
  display: flex;
  align-items: center;

  .checkboxOption + .checkboxOption {
    margin-left: ${pixelToRem(gap)};
  }
`;

const columnStyle = (gap: number) => css`
  .checkboxOption + .checkboxOption {
    margin-top: ${pixelToRem(gap)};
  }
`;

const CheckboxGroupContainer = styled.div<{ direction: 'column' | 'row'; gap: number }>`
  ${({ direction, gap }) => (direction === 'row' ? rowStyle(gap) : columnStyle(gap))}
`;
