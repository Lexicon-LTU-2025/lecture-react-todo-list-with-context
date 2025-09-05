import { createContext } from 'react';
import type { ITodo } from '../../todos';

export interface IFavoriteContext {
  favorites: ITodo[];
  add: (todo: ITodo) => void;
  remove: (todo: ITodo) => void;
  isFavorite: (todo: ITodo) => boolean;
}

export const IFavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);
