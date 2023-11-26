import { MouseEvent } from 'react';
import './styles.css';

function handleFormSubmit(event: MouseEvent) {
  console.log(event)
  event.preventDefault()
}

// const handleClick = (event: MouseEvent) => {
//   console.log('Hey')
//   console.log(event)
// }

export default function Form(): JSX.Element {
  
  return (
    <main>
      <form className='form'>
        <input className='form-input' type="text" placeholder='Top text' />
        <input className='form-input' type="text" placeholder='Bottom text' />

        <button onClick={handleFormSubmit} className='form-submit'>Get a new meme image 🖼️</button>
      </form>
    </main>
  )
}