import { Pipe, PipeTransform } from '@angular/core';

import { Gender } from '../models/data/gender.enum';

@Pipe({
  name: 'definiteArticle'
})
export class DefiniteArticlePipe implements PipeTransform {

  transform(gender : Gender | string, capitalise: boolean = true): string {
    const article: string = this.getDefiniteArticle(gender);

    return (capitalise) ? article : article.toLowerCase();
  }

  private getDefiniteArticle(gender: Gender | string): string {
    if (gender == Gender.Masculine) {
      return "Der";
    } else if (gender == Gender.Feminine) {
      return "Die";
    } else if (gender == Gender.Neuter) {
      return "Das";
    }
    throw new TypeError(`Invalid noun gender value ${ gender } provided`);
  }
}
