## rxjs-to-stoppable

## Install

```sh
  yarn add rxjs-to-stoppable
```

## Usage

```typescript
const { stream$, start, stop } = makeStoppable$$(interval(400));

setTimeout(() => {
  stop();
}, 1200);

setTimeout(() => {
  start();
}, 3000);

stream$.subscribe(() => {
  // Will only emit in [0-1200] and [3000+]
});
```

Interactive RxViz demo : https://rxviz.com/v/xOv3BYzJ

## API

### Input :

- stream$: RxJS stream (required)
- startOnSubscribe: boolean (optional, default = true)

### Output :

```typescript
{
  stream$: Observable,
  start: () => void,
  stop: () => void
}
```
