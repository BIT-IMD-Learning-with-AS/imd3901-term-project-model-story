'use strict'

AFRAME.registerComponent('placement', {
    schema : {
        //list properties
    },
    init : function(){
        //called when program starts
        //only called once AFRAME is built

        const CONTEXT_AF        = this; // 'this' is this component
        CONTEXT_AF.scene        = document.querySelector('#scene');
        let clone;

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log("test");
            //drop
            let bruh = document.querySelectorAll('.interactive');
            for(let i = 0; i < bruh.length; i++){
                console.log(bruh[i].getAttribute('pickup'));
                if(bruh[i].getAttribute('pickup') === true){
                    console.log(bruh);

                    /*clone = CONTEXT_AF.cloneNode(true);
                    clone.pickedUp = false;
                    CONTEXT_AF.scene.appendChild(clone);
                    CONTEXT_AF.parentNode.removeChild(CONTEXT_AF);
                    clone.setAttribute('position', {x: CONTEXT_AF.placement.object3D.position.x, z: CONTEXT_AF.placement.object3D.position.z});
                    clone.setAttribute('dynamic-body', '')

                    console.log("Dropped");*/
                }
            }
            
        })

    }
})