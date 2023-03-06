import './styles/style.css'
import drawBoard, { drawMenu } from './drawing';

const container = document.querySelector('#container')

container.appendChild(drawMenu());
container.appendChild(drawBoard());
