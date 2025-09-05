import { createContext } from 'react';
import type { ITodo } from '../../todos';

export interface IFavoriteContext {
  favorites: ITodo[];
  add: (todo: ITodo) => void;
  remove: (todo: ITodo) => void;
  checkIfFavorite: (todo: ITodo) => boolean;
}

export const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);
