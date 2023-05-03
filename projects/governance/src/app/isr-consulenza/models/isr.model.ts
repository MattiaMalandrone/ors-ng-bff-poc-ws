export interface IsrModel {
  id: number;
  name: string;
  isPublished: boolean;
}

export type IsrRequiredProps = Pick<IsrModel, 'name'>;

export interface SwapiApi {
  results: SwapiPerson[];
  count: number;
}

export interface SwapiPerson {
  name: string;
  birth_year: string;
  height: string;
  gender: string;
}
