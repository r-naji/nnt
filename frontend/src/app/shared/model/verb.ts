export interface Verb {
  name_kana: string;
  name_kanji?: string;
  name_eng: string;
  definition: string;
  group: 'RU'|'U'|'IRR';
  jlpt: 'N1'|'N2'|'N3'|'N4'|'N5';
}

