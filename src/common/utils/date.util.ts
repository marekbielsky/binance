import { subDays } from 'date-fns';

const ONE_DAY = 1;

export function now(): number {
  return new Date().getTime();
}

export function yesterday(): number {
  return subDays(now(), ONE_DAY).getTime();
}
