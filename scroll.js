var Q = {}
    var container = document.querySelector('.section')
	
	Q.Y = 0
    function scroll(event) {
        event.preventDefault();
        Q.Y -= event.deltaY;
        console.log(Q.Y)

        var bottom = - (container.scrollHeight - container.scrollTop) + (window.innerHeight - 50)
        console.log(bottom)
        if( bottom > Q.Y){
             Q.Y = bottom
        }
        if (Q.Y > 0) {
            Q.Y = 0;
        }
      
 
        TweenMax.to('.section', 1.2 , {
            y: Q.Y,
            ease:   Expo.easeOutExpo,
            overwrite: 'auto'
        });
    }

    window.addEventListener('wheel', scroll);