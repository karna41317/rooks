# @rooks/use-counter

### Installation

```
npm install --save @rooks/use-counter
```

### Usage

```jsx
function CounterComponent() {
  const {
    value,
    increment,
    decrement,
    incrementBy,
    decrementBy,
    reset
  } = useCounter(3);


  function incrementBy5(){
     incrementBy(5)
  }
  function decrementBy7(){
     decrementBy(7)
  }

  return <>
      Current value is {value}
      <hr/>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={incrementBy5} >incrementBy5</button>
      <button onClick={decrementBy7} >decrementBy7</button>
      <hr/>
      <button onClick={reset}>reset</button>
  </>;
}

render(<CounterComponent/>)
```

### Arguments

| Argument     | Type   | Description                  |
| ------------ | ------ | ---------------------------- |
| initialValue | number | Initial value of the counter |


### Return

| Return value | Type   | Description                                                                 |
| ------------ | ------ | --------------------------------------------------------------------------- |
| counter      | Object | Object containing {value,increment,decrement,incrementBy,decrementBy,reset} |

Counter hook for React
