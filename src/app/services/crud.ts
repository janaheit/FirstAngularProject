import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Entity} from "../models/entity.model";

export class CrudConfig {
  single: (id) => string
  many: string;
}

export abstract class Crud<T extends Entity>
{
    protected http: HttpClient;
    protected config: CrudConfig;

    constructor(
      httpClient: HttpClient,
      config: CrudConfig
    ) {
      this.http = httpClient;
      this.config = config;
    }

    findAll(): Observable<Array<T>>
    {
      // localhost/api/user
      return this.http.get<Array<T>>(environment.api.url + this.config.many);
    }

    find(id: number)
    {
      // localhost/api/user/1
      return this.http.get<T>(environment.api.url + this.config.single(id))
    }

    insert(entity: T)
    {
      return this.http.post<T>(environment.api.url + this.config.many, entity);
    }

    update(entity: T)
    {
      return this.http.put<T>(environment.api.url + this.config.single(entity.id) , entity);
    }

    delete(id: number)
    {
      return this.http.delete<T>(environment.api.url + this.config.single(id));
    }
}
