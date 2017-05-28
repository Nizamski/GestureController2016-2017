#pragma strict

var speed : float = 5.0f; 
var cut : int;

function Start () {

	cut = 0;
	yield WaitForSeconds(1);
	cut = 1;
}

function Update () {

	if (cut == 0) {
		gameObject.transform.position = Vector3.MoveTowards(transform.position, Vector3(0,0,32),   speed*Time.deltaTime);
	}

}