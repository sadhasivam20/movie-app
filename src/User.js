import React from 'react';
import { Counter } from "./Counter";

export function User({ pics, names }) {
  return (
    <div>
      <img className='img' src={pics}></img>
      <h1 className='user-name'>Hello ,<span className='name'>{names}</span>🎉✨</h1>
      <h2><Counter /></h2>
    </div>
  );
}
