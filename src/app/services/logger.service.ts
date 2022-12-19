import {environment} from "../../environments/environment";

export class Logger {
  static log(message: string, result?: any): void {
    if (!environment.production) {
      //console.log('> ' + message);
      if (result !== undefined) {
        if (Array.isArray(result) && console.table !== undefined) {
        //  console.table(result.slice(0, 50));
        } else {
          //console.log(result);
        }
      }
    }
  }

  static error(error: any): void {
    //console.error(error);
  }

  static warn(warn: string): void {
    //console.warn(warn);
  }
}
