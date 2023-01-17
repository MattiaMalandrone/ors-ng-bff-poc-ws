export interface IsrModel {
  id: number
  name: string
  isPublished: boolean
}

export type IsrRequiredProps = Pick<IsrModel, "name">;
