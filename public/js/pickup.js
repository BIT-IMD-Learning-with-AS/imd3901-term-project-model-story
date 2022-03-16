'use strict'

AFRAME.registerComponent('pickup', {
    schema : {
        //list properties
        pickedUp: {type: 'bool', default: false},
        objVal: {type: 'int', default: 0}
    },
    init : function(){
        //called when program starts
        //only called once AFRAME is built

        const CONTEXT_AF        = this; // 'this' is this component
        CONTEXT_AF.camera       = document.querySelector('#camera');
        CONTEXT_AF.scene        = document.querySelector('#scene');

        CONTEXT_AF.placement1 = document.querySelector('#placement1');
        let placePos1X = CONTEXT_AF.placement1.object3D.position.x;
        let placePos1Z = CONTEXT_AF.placement1.object3D.position.z;

        let clone;
        let objPosX;
        let objPosZ;

        let reachDist = 2;

        CONTEXT_AF.el.addEventListener('click', function() {
            //Check if picked up
            if(this.pickedUp === true) {
                //Get Positions of object
                objPosX = CONTEXT_AF.camera.object3D.position.x;
                objPosZ = CONTEXT_AF.camera.object3D.position.z;
 
                if(this.getAttribute("pickup").objVal == 1 && Math.abs(objPosX - placePos1X) < reachDist && Math.abs(objPosZ - placePos1Z) < reachDist){
                    //If Object 1 and near Placement

                    //Clone object + add to scene
                    clone = this.cloneNode(true);
                    clone.pickedUp = false;
                    CONTEXT_AF.scene.appendChild(clone);
                    this.parentNode.removeChild(this);

                    //Set Position to Placement
                    clone.setAttribute('position', {x: CONTEXT_AF.placement1.object3D.position.x, y: CONTEXT_AF.placement1.object3D.position.y, z: CONTEXT_AF.placement1.object3D.position.z});
                }
                else{
                    //Drop

                    //Clone object + add to scene
                    clone = this.cloneNode(true);
                    clone.pickedUp = false;
                    CONTEXT_AF.scene.appendChild(clone);
                    this.parentNode.removeChild(this);

                    //Set Position to camera
                    clone.setAttribute('position', {x: CONTEXT_AF.camera.object3D.position.x, z: CONTEXT_AF.camera.object3D.position.z});
                    
                    //Not sure if everything is going to have physics. I assume it will if its an interactable element.
                    //dynamic-body needs to be re-added
                    clone.setAttribute('dynamic-body', '')
                }
            }
            else{
                //Pickup

                //Clone object + add to camera
                clone = this.cloneNode(true);
                clone.pickedUp = true;
                CONTEXT_AF.camera.appendChild(clone);
                this.parentNode.removeChild(this);

                //Set Position on camera
                clone.setAttribute('position', {x: 0.6, y: -0.6, z: -0.8});
            }
        })
    }
})