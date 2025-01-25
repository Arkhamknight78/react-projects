import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);

  const [charAllow, setCharAllow] = useState(false);
  // const [upperAllow, setUpperAllow] = useState(false);
  // const [lowerAllow, setLowerAllow] = useState(false);
  //ref hook
  const passRef= useRef(null)

  const [password, setPassword] = useState("");

  const passWordGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllow) {
      str += "0123456789";
    }
    if (charAllow) {
      str += "!@#$%^&*()_+";
    }

    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  
  }, [length, numberAllow, charAllow, setPassword]); // Dependency array, if any of these changes, the function will run again 
  // console.log(password);// This will run every time the component renders
  // console.log(length, numberAllow, charAllow);

  const passToClipBoard=useCallback(()=>{
    passRef.current?.select()
    passRef.current?.selectionRange(0, {length})
    window.navigator.clipboard.writeText(password)
  }, [password, length])  



  useEffect(()=>{
    passWordGen()
  
  }, [length, numberAllow, charAllow, passWordGen])// Dependency array, if any of these changes, the function will run again 
  //The useEffect and useCallback hooks in React both use dependency arrays, but they serve different purposes and have different behaviors.

// useEffect
// The useEffect hook is used to perform side effects in function components. The dependency array in useEffect determines when the effect should be re-run.

// Empty array ([]): The effect runs only once after the initial render.
// No array: The effect runs after every render.
// Array with dependencies: The effect runs only when one of the dependencies changes.
// useCallback
// The useCallback hook is used to memoize a callback function. The dependency array in useCallback determines when the memoized function should be updated.

// Empty array ([]): The callback is memoized once and never changes.
// Array with dependencies: The callback is updated only when one of the dependencies changes.
// Key Differences
// Purpose: useEffect is for side effects, while useCallback is for memoizing functions.
// Execution: useEffect runs the effect function based on dependencies, while useCallback returns a memoized version of the callback function based on dependencies.
// Understanding these differences helps you use these hooks effectively in your React components.
// Empty array ([]): The callback is memoized once and never changes.
// Array with dependencies: The callback is updated only when one of the dependencies changes.
/*Key Differences
Purpose: useEffect is for side effects, while useCallback is for memoizing functions.
Execution: useEffect runs the effect function based on dependencies, while useCallback returns a memoized version of the callback function based on dependencies.*/








  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md-rounded-lg px-4 my-8 py-3  text-white bg-gray-700 text-center">
        <div>
          <h1 className="text-1xl  py-2 text-white">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white mb-4">{/* Generate button*/}
            <input   // Copy button
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 text-black"
              placeholder="password"
              ref={passRef}
            />
            <button className="bg-blue-500 text-white px-3 py-1 hover:bg-blue-700" 
            onClick={passToClipBoard}
            >Copy</button>
          </div>
        </div>
        <div className="flex text-sm gap-x-2"> {/*range*/}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength((e.target.value)); // Convert to number
              }}
            />
            <label>length:{length} </label>
            <div className="flex items-center gap-x-1">
            <label htmlFor="numberInput"> Include Numbers </label>
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            
          </div>
            <div className="flex items-center gap-x-1">
            <label htmlFor="charInput">Include Characters </label>
            <input
              type="checkbox"
              defaultChecked={charAllow}
              onChange={() => setCharAllow((prev) => !prev)}
            />
            
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
