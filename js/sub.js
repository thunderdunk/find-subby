

document.addEventListener('keydown', logKey );

function logKey(e) {
    // custom console
    console.log( e.code );
}


document.addEventListener( 'keydown', moveSubby );

function moveSubby(e) {
    var subby = document.getElementById('subby');
        log = document.getElementById('log');
    
    // Actually need to find the current coords and add to them
    // Or find original coordinates and keep running tally of keypresses?

    // Left arrow
    if (e.keyCode === 37 ) {
        subby.style.transform = 'translateX(-10px)';
    }
    // Right arrow
    if (e.keyCode === 39 ) {
        // subby.style.transform = 'translateX(10px)';
        var subSVG = document.getElementById('subVG'),
            currentX = subSVG.x.animVal.value,
            // xNum = parseInt( currentX, 10 ), // Already a number
            currentXPlus = currentX + 10;
        
        console.log( 'Current X:' + currentX );
        // console.log( 'xNum:' + xNum );
        console.log( 'Current X + 10: ' + currentXPlus );
        // subSVG.setAttribute('x', );
    }

    // Log Coords on spacebar
    // TO DO: Change this to log new coordinates on every keydown?
    if (e.keyCode === 32 ) {
        log.innerText = 'Subby has been found! [print coords here]';
    }
}