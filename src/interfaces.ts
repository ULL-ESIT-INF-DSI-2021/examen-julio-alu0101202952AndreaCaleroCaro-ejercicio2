import {Products} from './products';

/**
 * El producto se pedirá por el nombre el id único
 */
export type RequestType = {
  type: 'create' | 'update' | 'remove' | 'read' ;
  name: string;
  id?: string|number;
}

export type ResponseType = {
  type: 'add' | 'update' | 'remove' | 'read';
  success: boolean;
  product?: Products[];
  
}
