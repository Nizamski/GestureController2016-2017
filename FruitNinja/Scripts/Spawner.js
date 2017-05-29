#pragma strict

var apple : GameObject;
var spawner_1 : GameObject;
var spawner_2 : GameObject;
var spawner_3 : GameObject;
var spawner_4 : GameObject;
var spawner_5 : GameObject; 

function Start () {

	InvokeRepeating("Spawn", 3, 3);
}

function Update () {

}

function Spawn() {

	var random = Random.Range(1,6);

	if (random == 1) {
		Instantiate (apple, Vector3(spawner_1.transform.position.x, spawner_1.transform.position.y, spawner_1.transform.position.z) , Quaternion.identity);
	}
	else if (random == 2) {
		Instantiate (apple, Vector3(spawner_2.transform.position.x, spawner_2.transform.position.y, spawner_2.transform.position.z) , Quaternion.identity);
	}
	else if (random == 3) {
		Instantiate (apple, Vector3(spawner_3.transform.position.x, spawner_3.transform.position.y, spawner_3.transform.position.z) , Quaternion.identity);
	}
	else if (random == 4) {
		Instantiate (apple, Vector3(spawner_4.transform.position.x, spawner_4.transform.position.y, spawner_4.transform.position.z) , Quaternion.identity);
	}
	else {
		Instantiate (apple, Vector3(spawner_5.transform.position.x, spawner_5.transform.position.y, spawner_5.transform.position.z) , Quaternion.identity);
	}
}
