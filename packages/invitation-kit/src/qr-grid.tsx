import { useEffect, useState } from "react";

export function QRGrid() {
  const [cells, setCells] = useState<boolean[]>(() => Array(64).fill(false));

  useEffect(() => {
    setCells(Array.from({ length: 64 }, () => Math.random() > 0.6));
  }, []);

  return (
    <div className="w-full h-full opacity-10 absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1 p-2">
      {cells.map((on, i) => (
        <div key={i} className={on ? "bg-primary" : ""} />
      ))}
    </div>
  );
}
