import { Injectable } from "@angular/core";
import { filter, map, Observable } from "rxjs";

@Injectable()
export class ListItemWordingObservableProvider {
  private readonly wordingDict: { [key: number]: string } = {
    0: "Why not add something, sugar?",
    1: "Ooh yeah. You like that?",
    2: "Give me some more, baby.",
    3: "I see someone's thirsty...",
    4: "Thirsty for vocab",
    5: "Okay now, let's maybe calm down a bit.",
    6: "You've had enough.",
    7: "You're scaring me.",
    8: "I can't watch you do this to yourself.",
    9: "I'm leaving.",
    10: "You're on your own now.",
    11: "",
  }

  public provide(source$: Observable<any>): Observable<string> {
    return source$
      .pipe(
        filter((val: number) => val <= 11),
        map((count: number) => this.wordingDict[count]),
      );
  }
}
