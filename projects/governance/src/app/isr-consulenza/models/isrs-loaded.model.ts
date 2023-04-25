import { IsrModel } from "./isr.model"

export interface IsrsLoadedDTO {
  data: IsrModel[]
  total: number,
  skip: number,
  take: number,
  sort: any[]
}
