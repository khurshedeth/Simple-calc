import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");

  const handleClick = (input) => {
    setNumber((prevNumber) => prevNumber + input);
  };

  const handleClear = () => {
    setNumber("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(number);
      setNumber(result.toString());
    } catch (error) {
      setNumber("Error");
    }
  };

  return (
    <div className="h-screen w-96 bg-black mt-10 mx-auto overflow-hidden rounded-xl">
      <div className="w-full h-40">
        <input
          type="text"
          placeholder="0"
          value={number}
          className="w-full h-full border border-b-white text-white bg-gray-800 text-3xl text-right font-semibold"
        />
      </div>
      <div className="grid grid-cols-4 gap-2 mt-10 mx-2">
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={handleClear}
        >
          AC
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={handleClear}
        >
          C
        </button>
        <button
          className="text-white w-20 h-40 bg-blue-600 rounded-lg text-2xl font-bold row-span-2"
          onClick={() => handleClick("+")}
        >
          +
        </button>

        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("7")}
        >
          7
        </button>

        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("-")}
        >
          -
        </button>

        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("1")}>1</button>
        
          
          
          <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("*")}
        >
          *
        </button>

        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick("0")}
        >
          0
        </button>
        <button
          className="text-white w-20 h-20 bg-blue-600 rounded-lg text-2xl font-bold"
          onClick={() => handleClick(".")}
        >
          .
        </button>

        <button
          className="text-white h-20 bg-blue-600 rounded-lg text-2xl font-bold col-span-1 mr-2 "
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;

       
