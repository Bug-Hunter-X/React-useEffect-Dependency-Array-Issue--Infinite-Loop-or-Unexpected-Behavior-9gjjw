## React useEffect Dependency Array Issue

This repository demonstrates a common error in React's `useEffect` hook: incorrect or missing dependency arrays.  This can lead to unexpected behavior, such as infinite re-renders or incorrect state updates.

The `bug.js` file contains the buggy code. The `bugSolution.js` file demonstrates the correct implementation.

The issue is due to not including the count state variable in the dependency array for useEffect. This means that useEffect always runs in every render causing an infinite render loop.