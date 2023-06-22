


window.addEventListener('load', function() {
    let manDiv = document.getElementById('man');
    let hollDiv = document.getElementById('holl');
    let manImg = manDiv.querySelector('img');

    manDiv.style.top = hollDiv.offsetTop + 'px';
    manDiv.style.left = hollDiv.offsetLeft + 'px';
    manDiv.style.bottom = '0px';
    manDiv.style.zIndex = '2';
    manDiv.style.marginRight = '200px';

    hollDiv.style.position = 'relative';
    hollDiv.style.marginTop = '600px';
    

    hollDiv.style.zIndex = '1';

    document.addEventListener('keydown', function(event) {
        var keyCode = event.keyCode;
        var step = 10;

        if (keyCode === 37) {

            manDiv.style.left = (parseInt(manDiv.style.left) - step) + 'px';
        } else if (keyCode === 39) {
            manDiv.style.left = (parseInt(manDiv.style.left) + step) + 'px';
        } else if (keyCode === 38) {
            
            manDiv.style.top = (parseInt(manDiv.style.top) - step) + 'px';
        } else if (keyCode === 40) {
        
            manDiv.style.top = (parseInt(manDiv.style.top) + step) + 'px';
        }
        
        
        if (checkCollision(manDiv, hollDiv)) {
            manImg.style.display = 'none';
           
        } else {
            manImg.style.display = 'block';
        }
    });

    
    function checkCollision(div1, div2) {
        var rect1 = div1.getBoundingClientRect();
        var rect2 = div2.getBoundingClientRect();
        
        return (
            rect1.left < rect2.right &&
            rect1.right > rect2.left &&
            rect1.top < rect2.bottom &&
            rect1.bottom > rect2.top
        );
    }
});




