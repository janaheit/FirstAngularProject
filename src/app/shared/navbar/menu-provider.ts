export enum NavbarPrivilege
{
  NONE = 0,
  DISCONECTED = 1,
  AUTH = 2,
  ADMIN = 3,
}

export enum NavbarGroupSide {
  LEFT = 0,
  RIGHT = 1
}

export enum NavbarItemType
{
  BUTTON = 0,
  FORM = 1
}

export interface NavbarConfig
{
  name: string;
  itemGroups: Array<NavbarGroupConfig>;
}

export interface NavbarGroupConfig
{
  groupSide: NavbarGroupSide;
  items: Array<NavbarItemConfig>;
}

export interface NavbarItemConfig
{
  value: string;
  route?: string;
  itemType: NavbarItemType;
  privileges?:NavbarPrivilege;
  callback?: () => void;
}

interface NavbarItemForm
{
  method: string;
  fields: Array<string>; // TODO replace by fieldType
}
