#pragma strict

var apple : GameObject;

function Start () {

	InvokeRepeating("Spawn", 7, 7);
	InvokeRepeating("Spawn2", 3, 3);
	InvokeRepeating("Spawn3", 9, 9);
	InvokeRepeating("Spawn4", 5, 5);
}

function Update () {

}

function Spawn() {

	Instantiate (apple, Vector3(transform.position.x,transform.position.y, transform.position.z) , Quaternion.identity);
}

function Spawn2() {

	Instantiate (apple, 
	Vector3(transform.position.x - 1,transform.position.y + 1, transform.position.z) ,
	Quaternion.identity);
}

function Spawn3() {

	Instantiate (apple, 
	Vector3(transform.position.x - 1,transform.position.y - 3, transform.position.z) ,
	Quaternion.identity);
}

function Spawn4() {

	Instantiate (apple, 
	Vector3(transform.position.x,transform.position.y - 2, transform.position.z) ,
	Quaternion.identity);
}