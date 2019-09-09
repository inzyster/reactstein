import React from 'react';

export interface IColumnProps {
  widthFrac: number;
  height: number;
  color: string;
}

const Column: React.FC<IColumnProps> = props => {
  return (
    <div
      className="column"
      style={{
        flexBasis: `calc(${props.widthFrac} * 100%)`,
        height: props.height,
        backgroundColor: props.color
      }}
    >
      &nbsp;
    </div>
  );
};

export default Column;
