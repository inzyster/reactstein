// To parse this data:
//
//   import { Convert, Map } from "./file";
//
//   const map = Convert.toMap(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Map {
  height: number;
  infinite: boolean;
  layers: Layer[];
  nextlayerid: number;
  nextobjectid: number;
  orientation: string;
  properties: Property[];
  renderorder: string;
  tiledversion: string;
  tileheight: number;
  tilesets: Tileset[];
  tilewidth: number;
  type: string;
  version: number;
  width: number;
}

export interface Layer {
  data?: number[];
  height?: number;
  id: number;
  name: string;
  opacity: number;
  type: string;
  visible: boolean;
  width?: number;
  x: number;
  y: number;
  properties?: Property[];
  draworder?: string;
  objects?: Object[];
}

export interface Object {
  height: number;
  id: number;
  name: string;
  properties: Property[];
  rotation: number;
  type: string;
  visible: boolean;
  width: number;
  x: number;
  y: number;
}

export interface Property {
  name: string;
  type: string;
  value: string;
}

export interface Tileset {
  columns: number;
  firstgid: number;
  image: string;
  imageheight: number;
  imagewidth: number;
  margin: number;
  name: string;
  properties: Property[];
  spacing: number;
  tilecount: number;
  tileheight: number;
  tilewidth: number;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toMap(json: string): Map {
    return cast(JSON.parse(json), r('Map'));
  }

  public static mapToJson(value: Map): string {
    return JSON.stringify(uncast(value, r('Map')), null, 2);
  }
}

function invalidValue(typ: any, val: any): never {
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    var map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    var map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    var l = typs.length;
    for (var i = 0; i < l; i++) {
      var typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val);
    return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(typ: any, val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }
    return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }
    var result: any = {};
    Object.getOwnPropertyNames(props).forEach(key => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
      result[prop.key] = transform(v, prop.typ, getProps);
    });
    Object.getOwnPropertyNames(val).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(typ, val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Map: o(
    [
      { json: 'height', js: 'height', typ: 0 },
      { json: 'infinite', js: 'infinite', typ: true },
      { json: 'layers', js: 'layers', typ: a(r('Layer')) },
      { json: 'nextlayerid', js: 'nextlayerid', typ: 0 },
      { json: 'nextobjectid', js: 'nextobjectid', typ: 0 },
      { json: 'orientation', js: 'orientation', typ: '' },
      { json: 'properties', js: 'properties', typ: a(r('Property')) },
      { json: 'renderorder', js: 'renderorder', typ: '' },
      { json: 'tiledversion', js: 'tiledversion', typ: '' },
      { json: 'tileheight', js: 'tileheight', typ: 0 },
      { json: 'tilesets', js: 'tilesets', typ: a(r('Tileset')) },
      { json: 'tilewidth', js: 'tilewidth', typ: 0 },
      { json: 'type', js: 'type', typ: '' },
      { json: 'version', js: 'version', typ: 3.14 },
      { json: 'width', js: 'width', typ: 0 }
    ],
    false
  ),
  Layer: o(
    [
      { json: 'data', js: 'data', typ: u(undefined, a(0)) },
      { json: 'height', js: 'height', typ: u(undefined, 0) },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'opacity', js: 'opacity', typ: 0 },
      { json: 'type', js: 'type', typ: '' },
      { json: 'visible', js: 'visible', typ: true },
      { json: 'width', js: 'width', typ: u(undefined, 0) },
      { json: 'x', js: 'x', typ: 0 },
      { json: 'y', js: 'y', typ: 0 },
      { json: 'properties', js: 'properties', typ: u(undefined, a(r('Property'))) },
      { json: 'draworder', js: 'draworder', typ: u(undefined, '') },
      { json: 'objects', js: 'objects', typ: u(undefined, a(r('Object'))) }
    ],
    false
  ),
  Object: o(
    [
      { json: 'height', js: 'height', typ: 0 },
      { json: 'id', js: 'id', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'properties', js: 'properties', typ: a(r('Property')) },
      { json: 'rotation', js: 'rotation', typ: 0 },
      { json: 'type', js: 'type', typ: '' },
      { json: 'visible', js: 'visible', typ: true },
      { json: 'width', js: 'width', typ: 0 },
      { json: 'x', js: 'x', typ: 0 },
      { json: 'y', js: 'y', typ: 0 }
    ],
    false
  ),
  Property: o(
    [
      { json: 'name', js: 'name', typ: '' },
      { json: 'type', js: 'type', typ: '' },
      { json: 'value', js: 'value', typ: '' }
    ],
    false
  ),
  Tileset: o(
    [
      { json: 'columns', js: 'columns', typ: 0 },
      { json: 'firstgid', js: 'firstgid', typ: 0 },
      { json: 'image', js: 'image', typ: '' },
      { json: 'imageheight', js: 'imageheight', typ: 0 },
      { json: 'imagewidth', js: 'imagewidth', typ: 0 },
      { json: 'margin', js: 'margin', typ: 0 },
      { json: 'name', js: 'name', typ: '' },
      { json: 'properties', js: 'properties', typ: a(r('Property')) },
      { json: 'spacing', js: 'spacing', typ: 0 },
      { json: 'tilecount', js: 'tilecount', typ: 0 },
      { json: 'tileheight', js: 'tileheight', typ: 0 },
      { json: 'tilewidth', js: 'tilewidth', typ: 0 }
    ],
    false
  )
};
