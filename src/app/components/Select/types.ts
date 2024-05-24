import { ReactNode } from 'react';

export type ThemeType = 'tour' | 'ticket';
export type OptionValueType = string | number | boolean;
export type OptionType<T> = { label: ReactNode; value: T };
