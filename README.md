## What is an application state?

State is a piece of data that is stored by our program to reflect the changes that occur when it’s running and when the user interacts with it. This totally sounds like a boring Wikipedia definition so let’s take a look at what can actually be stored in a state:

- information about the logged-in user,
- list of products fetched from the backend,
- flag indicating opened/closed state of the navigation bar,
- the sum of prices from each product in the user’s shopping cart.

## We distinguish two types of states in React applications

### Local state

State that is strictly connected with a component that changes the UI appearance. This state doesn’t have to be shared across multiple components. Flag keeping the navbar state from the list above is a good example. The navigation bar is probably the only component that cares about this piece of information so you don’t have to worry about sharing it.

### Global state

On the other hand, this state represents the data that can be used by multiple nested components in your application.

## What is Zustand?

A small, fast, and scalable bearbones state management solution. Zustand has a comfy API based on hooks. It isn't boilerplatey or opinionated, but has enough convention to be explicit and flux-like.

## Use it

Install Zustand
In order to install Zustand, run the following command:

`npm install zustand`

or

`yarn add zustand`

## First Create a Store

Your store is a hook! You can put anything in it: primitives, objects, functions. The set function merges state.

```jsx
import { create } from "zustand";

const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
```

## Then bind your components, and that's it!

You can use the hook anywhere, without the need of providers. Select your state and the consuming component will re-render when that state changes.

```jsx
function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

## Check `store` folder in the code to know more about persists and how to use it for CRUD Operations

## Run the code

- `npm i`
- `npm run dev`
- Check localstorage to see the persist in action
