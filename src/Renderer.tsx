import React, { useState } from 'react';
import { Map } from './Map';
import Column from './Column';

export interface IRendererProps {
  cols: number;
  rows: number;
  level: Map;
}

interface IColumnData {
  height: number;
  color: string;
}

const MOVEMENT_SPEED = 2;
const ROTATE_SPEED = 4;
const MOVEMENT_INCREMENT = 2;

const FOV = Math.PI / 2.0;
const MAX_DISTANCE = 64.0 * 16.0;
const MIN_DISTANCE = 64.0 / 4.0;

const deg2rad = (deg: number) => (deg * Math.PI) / 180.0;

const getColorForWall = (wall: number, horizontal: boolean) => {
  switch (wall) {
    case 3:
      return horizontal ? '--color-magenta' : '--color-bright-magenta';
    case 4:
      return horizontal ? '--color-green' : '--color-bright-green';
    case 5:
      return horizontal ? '--color-blue' : '--color-bright-blue';
    case 6:
      return horizontal ? '--color-brown' : '--color-bright-yellow';
    case 7:
      return horizontal ? '--color-cyan' : '--color-bright-cyan';
    default:
      return horizontal ? '--color-red' : '--color-bright-red';
  }
};

const Renderer: React.FC<IRendererProps> = props => {
  const [columns, setColumns] = useState(
    Array(props.cols)
      .fill(null)
      .map((_, idx) => {
        return { height: 0, color: 'transparent' } as IColumnData;
      })
  );

  return (
    <div className="renderer">
      <div className="ceiling"></div>
      <div className="floor"></div>
      <div className="walls">
        {columns.map(c => {
          return <Column widthFrac={1 / props.cols} height={c.height} color={c.color} />;
        })}
      </div>
    </div>
  );
};

export default Renderer;
