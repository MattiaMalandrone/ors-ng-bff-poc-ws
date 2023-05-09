import { Command } from "./command.model";
export type RowCommand = Omit<Command, "payloadRow"> & {
  icon: string // https://fonts.google.com/icons?hl=it
}
