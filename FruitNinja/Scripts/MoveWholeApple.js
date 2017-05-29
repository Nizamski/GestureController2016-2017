#pragma strict

static var make : boolean;
var apple : Transform;
var half : GameObject;
var random: int;
var yellow : Material;
var red : Material;
var yellowHalf : Material;
var redHalf : Material;
var currentMaterial : Material;

 
function Start () {
 
	apple = this.transform.parent;
	random = Random.Range(1,4);
	switch(random){
		case 1: gameObject.renderer.material = yellow;
				currentMaterial = yellowHalf;
			break;
		case 2: gameObject.renderer.material = red;
				currentMaterial = redHalf;
			break;
	}
}
 
function Update () {
 
   apple.transform.position = Vector3.MoveTowards(transform.position, Vector3(0,0,30), 0.2);
 
}
 
function OnMouseOver(){
    //if(Input.GetMouseButtonDown(0)){
   		
       var wholeApple = Instantiate (half, 
       Vector3(apple.transform.position.x,apple.transform.position.y, apple.transform.position.z) ,
        Quaternion.identity);
        var half1 = wholeApple.transform.GetChild(0).GetChild(0);
        half1.renderer.material = currentMaterial;
   		
   		var half2 = wholeApple.transform.GetChild(1).GetChild(0);
        half2.renderer.material = currentMaterial;
        
       Destroy(gameObject); 
    //}
}
