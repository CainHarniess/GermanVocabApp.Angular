import { Pipe, PipeTransform } from '@angular/core';
import { FixedPlurality } from '../models/data/fixed-plurality.enum';

@Pipe({
  name: 'fixedPluralDisplay'
})
export class FixedPluralDisplayPipe implements PipeTransform {

  transform(value: FixedPlurality): string | undefined {
    switch (value) {
      case FixedPlurality.None:
        return undefined;
      case FixedPlurality.Plural:
        return "Always plural";
      case FixedPlurality.Singular:
        return "Always singular";
      default:
        throw new Error("Invalid FixedPlurality given to FixedPluralDisplayPipe");
    }
  }
}
