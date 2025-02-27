import { ValidatorsType } from './Types';

export const required: ValidatorsType = (value) =>
  value || typeof value === 'number' ? undefined : 'Required';

export const maxLength = (max: number): ValidatorsType => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = (min: number): ValidatorsType => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const email: ValidatorsType = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;
