import { useState } from "react";

function SolverForm() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/solve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: input
      });
      const data = await res.json();
      setOutput(data);
    } catch (err) {
      alert("Error: Invalid JSON or server issue");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-40 border p-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste JSON test case here"
      />
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Solve
      </button>

      {output && (
        <div className="mt-6">
          <h2 className="font-semibold">Results:</h2>
          <pre>{JSON.stringify(output, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default SolverForm;
