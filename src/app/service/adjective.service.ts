import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Adjective } from "../shared/model/adjective";
import { Filters } from "../shared/interface/filters";

@Injectable()
export class AdjectiveService {

  constructor(private httpService: HttpClient) {}

  public lookup(input: string): Observable<Array<Adjective>> {
    return this.httpService.get<Array<Adjective>>('adjective');
  }
}

@Injectable()
export class AdjectiveServiceMockUp {

  private adjectives_dictionnary: Array<Adjective> = [
    { name_kana: 'くろい', name_eng: 'kuroi', definition: 'black', group: 'I', jlpt: 'N5' },
    { name_kana: 'まるい', name_eng: 'marui', definition: 'round, circular', group: 'I', jlpt: 'N5' },
    { name_kana: 'べんり', name_eng: 'benri', definition: 'comvenient, handy, useful', group: 'NA', jlpt: 'N5' },
    { name_kana: 'だいじょうぶ', name_eng: 'daijobu', definition: 'OK; okay; alright; problem free', group: 'NA', jlpt: 'N5' }
  ];

  constructor() {}

  public lookup(input: string, filters: Filters): Observable<Array<Adjective>> {
    return of(this.adjectives_dictionnary.filter(a => this.filterAdjective(a, input, filters)));
  }

  public getAll(): Array<Adjective> {
    return this.adjectives_dictionnary;
  }

  private filterAdjective(adjective: Adjective, input: string, filters: Filters): boolean {
    return this.filterByGroup(adjective, filters)
      && this.filterByLevel(adjective, filters)
      && this.filterByName(adjective, input, filters);
  }

  private filterByName(adjective: Adjective, input: string, filters: Filters): boolean {
    return !input
      && filters.english
          ? adjective.definition.includes(input)
          : (adjective.name_kana.includes(input) || adjective.name_eng.includes(input));
  }

  private filterByLevel(adjective: Adjective, filters: Filters) {
    return filters.level === 'ALL' || filters.level === adjective.jlpt;
  }

  private filterByGroup(adjective: Adjective, filters: Filters): boolean {
    return filters.group === 'ALL' || filters.group === adjective.group;
  }
}
