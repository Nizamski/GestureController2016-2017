#pragma strict

static var make : boolean;
var apple : Transform;
var half : GameObject;
var random: int;
 
 function Start () {
 
	apple = this.transform.parent;
	random = 0;
 }
 
 function Update () {
 
 	switch(random){
 		case 0: apple.transform.position = Vector3.MoveTowards(transform.position, Vector3(0,-5,32), 0.2);
 				random++;
 			break;
 		case 1: apple.transform.position = Vector3.MoveTowards(transform.position, Vector3(0,10,32), 0.1);
 				random++;
 			break;
 		case 2: apple.transform.position = Vector3.MoveTowards(transform.position, Vector3(10,0,32), 0.15);
 				random = 0;
 			break;
 	}
  
  
 }
 
 function OnMouseOver(){
    //if(Input.GetMouseButtonDown(0)){
        Instantiate (half, Vector3(apple.transform.position.x,apple.transform.position.y, apple.transform.position.z) , Quaternion.identity);
       Destroy(gameObject);
    //}
}