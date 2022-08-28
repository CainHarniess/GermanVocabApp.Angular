import { Pipe, PipeTransform } from '@angular/core';

import { isNullOrUndefined } from '../../../utilities';
import { AuxiliaryVerb } from '../models/data';

@Pipe({
  name: 'thirdPersonAuxiliary'
})
export class ThirdPersonAuxiliaryPipe implements PipeTransform {
  transform(value: AuxiliaryVerb | undefined | null): string | undefined {
    if (isNullOrUndefined(value)) {
      return undefined;
    }

    switch (value) {
      case AuxiliaryVerb.Haben:
        return "hat";
      case AuxiliaryVerb.Sein:
        return "ist";
      default:
        throw new Error("Unhandled auxiliary verb input.");
    }
  }
}
