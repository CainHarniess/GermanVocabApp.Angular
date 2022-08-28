import { Pipe, PipeTransform } from '@angular/core';
import { Undefined, Vague } from '../../../core/types';
import { isNullOrUndefined } from '../../../utilities';

@Pipe({
  name: 'separableDisplay'
})
export class SeparableDisplayPipe implements PipeTransform {
  //TODO: Consume Separability enum rather than boolean.
  transform(isSeparable: Vague<boolean>, capitalise: boolean = true): Undefined<string> {
    if (isNullOrUndefined(isSeparable)) {
      return undefined;
    }

  //TODO: Return undefined for None.

    const output: string = isSeparable! ? "Separable" : "Inseparable";
    return capitalise ? output : output.toLowerCase();
  }
}
