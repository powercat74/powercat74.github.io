var bgCanvas = document.getElementById('bgCanvas');
var techCanvas = document.getElementById('techCanvas');
	
function render() {

    bgCanvas.patternizer({
        stripes : [ 
    {
        color: '#000000',
        rotation: 45,
        opacity: 100,
        mode: 'normal',
        width: 1,
        gap: 6,
        offset: 0
    }
],
bg : '#1b1b1b'
    });
		
	
	techCanvas.patternizer({
	stripes : [ 
    {
       color: '#1d4566',
        rotation: 45,
        opacity: 100,
        mode: 'normal',
        width: 1,
        gap: 6,
        offset: 0
    }
],
bg : '#264f8b'
});
    
}
render();

/*
// resize the canvas to the window size
function onResize() {
    
    // number of pixels of extra canvas drawn
    var buffer = 100;

    // if extra canvas size is less than the buffer amount
    if (bgCanvas.width - window.innerWidth < buffer ||
        bgCanvas.height - window.innerHeight < buffer) {
        
        // resize the canvas to window plus double the buffer
        bgCanvas.width = window.innerWidth + (buffer * 2);
    	bgCanvas.height = window.innerHeight + (buffer * 2);
    	
    	render();
    }	

}

function init() {
    onResize();
    // create a listener for resize
    // cowboy's throttle plugin keeps this event from running hog wild
    window.addEventListener('resize', Cowboy.throttle(200, onResize), false);
}

init();*/