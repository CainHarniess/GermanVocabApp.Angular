import { Pipe, PipeTransform } from '@angular/core';

import { NounGender } from '../models/data/noun-gender.enum';

@Pipe({
  name: 'definiteArticle'
})
export class DefiniteArticlePipe implements PipeTransform {

  transform(nounGender: NounGender | string, capitalise: boolean = true): string {
    const article: string = this.getDefiniteArticle(nounGender);

    return (capitalise) ? article : article.toLowerCase();
  }

  private getDefiniteArticle(nounGender: NounGender | string): string {
    if (nounGender == NounGender.Masculine) {
      return "Der";
    } else if (nounGender == NounGender.Feminine) {
      return "Die";
    } else if (nounGender == NounGender.Neuter) {
      return "Das";
    }
    throw new TypeError(`Invalid noun gender value ${ nounGender } provided`);
  }
}
