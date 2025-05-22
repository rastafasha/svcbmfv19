import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys',  pure: false })

export class KeysPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
      // check if "routes" exists
      if (value) {
        // create instance vars to store keys and final output
        interface KeyValueObject {
            [key: string]: any;
        }

        let keyArr: string[] = Object.keys(value),
            dataArr: any[] = [];

        // loop through the object,
        // pushing values to the return array
        keyArr.forEach((key: any) => {
            dataArr.push(value[key]);
        });
        // return the resulting array
        return dataArr;
      }
      // always return an array
      return [];
    }
}