'use strict'

AFRAME.registerComponent('growth', {
    schema: {
        objVal: { type: 'int', default: 0 }
    },
    init: function () {
        const CONTEXT_AF = this;
        const can = document.getElementById('can');
        const gm = document.getElementById('game');
        
        var grown = false;
        var hasCan = false;
        //console.log("PLANT loaded");
        CONTEXT_AF.el.addEventListener('click', function () {
            //console.log("PLANT CLICKET");
            if (hasCan && !grown) {
                switch (this.getAttribute("growth").objVal) {
                    case 0:
                        document.getElementById('plant01-01').setAttribute('visible', false);
                        document.getElementById('plant01-02').setAttribute('visible', true);
                        setTimeout(function () {
                            document.getElementById('plant01-02').setAttribute('visible', false);
                            document.getElementById('plant01-03').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant01-03').setAttribute('visible', false);
                            document.getElementById('plant01-04').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant01-04').setAttribute('visible', false);
                            document.getElementById('plant01-05').setAttribute('visible', true);
                        }, 1000);
                        break;
                    case 1:
                        document.getElementById('plant02-01').setAttribute('visible', false);
                        document.getElementById('plant02-02').setAttribute('visible', true);
                        setTimeout(function () {
                            document.getElementById('plant02-02').setAttribute('visible', false);
                            document.getElementById('plant02-03').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant02-03').setAttribute('visible', false);
                            document.getElementById('plant02-04').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant02-04').setAttribute('visible', false);
                            document.getElementById('plant02-05').setAttribute('visible', true);
                        }, 1000);
                        break;
                    case 2:
                        document.getElementById('plant03-01').setAttribute('visible', false);
                        document.getElementById('plant03-02').setAttribute('visible', true);
                        setTimeout(function () {
                            document.getElementById('plant03-02').setAttribute('visible', false);
                            document.getElementById('plant03-03').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant03-03').setAttribute('visible', false);
                            document.getElementById('plant03-04').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant03-04').setAttribute('visible', false);
                            document.getElementById('plant03-05').setAttribute('visible', true);
                        }, 1000);
                        break;
                    case 3:
                        document.getElementById('plant04-01').setAttribute('visible', false);
                        document.getElementById('plant04-02').setAttribute('visible', true);
                        setTimeout(function () {
                            document.getElementById('plant04-02').setAttribute('visible', false);
                            document.getElementById('plant04-03').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant04-03').setAttribute('visible', false);
                            document.getElementById('plant04-04').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant04-04').setAttribute('visible', false);
                            document.getElementById('plant04-05').setAttribute('visible', true);
                        }, 1000);
                        break;
                    case 4:
                        document.getElementById('plant05-01').setAttribute('visible', false);
                        document.getElementById('plant05-02').setAttribute('visible', true);
                        setTimeout(function () {
                            document.getElementById('plant05-02').setAttribute('visible', false);
                            document.getElementById('plant05-03').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant05-03').setAttribute('visible', false);
                            document.getElementById('plant05-04').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant05-04').setAttribute('visible', false);
                            document.getElementById('plant05-05').setAttribute('visible', true);
                        }, 1000);
                        break;
                    case 5:
                        document.getElementById('plant06-01').setAttribute('visible', false);
                        document.getElementById('plant06-02').setAttribute('visible', true);
                        setTimeout(function () {
                            document.getElementById('plant06-02').setAttribute('visible', false);
                            document.getElementById('plant06-03').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant06-03').setAttribute('visible', false);
                            document.getElementById('plant06-04').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant06-04').setAttribute('visible', false);
                            document.getElementById('plant06-05').setAttribute('visible', true);
                        }, 1000);
                        break;
                    case 6:
                        document.getElementById('plant07-01').setAttribute('visible', false);
                        document.getElementById('plant07-02').setAttribute('visible', true);
                        setTimeout(function () {
                            document.getElementById('plant07-02').setAttribute('visible', false);
                            document.getElementById('plant07-03').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant07-03').setAttribute('visible', false);
                            document.getElementById('plant07-04').setAttribute('visible', true);
                        }, 1000);
                        setTimeout(function () {
                            document.getElementById('plant07-04').setAttribute('visible', false);
                            document.getElementById('plant07-05').setAttribute('visible', true);
                        }, 1000);
                        //3am and im listening to this on repeat while getting this ready because brain is broke
                        //https://www.youtube.com/watch?v=pnCVYO9Aw20
                }
                grown = true;
                gm.emit('plant');
            }
        });

        can.addEventListener('click', function () {
            if (hasCan) {
                hasCan = false;
            }
            else {
                hasCan = true;
            }
        })


    }
});