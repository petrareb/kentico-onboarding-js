import * as generateUuidV4 from 'uuid/v4';
import { Guid } from './ownTypes';

export const generateGuid = (): Guid  => generateUuidV4();
