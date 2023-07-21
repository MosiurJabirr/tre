import React from 'react';
import { KanbanBoard } from './Board.styled';

type TBoard = {
  children?: JSX.Element|JSX.Element[];
}

export const Board: React.FC<TBoard> = ({ children }) => {
  return (
    <KanbanBoard>
      {children}
    </KanbanBoard>
  );
}