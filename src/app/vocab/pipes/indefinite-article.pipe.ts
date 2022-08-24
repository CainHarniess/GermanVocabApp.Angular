import { Pipe, PipeTransform } from '@angular/core';

import { Gender } from '../models/data/gender.enum';

@Pipe({
  name: 'indefiniteArticle'
})
export class IndefiniteArticlePipe implements PipeTransform {

  transform(gender: Gender | string, capitalise: boolean = true): string {
    const article: string = this.getIndefiniteArticle(gender);

    return (capitalise) ? article : article.toLowerCase();
  }

  private getIndefiniteArticle(gender: Gender | string): string {
    if (gender === Gender.Feminine) {
      return "Eine";
    } else if (gender === Gender.Masculine || gender === Gender.Neuter) {
      return "Ein";
    }
    throw new TypeError(`Invalid noun gender value ${gender} provided`);
  }

}
