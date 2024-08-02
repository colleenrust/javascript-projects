// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", () =>{
    const takeOffButton = document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');
    
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
    const rocket = document.getElementById('rocket');

    takeOffButton.addEventListener('click', function(){
        if(window.confirm('Confirm that the shuttle is ready for takeoff.')){
            flightStatus.textContent = 'Shuttle in flight.';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 1000;
        }
    })
    landButton.addEventListener('click',function(){
        window.alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.textContent = 'The shuttle has landed.';
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.textContent = 0;
        rocket.style.bottom = '0px';
    })
    abortButton.addEventListener('click', function(){
        if (window.confirm('Confirm that you want to abort the mission.')){
            flightStatus.textContent = 'Mission aborted.';
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.textContent = 0;
            rocket.style.bottom = '0px';

        }
    })
    upButton.addEventListener('click', function() {
        let currentBottom = parseInt(rocket.style.bottom) || 0;
        rocket.style.bottom = (currentBottom + 10) + 'px';
        spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) + 10000;
    })
    downButton.addEventListener('click', function() {
        let currentBottom = parseInt(rocket.style.bottom) || 0;
        if (currentBottom > 0) {
            rocket.style.bottom = (currentBottom - 10) + 'px';
            spaceShuttleHeight.textContent = parseInt(spaceShuttleHeight.textContent) - 10000;
        }
    });
    
    rightButton.addEventListener('click', function() {
        let currentLeft = parseInt(rocket.style.left) || 0;
        rocket.style.left = (currentLeft + 10) + 'px';
    });
    
    leftButton.addEventListener('click', function() {
        let currentLeft = parseInt(rocket.style.left) || 0;
        rocket.style.left = (currentLeft - 10) + 'px';
    });
});
