import { Pipe, PipeTransform } from '@angular/core';
import { Undefined, Vague } from '../../../core/types';
import { isNullOrUndefined } from '../../../utilities';
import { Separability } from '../models/data/separability.enum';

@Pipe({
  name: 'separableDisplay'
})
export class SeparableDisplayPipe implements PipeTransform {
  transform(separability: Vague<Separability>, capitalise: boolean = true): Undefined<string> {
    if (isNullOrUndefined(separability)) {
      return undefined;
    }

    if (separability === Separability.None) {
      return undefined;
    }

    const output: string = separability === Separability.Separable ? "Separable" : "Inseparable";
    return capitalise ? output : output.toLowerCase();
  }
}
