
var b=27;
var m=9;
var d=0
while(b !=2*m){
	d++;
	b=b-1;
	m=m+1;
}
document.write(d);

var t=2000;
var k=200;
var sk=0;
while(t > 0){
	sk++;
	if(sk % 2 == 0){
		sk++;
	}
	t=t-k;
}
document.write(sk);