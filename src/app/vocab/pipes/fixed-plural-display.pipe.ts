import { Pipe, PipeTransform } from '@angular/core';
import { Undefined } from '../../../core/types';
import { FixedPlurality } from '../models/data/fixed-plurality.enum';

@Pipe({
  name: 'fixedPluralDisplay'
})
export class FixedPluralDisplayPipe implements PipeTransform {

  transform(value: FixedPlurality): Undefined<string> {
    switch (value) {
      case FixedPlurality.None:
        return undefined;
      case FixedPlurality.Plural:
        return "Always plural";
      case FixedPlurality.Singular:
        return "Always singular";
    }
  }
}
