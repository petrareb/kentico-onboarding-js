import { Record } from 'immutable';

export function baseItem<T>(defaultValues: T, name: string): any {
  class BaseItem extends Record(defaultValues, name) {
    constructor(props: Partial<T>) {
      super(props);
    }

    with = (entity: Partial<T>) =>
      this.merge(entity) as any;
  }

  return BaseItem;
}
