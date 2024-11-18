import { subDays } from 'date-fns';

export const NOW = new Date().getTime();
const ONE_DAY = 1;

export function yesterday(): number {
  return subDays(NOW, ONE_DAY).getTime();
}
