import { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0); // начальное значение 0

  return (
    <div>
      <p>Ты нажал {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
    </div>
  );
}

export default ClickCounter;
