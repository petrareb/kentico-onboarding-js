import { Record } from 'immutable';

export function baseItem<T>(defaultValues: T, name: string): any {
  class BaseItem extends Record(defaultValues, name) {
    constructor(props: Partial<T>) {
      super(props);
    }

    with = (item: Partial<T>) =>
      this.merge(item) as any;
  }

  return BaseItem;
}
