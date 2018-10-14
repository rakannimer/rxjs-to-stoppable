import { timer, Observable } from "rxjs";
import { take } from "rxjs/operators";
import toStoppable$$ from "../src/index";

const delay = (ms: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};
describe("toStoppable$$", () => {
  test("exports", () => {
    expect(toStoppable$$).toBeTruthy();
  });
  test("~works", () => {
    const input$ = timer(500);
    const { stream$, start, stop } = toStoppable$$(input$);
    expect(stream$).toBeInstanceOf(Observable);
    expect(start).toBeInstanceOf(Function);
    expect(stop).toBeInstanceOf(Function);
  });
});
