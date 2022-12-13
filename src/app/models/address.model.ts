import {Entity} from "./entity.model";

export class Address extends Entity
{
  city: string;
  country: string;
  number: number;
  state: string;
  street: string;
  zipCode: number;
}
