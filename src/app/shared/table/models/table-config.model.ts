import {Observable} from "rxjs";
import {Entity} from "../../../models/entity.model";

export interface TableConfig
{
  columns: Array<ColumnConfig>;
  actions: Array<RowAction>;
  findDataCb: () => Observable<any[]>;
  sort?: SortConfig;
  create?: CreateAction;
}

interface SortConfig
{
  sortValueName: string;
  direction: SortDirection;
}

export enum SortDirection
{
  ASC,
  DESC
}

export interface ColumnConfig
{
  columnName: string;
  value?: string;
  valueCb?: (data: Entity) => string;
}

export interface RowAction
{
  actionName: string;
  actionCb: (data: Entity) => any;
  type: ButtonType;
  disabledCb?: (data: Entity) => boolean;
}

export interface CreateAction
{
  actionName: string;
  actionCb: () => any;
  canCreate: boolean;
}

export enum ButtonType
{
  SUCCESS = 0,
  WARNING = 1,
  DANGER = 2,
  SUBMIT = 3,
}
