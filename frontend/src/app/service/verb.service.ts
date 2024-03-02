import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Verb } from "../shared/model/verb";
import { Filters } from "../shared/interface/filters";

@Injectable()
export class VerbService {

  constructor(private httpService: HttpClient) {}

  public lookup(input: string): Observable<Array<Verb>> {
    return this.httpService.get<Array<Verb>>('verb');
  }
}

@Injectable()
export class VerbServiceMockUp {

  private verbs_dictionnary: Array<Verb> = [
    { name_kana: 'あびる', name_eng: 'abiru', definition: 'to bathe, to shower', group: 'RU', jlpt: 'N5' },
    { name_kana: 'あげる', name_eng: 'ageru', definition: 'to raise', group: 'RU', jlpt: 'N5' },
    { name_kana: 'たべる', name_eng: 'taberu', definition: 'to eat', group: 'RU', jlpt: 'N5' },
    { name_kana: 'のむ', name_eng: 'nomu', definition: 'to drink', group: 'U', jlpt: 'N5' },
    { name_kana: 'ねむ', name_eng: 'nemu', definition: 'to sleep', group: 'U', jlpt: 'N5' },
    { name_kana: 'する', name_eng: 'suru', definition: 'to do', group: 'IRR', jlpt: 'N4' },
    // --
    { name_kana: 'あびる', name_eng: 'abiru', definition: 'to bathe, to shower', group: 'RU', jlpt: 'N5' },
    { name_kana: 'あげる', name_eng: 'ageru', definition: 'to raise', group: 'RU', jlpt: 'N5' },
    { name_kana: 'たべる', name_eng: 'taberu', definition: 'to eat', group: 'RU', jlpt: 'N5' },
    { name_kana: 'のむ', name_eng: 'nomu', definition: 'to drink', group: 'U', jlpt: 'N5' },
    { name_kana: 'ねむ', name_eng: 'nemu', definition: 'to sleep', group: 'U', jlpt: 'N5' },
    { name_kana: 'する', name_eng: 'suru', definition: 'to do', group: 'IRR', jlpt: 'N4' },
    { name_kana: 'あびる', name_eng: 'abiru', definition: 'to bathe, to shower', group: 'RU', jlpt: 'N5' },
    { name_kana: 'あげる', name_eng: 'ageru', definition: 'to raise', group: 'RU', jlpt: 'N5' },
    { name_kana: 'たべる', name_eng: 'taberu', definition: 'to eat', group: 'RU', jlpt: 'N5' },
    { name_kana: 'のむ', name_eng: 'nomu', definition: 'to drink', group: 'U', jlpt: 'N5' },
    { name_kana: 'ねむ', name_eng: 'nemu', definition: 'to sleep', group: 'U', jlpt: 'N5' },
    { name_kana: 'する', name_eng: 'suru', definition: 'to do', group: 'IRR', jlpt: 'N4' },
    { name_kana: 'あびる', name_eng: 'abiru', definition: 'to bathe, to shower', group: 'RU', jlpt: 'N5' },
    { name_kana: 'あげる', name_eng: 'ageru', definition: 'to raise', group: 'RU', jlpt: 'N5' },
    { name_kana: 'たべる', name_eng: 'taberu', definition: 'to eat', group: 'RU', jlpt: 'N5' },
    { name_kana: 'のむ', name_eng: 'nomu', definition: 'to drink', group: 'U', jlpt: 'N5' },
    { name_kana: 'ねむ', name_eng: 'nemu', definition: 'to sleep', group: 'U', jlpt: 'N5' },
    { name_kana: 'する', name_eng: 'suru', definition: 'to do', group: 'IRR', jlpt: 'N4' },
  ];

  constructor() {}

  public lookup(input: string, filters: Filters): Observable<Array<Verb>> {
    return of(this.verbs_dictionnary.filter(v => this.filterVerb(v, input, filters)));
  }

  public getAll(): Array<Verb> {
    return this.verbs_dictionnary;
  }

  private filterVerb(verb: Verb, input: string, filters: Filters): boolean {
    return this.filterByGroup(verb, filters)
      && this.filterByLevel(verb, filters)
      && this.filterByNameAndLang(verb, input, filters);
  }

  private filterByNameAndLang(verb: Verb, input: string, filters: Filters): boolean {
    return !input
      || filters.english
          ? verb.definition.toUpperCase().includes(input.toUpperCase())
          : (verb.name_kana.toUpperCase().includes(input.toUpperCase()) || verb.name_eng.toUpperCase().includes(input.toUpperCase()));
  }

  private filterByLevel(verb: Verb, filters: Filters) {
    return filters.level === 'ALL' || filters.level === verb.jlpt;
  }

  private filterByGroup(verb: Verb, filters: Filters): boolean {
    return filters.group === 'ALL' || filters.group === verb.group;
  }
}
