import { Pipe, PipeTransform } from '@angular/core';

import { NounGender } from '../models/data/noun-gender.enum';

@Pipe({
  name: 'definiteArticle'
})
export class DefiniteArticlePipe implements PipeTransform {

  transform(nounGender: NounGender, capitalise: boolean = true): string {
    const article: string = this.getDefiniteArticle(nounGender);

    return (capitalise) ? article : article.toLowerCase();
  }

  private getDefiniteArticle(nounGender: NounGender): string {
    switch (nounGender) {
      case NounGender.Masculine: {
        return "Der";
      } case NounGender.Feminine: {
        return "Die";
      } case NounGender.Neuter: {
        return "Das";
      }
    }
  }
}
