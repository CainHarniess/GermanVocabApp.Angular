import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from '../../../utilities';
import { Transitivity } from '../models/data';

@Pipe({
  name: 'transitiveDisplay'
})
export class TransitiveDisplayPipe implements PipeTransform {
  transform(value: Transitivity | undefined | null): string | undefined {
    if (isNullOrUndefined(value)) {
      return undefined;
    }

    if (value === Transitivity.Both) {
      return "Both transitive and intransitive";
    }
    return value!;
  }
}
