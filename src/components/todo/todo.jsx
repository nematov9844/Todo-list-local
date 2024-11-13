import React, { useEffect, useState } from "react";

export default function TodoApp() {
  const [baseData, setBaseData] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    setBaseData(data);
  }, []);

  const updateLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    setBaseData(data);
  };

  const addItem = () => {
    if (newItem.trim() !== "") {
      const updatedData = [...baseData, { id: Date.now(), item: newItem }];
      updateLocalStorage(updatedData);
      setNewItem(""); 
    }
  };

  const deleteItem = (id) => {
    const updatedData = baseData.filter((item) => item.id !== id);
    updateLocalStorage(updatedData);
  };

  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-r from-fuchsia-600 to-orange-500 via-blue-600 py-10">
      <div className="w-[60%] max-w-[400px] bg-[rgba(0,0,0,0.3)] p-4 flex flex-col gap-4 rounded-md">
        <h1 className="text-center text-2xl font-bold text-green-500">
          To-Do List
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Add a new item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            className="flex-1 p-2 border rounded-md outline-none placeholder:font-bold font-bold"
          />
          <button
            onClick={addItem}
            className="bg-green-500 py-2 px-4 text-white rounded-md font-bold"
          >
            Add
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {baseData.length > 0 ? (
            baseData.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-2 bg-[#6eff2063] rounded-md"
              >
                <h1 className="font-bold text-white">{item.item}</h1>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 py-1 px-3 text-white rounded-md font-bold"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-center">No items in the list.</p>
          )}
        </div>
      </div>
    </div>
  );
}
