import './styles.css';// index.js
// создаем элемент заголовка
class Game {
	name = 'viol'
}
const myGame = new Game()
const p = document.createElement('p')
p.textContent = `i was ${myGame.game}`
const heading = document.createElement('h1')
heading.textContent = 'we'

// добавляем заголовок в DOM 
const root = document.querySelector('#root')
root.append(heading, p)