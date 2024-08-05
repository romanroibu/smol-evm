import { Bytes32 } from "./types";

export class StackError extends Error {}

export class StackOverflowError extends StackError {
  constructor() {
    super("stack overflow");
  }
}

export class StackUnderflowError extends StackError {
  constructor() {
    super("stack underflow");
  }
}

export const STACK_MAX_SIZE = 1024;

export interface IStack {
  /**
   * Pushes value to the top of the stack
   * 
   * @param value new value to be pushed to the top of the stack
   * @throws `StackOverflowError` if the stack already contains `STACK_MAX_SIZE` items
   *
   */
  push(value: Bytes32): void;

  /**
   * Removes the top value from the stack and returns it
   * 
   * @throws `StackUnderflowError` if the stack is empty
   * @returns value removed from the top of the stack
   */
  pop(): Bytes32;
}

