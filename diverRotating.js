// Diver Rotation
AFRAME.registerComponent('diver-rotation-reader', {

    schema: {
        speedOfRotation: { type: 'number', default: 0 },
    },

    init:function(){
        window.addEventListener('keydown',(e)=>{
            this.data.speedOfAscent = this.el.getAttribute('position');
            var diverPosition = this.data.speedOfAscent;

            if(e.key==='ArrowUp'){
                if(diverPosition.y<2){
                    diverPosition.y+=0.1;
                    this.el.setAttribute('position',diverPosition);
                }
            }

            if(e.key==='ArrowDown'){
                if(diverPosition.y>-2){
                    diverPosition.y-=2;
                    this.el.setAttribute('position',diverPosition);
                }
            }

            if(e.key==='ArrowRight'){
                if(diverPosition.x<2){
                    diverPosition.x+0.1;
                    this.el.setAttribute('position', diverPosition);
                }
            }

            if(e.key==='ArrowLeft'){
                if(diverPosition.x>-2){
                    diverPosition.x-=2;
                    this.el.setAttribute('position',diverPosition);
                }
            }

        });
    }
});


// Rotation Map
AFRAME.registerComponent('terrain-rotation-reader', {
    
    schema: {
        speedOfRotation: { type: 'number', default: 0 },
    },

    init: function(){
        window.addEventListener('keydown', (e)=>{
            if(e.key==='ArrowRight'){
                if(this.data.speedOfRotation<0.1){
                    this.data.speedOfRotation+=0.01;
                }
            }
            if(e.key==='ArrowLeft'){
                if(this.data.speedOfRotation > -0.1){
                    this.data.speedOfRotation -= 0.01;
                }
            }
        });
    },

    tick: function(){
        var mapRotation = this.el.getAttribute('rotation');
        mapRotation.y += this.data.speedOfRotation;
        this.el.setAttribute('rotation', {x: mapRotation.x, y: mapRotation.y, z: mapRotation.z });
    }
});
