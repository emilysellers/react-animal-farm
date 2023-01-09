import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import { animals } from '../../data.js';
import background from '../../background.png';

export default function Main() {
  return (
    <main className="main">
      {animals.map((animal) => (
        <Animal
          key={animal.name}
          name={animal.name}
          type={animal.type}
          top={animal.top}
          left={animal.left}
          says={animal.says}
        />
      ))}
    </main>
  );
}
