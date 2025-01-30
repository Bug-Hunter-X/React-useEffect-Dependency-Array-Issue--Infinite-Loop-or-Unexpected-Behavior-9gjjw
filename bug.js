```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to log
    console.log("Count updated", count); 
    return () => {
      // Cleanup function (optional)
      console.log("Component unmounted");
    };
  }, [count]); // Only re-run effect if 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```