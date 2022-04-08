'use strict'



AFRAME.registerComponent('frame1', {
    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const frame= document.getElementById('frame1');
        let messy = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            console.log("frame clicked");
            if (messy){
                frame.setAttribute('rotation', "0 90 0");
                messy = false;
                gm.emit('rotateOff');
            }
            else{
                frame.setAttribute('rotation', "0 90 12");
                messy = true;
                gm.emit('rotateOn');
            }
        });
    }
});

AFRAME.registerComponent('frame2', {
    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const frame= document.getElementById('frame2');
        let messy = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            console.log("frame clicked");
            if (messy){
                frame.setAttribute('rotation', "0 90 0");
                messy = false;
                gm.emit('rotateOff');
            }
            else{
                frame.setAttribute('rotation', "0 90 -20");
                messy = true;
                gm.emit('rotateOn');
            }
        });
    }
});

AFRAME.registerComponent('frame3', {
    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const frame= document.getElementById('frame3');
        let messy = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            console.log("frame clicked");
            if (messy){
                frame.setAttribute('rotation', "0 90 0");
                messy = false;
                gm.emit('rotateOff');
            }
            else{
                frame.setAttribute('rotation', "0 90 19");
                messy = true;
                gm.emit('rotateOn');
            }
        });
    }
});

AFRAME.registerComponent('frame4', {

    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const frame= document.getElementById('frame4');
        let messy = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            console.log("frame clicked");
            if (messy){
                frame.setAttribute('rotation', "180 0 0");
                messy = false;
                gm.emit('rotateOff');
            }
            else{
                frame.setAttribute('rotation', "180 0 -8");
                messy = true;
                gm.emit('rotateOn');
            }
        });
    }
});