export default class Ray {
  public x: number;
  public y: number;

  public distance: number;

  public hitWall: number;

  public isHorizontal?: boolean;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.distance = 0;
    this.hitWall = -1;
  }
}
