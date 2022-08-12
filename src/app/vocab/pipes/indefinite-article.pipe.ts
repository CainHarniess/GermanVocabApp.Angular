import { Pipe, PipeTransform } from '@angular/core';

import { NounGender } from '../models/data/noun-gender.enum';

@Pipe({
  name: 'indefiniteArticle'
})
export class IndefiniteArticlePipe implements PipeTransform {

  transform(nounGender: NounGender, capitalise: boolean = true): string {
    const article: string = this.getIndefiniteArticle(nounGender);

    return (capitalise) ? article : article.toLowerCase();
  }

  private getIndefiniteArticle(nounGender: NounGender): string {
    if (nounGender === NounGender.Feminine) {
      return "Eine";
    } else if (nounGender === NounGender.Masculine || nounGender === NounGender.Neuter) {
      return "Ein";
    }
    throw new TypeError(`Invalid noun gender value ${nounGender} provided`);
  }

}
