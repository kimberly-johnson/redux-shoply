import { ADD, REMOVE } from "./actionTypes";

export function add() {
  return {
    type: ADD
  };
}

export function remove() {
  return {
    type: REMOVE
  };
}