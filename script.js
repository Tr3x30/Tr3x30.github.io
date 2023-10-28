document.addEventListener("DOMContentLoaded", function () {
	const wrapper = document.getElementById("tiles");

	let columns = 0,
		rows = 0,
		toggled = false;

	const toggle = () => {
		toggled = !toggled;

		document.body.classList.toggle("toggled");
	};

	const handleOnClick = (index) => {
		toggle();

		anime({
			targets: ".tile",
			opacity: toggled ? 0 : 1,
			delay: anime.stagger(50, {
				grid: [columns, rows],
				from: index
			})
		});
	};

	const createTile = (index) => {
		const tile = document.createElement("div");

		tile.classList.add("tile");

		tile.style.opacity = toggled ? 0 : 1;

		tile.onclick = (e) => handleOnClick(index);

		return tile;
	};

	const createTiles = (quantity) => {
		Array.from(Array(quantity)).map((tile, index) => {
			wrapper.appendChild(createTile(index));
		});
	};

	const createGrid = () => {
		wrapper.innerHTML = "";

		const size = document.body.clientWidth > 800 ? 100 : 50;

		columns = Math.floor(document.body.clientWidth / size);
		rows = Math.floor(document.body.clientHeight / size);

		wrapper.style.setProperty("--columns", columns);
		wrapper.style.setProperty("--rows", rows);

		createTiles(columns * rows);
	};

	createGrid();

	window.onresize = () => createGrid();

	const outerCursor = document.getElementById("customCursorCircle");
	const dotCursor = document.getElementById("customCursorDot");
	const customCursorText = document.getElementById("customCursorText");

	window.onpointermove = (event) => {
		const { clientX, clientY } = event;

		outerCursor.animate(
			{
				left: `${clientX}px`,
				top: `${clientY}px`
			},
			{ duration: 200, fill: "forwards" }
		);

		customCursorText.animate(
			{
				left: `${clientX}px`,
				top: `${clientY + 40}px`
			},
			{ duration: 200, fill: "forwards" }
		);

		dotCursor.style.left = `${clientX}px`;
		dotCursor.style.top = `${clientY}px`;
	};
});
