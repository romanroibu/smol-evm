import { Byte, Bytes32 } from "./types";

export interface IMemory {
  access(offset: number, size: number): Byte[];
  load(offset: number): Bytes32;
  store(offset: number, value: Byte[]): void
}
