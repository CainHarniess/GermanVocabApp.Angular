import { Pipe, PipeTransform } from '@angular/core';
import { Undefined, Vague } from '../../../core/types';
import { isNullOrUndefined } from '../../../utilities';

@Pipe({
  name: 'separableDisplay'
})
export class SeparableDisplayPipe implements PipeTransform {
  transform(isSeparable: Vague<boolean>, capitalise: boolean = true): Undefined<string> {
    if (isNullOrUndefined(isSeparable)) {
      return undefined;
    }
    const output: string = isSeparable! ? "Separable" : "Inseparable";
    return capitalise ? output : output.toLowerCase();
  }
}
