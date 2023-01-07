import React from 'react';
import { Data } from '../interfaces';

interface Props {
  data: Data;
  handleDragging: (dragging: boolean) => void;
}

const CardItem = ({ data, handleDragging }: Props) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', `${data.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => {
    handleDragging(false);
  };

  return (
    <div draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {/* When onDragEnd is executed, the card will no longer be dragged, 
          so we have to remove the styles when dragging, 
          that is, return all the styles as at the beginning. */}
      {/* Then we add the OnDragStart attribute (it is executed when the component starts dragging,
          if we did not add the draggable attribute, then onDragStart would not be executed).
          onDragStart will execute the handleDragStart function. */}
      <p>{data.content}</p>
    </div>
  );
};

export default CardItem;
