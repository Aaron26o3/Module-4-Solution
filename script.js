var names=new Array();
names[0]="Yaakov";
names[1]="Jhon";
names[2]="jen";
names[3]="jason";
names[4]="Paul";
names[5]="frank";
names[6]="larry";
names[7]="lara";
names[8]="Jim";
names[9]="yono";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j') {
		console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}