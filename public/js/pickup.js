'use strict'

AFRAME.registerComponent('pickup', {
    schema : {
        //list properties
        pickedUp: {type: 'bool', default: false}
    },
    init : function(){
        //called when program starts
        //only called once AFRAME is built

        const CONTEXT_AF        = this; // 'this' is this component
        CONTEXT_AF.camera       = document.querySelector('#camera');
        CONTEXT_AF.scene        = document.querySelector('#scene');
        //let pickedUp            = false;
        let clone;

        CONTEXT_AF.el.addEventListener('click', function() {

            if(this.pickedUp === true) {
                //drop
                clone = this.cloneNode(true);
                clone.pickedUp = false;
                CONTEXT_AF.scene.appendChild(clone);
                this.parentNode.removeChild(this);
                clone.setAttribute('position', {x: CONTEXT_AF.camera.object3D.position.x, z: CONTEXT_AF.camera.object3D.position.z});
                //Idk if everything is gonna have physics. I assume it will if its an interactable element.
                clone.setAttribute('dynamic-body', '')

                console.log("Dropped");
            }
            else{
                //pickup
                clone = this.cloneNode(true);
                clone.pickedUp = true;
                CONTEXT_AF.camera.appendChild(clone);
                this.parentNode.removeChild(this);
                clone.setAttribute('position', {x: 0.6, y: -0.6, z: -0.8})
                
                console.log("Picked Up");
            }
        })

        

    }
})