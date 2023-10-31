* {
  cursor: none !important;
}

:root {
  --g1: rgb(98, 0, 234);
  --g2: rgb(236, 64, 122);
}

@keyframes background-pan {
  from {
    background-position: 0% center;
  }

  to {
    background-position: -200% center;
  }
}

body {
  height: 100vh;
  overflow-x: hidden;
  margin: 0;
  background-color: #0f0f0f;
}

#background {
  position: fixed;
  top: -5px;
  left: -5px;
  width: calc(100vw + 10px);
  height: calc(100vh + 10px);
  z-index: 0;
  background: linear-gradient(to right, var(--g1), var(--g2), var(--g1));
  animation: background-pan 10s linear infinite;
  clip-path: polygon(10% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 70%, 10% 60%);
}

#tiles {
  top: -5px;
  left: -5px;
  height: calc(100vh + 10px);
  width: calc(100vw + 10px);
  position: relative;
  z-index: 2 !important;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-template-rows: repeat(var(--rows), 1fr);
  clip-path: polygon(calc(10% + 2px) 2px,
                     calc(100% - 2px) 2px,
                     calc(100% - 2px) 80%,
                     80% calc(100% - 2px),
                     2px calc(100% - 2px),
                     2px 70%, 
                     calc(10% + 2px) 60%);
}

body.toggled {
  animation: none;
}

body.toggled>#wrapper>#title {
  opacity: 0;
}

body.toggled>#icon {
  opacity: 1;
}

.centered {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.tile {
  cursor: pointer;
  position: relative;
}

.tile:hover:before {
  background-color: rgb(30, 30, 30);
}

.tile:before {
  background-color: rgb(15, 15, 15);
  content: "";
  inset: 0.5px;
  position: absolute;
}

#title {
  color: white;
  font-family: "Rubik", sans-serif;
  font-size: 6vw;
  margin: 0px;
  pointer-events: none;
  transition: opacity 1200ms ease;
  width: 50vw;
  z-index: 3;
}

#title>.fancy {
  color: var(--g2);
  font-family: "Dancing Script", cursive;
  font-size: 1.5em;
  line-height: 0.9em;
}

#icon {
  color: rgba(255, 255, 255, 0.15);
  font-size: 80vmin;
  opacity: 0;
  pointer-events: none;
  transition: opacity 1200ms ease;
  z-index: 1;
}

#customCursorContainer {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
}

#customCursorCircle {
  aspect-ratio: 1/1;
  width: 100px;
  border: 2px solid rgba(55, 200, 255, 0.5);
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  clip-path: polygon(0 10%, 100% 10%, 100% 90%, 0 90%);
}

#customCursorText {
  color: #37c6ff;
  margin-top: 5px;
  position: absolute;
  transform: translate(-50%, -50%);
}

#customCursorDot {
  content: "";
  width: 4px;
  height: 4px;
  background-color: #37c6ff;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

#squareElement {
  width: 100vw;
  height: 500px;
  background-color: #0f0f0f;
  z-index: -2;
  position: absolute;
  top: 100vh;
  left: 0;
}

#wrapper {
  position: fixed;
  scale: 1.4;
}
