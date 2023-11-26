import './styles.css';
import Logo from '../../assets/troll-face.png'

export default function Header(): JSX.Element {
  return (
    <header className='header'>
      <img src={Logo} alt="Logo App" />
      <h1 className='header--title'>Meme Generator</h1>

      <h3 className='header--subtitle'>React Course - Project 3</h3>
    </header>
  )
}