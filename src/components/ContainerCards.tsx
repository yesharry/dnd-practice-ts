import React from 'react';
import styled from 'styled-components';
import { Data, Status } from '../interfaces';
import CardItem from './CardItem';

interface Props {
  items: Data[];
  status: Status;
  isDragging: boolean;
  handleUpdateList: (id: number, status: Status) => void;
  handleDragging: (dragging: boolean) => void;
}

const ContainerCards = ({
  items = [],
  status,
  isDragging,
  handleDragging,
  handleUpdateList,
}: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = +e.dataTransfer.getData('text');
    handleUpdateList(id, status);
    handleDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  // The handleDragOver function will only do this.
  // First, it will receive the event that emits onDragOver.
  // Since by default data cannot be dropped on other elements
  // and to allow dropping we must avoid the default behavior.

  return (
    <ContainerDiv
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDrop={handleDrop}
      // onDrop
      // occur when the dragged element is dropped.
      // We pass it the **handleDrop* function, which we will create in a moment.
      onDragOver={handleDragOver}
      // onDragOver
      // occur when a draggable element is dragged over a valid drop target.
      // We pass it the **handleDragOver* function, which we will create in a moment.
    >
      <p>{status} hero</p>
      {items.map(
        item =>
          status === item.status && (
            <CardItem data={item} key={item.id} handleDragging={handleDragging} />
          )
      )}
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid black;
`;

export default ContainerCards;
