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
                this.setAttribute('rotation', '180 90 0')
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn');
                this.setAttribute('rotation', '0 90 0')
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
                this.setAttribute('rotation', '180 90 0')
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn');
                this.setAttribute('rotation', '0 90 0')
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
                this.setAttribute('rotation', '180 180 0')
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn');
                this.setAttribute('rotation', '0 180 0')
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
                this.setAttribute('rotation', '180 180 0')
            }
            else{
                l.setAttribute('light', "intensity: 2.0;");
                on = true;
                gm.emit('lightOn', null, true);
                this.setAttribute('rotation', '0 180 0')
            }
        });


    }
});


