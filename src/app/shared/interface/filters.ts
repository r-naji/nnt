export interface Filters {
  english: boolean,
  group: FilterVerbGroup | FilterAdjectiveGroup,
  level: FilterLevel
};

export type FilterVerbGroup = 'ALL'|'RU'|'U'|'IRR';
export type FilterAdjectiveGroup = 'ALL'|'NA'|'I';
export type FilterLevel = 'ALL'|'N1'|'N2'|'N3'|'N4'|'N5';
