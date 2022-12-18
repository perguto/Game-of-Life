// import GameLife from 'game-life'
document.addEventListener('DOMContentLoaded',init)
function init() {
	const settings = {
		graphics: {
			// board: {width: "100vw", height: "80vh"},
			board: {width: 1920, height: 900},
			colors: {background: '#FFFFFF', grid: '#E0E0E0'},
			cells: {size: 20}
		},
		game: {delay: 1000}
	}
	window.canvas = document.querySelector('canvas');
	window.game = GameLife(canvas, settings);
}
