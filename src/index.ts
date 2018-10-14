import { Subject, NEVER, Observable } from "rxjs";
import { switchMap, startWith } from "rxjs/operators";

export function toStoppable$$<T>(s$: Observable<T>, startOnSubscribe = true) {
  const stopper$ = new Subject();
  const start = () => stopper$.next(false);
  const stop = () => stopper$.next(true);
  const stopperStartWith$ = startOnSubscribe
    ? stopper$.pipe(startWith(false))
    : stopper$;
  const stream$ = stopperStartWith$.pipe(
    switchMap(isStopped => (isStopped ? NEVER : s$))
  );
  return {
    stream$,
    start,
    stop
  };
}
export default toStoppable$$;
