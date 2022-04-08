'use strict'



AFRAME.registerComponent('ls1', {
    schema: {
    },
    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const l= document.getElementById('l1');
        let on = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            if (on){
                l.setAttribute('light', "intensity: 0.0;");
                on = false;
                gm.emit('lightOff');
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn');
            }
        });


    }
});

AFRAME.registerComponent('ls2', {
    schema: {
    },
    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const l= document.getElementById('l2');
        let on = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            if (on){
                l.setAttribute('light', "intensity: 0.0;");
                on = false;
                gm.emit('lightOff');
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn');
            }
        });


    }
});

AFRAME.registerComponent('ls3', {
    schema: {
    },
    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const l= document.getElementById('l3');
        let on = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            if (on){
                l.setAttribute('light', "intensity: 0.0;");
                on = false;
                gm.emit('lightOff');
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn');
            }
        });


    }
});

AFRAME.registerComponent('ls4', {
    schema: {
    },
    init: function () {
        const gm = document.getElementById('game');
        const CONTEXT_AF = this; //this refers to 'this' component, because 'this' in an event listener refers to something else.
        const l= document.getElementById('l4');
        let on = true;

        CONTEXT_AF.el.addEventListener('click', function () {
            if (on){
                l.setAttribute('light', "intensity: 0.0;");
                on = false;
                gm.emit('lightOff', null, true);
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn', null, true);
            }
        });


    }
});


