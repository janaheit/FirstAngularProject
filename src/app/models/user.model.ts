import {Entity} from "./entity.model";
import {Address} from "./address.model";

export class User extends Entity
{
  username: string;
  password: string;
  email: string;
  roles: string[];
  token: string;

  enabled: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;

  address: Address;
}
