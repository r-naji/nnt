export interface Adjective {
  name_kana: string;
  name_kanji?: string;
  name_eng: string;
  definition: string;
  group: 'I'|'NA';
  jlpt: 'N1'|'N2'|'N3'|'N4'|'N5';
}
