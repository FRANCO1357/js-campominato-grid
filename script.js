// RECUPERO IL BOTTONE
const playButton = document.getElementById('play');

// FUNZIONE PER INIZIAREIL GIOCO
function play(){
    this.innerText = 'Ricomincia!';

    // RECUPERO LA GRIGLIA
    const grid = document.getElementById('grid');

    grid.innerText = 'ciao';

    for (let i = 1; i <= 100; i++){
        const cell = document.createElement('div');
        cell.classList.add("cell", "easy")
        cell.innerText = i;

        grid.appendChild(cell);
    }
}

// AGGANCIO L'EVENT LISTENER
playButton.addEventListener('click', play);