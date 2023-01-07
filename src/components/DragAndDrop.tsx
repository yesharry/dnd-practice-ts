import { useState } from 'react';
import styled from 'styled-components';
import { data } from '../assets';
import { Status } from '../interfaces';
import ContainerCards from './ContainerCards';

const typesHero: Status[] = ['good', 'normal', 'bad'];

const DragAndDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  // isDragging, it will have the value of the state.
  const [listItems, setListItems] = useState(data);

  const handleDragging = (dragging: boolean) => {
    setIsDragging(dragging);
  };
  // handleDragging, will be the function that we create to update the state.

  const handleUpdateList = (id: number, status: Status) => {
    let card = listItems.find(item => item.id === id);
    if (card && card.status !== status) {
      card.status = status;
      setListItems(prev => [card!, ...prev.filter(item => item.id !== id)]);
    }
  };

  return (
    <DndWrapper>
      {typesHero.map(container => (
        <ContainerCards
          status={container}
          key={container}
          items={data}
          isDragging={isDragging}
          handleDragging={handleDragging}
          handleUpdateList={handleUpdateList}
        />
      ))}
    </DndWrapper>
  );
};

const DndWrapper = styled.div`
  display: flex;
`;

export default DragAndDrop;
