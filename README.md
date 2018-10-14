## rxjs-to-stoppable

## Install

```sh
  yarn add rxjs-to-stoppable
```

## Usage

```typescript
import toStoppable$ from "rxjs-to-stoppable";

sum(1, 2); // 3
```

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
