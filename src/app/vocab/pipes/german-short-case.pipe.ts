import { Pipe, PipeTransform } from '@angular/core';
import { Case } from '../models/data/case.enum';

@Pipe({
  name: 'germanShortCase'
})
export class GermanShortCasePipe implements PipeTransform {
  transform(value: Case, capitalise: boolean = true): string {
    const abbreviation: string = this.getAbbreviatedCase(value);
    return (capitalise) ? abbreviation : abbreviation.toLowerCase();
  }

  private getAbbreviatedCase(value: Case): string {
    switch (value) {
      case Case.Nominative:
        return "Nom.";
      case Case.Accusative:
        return "Akk.";
      case Case.Dative:
        return "Dat.";
      case Case.Genetive:
        return "Gen.";
      default:
        throw new Error("Invalid case given to ShortCasePipe");
    }
  }
}
