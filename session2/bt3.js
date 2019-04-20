function taxi(a) {
	a = document.getElementById('km').value;
var t, f, s, n;
	f=15000;
	s=30000;
	n=8000;

	if (a<=1) {
		document.getElementById('result').innerHTML = "Tổng là "+f ;
	}
	else{
		if (a>30) {
			t=f + s*30 + n*(a-30);
			document.getElementById('result').innerHTML = "Tổng là "+t ;
		}
		else{
			t=f + s*a;
			document.getElementById('result').innerHTML = "Tổng là "+t  ;
		}
	}

}

