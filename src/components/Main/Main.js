import React from 'react';
import './Main.css';
import Animal from '../Animal/Animal';
import { animals } from '../../data.js';
import background from '../../background.png';

export default function Main() {
  return (
    <main className="main">
      {animals.map((animal) => (
        <Animal key={animal.name} {...animal} />
      ))}
    </main>
  );
}
