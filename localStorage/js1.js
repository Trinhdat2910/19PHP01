function showImg(img){
	document.getElementById('detail').style.display=('block');
	switch(img){
		case 'samsung':

			document.getElementById('changeimg').src="samsung.jpg";
			
			break;
		case 'lg':
			
			document.getElementById('changeimg').src="lg.jpg";
			

			break;
		case 'hp':

			document.getElementById('changeimg').src="hp.jpg";
			break;
		case 'dell':
			
			document.getElementById('changeimg').src="dell.jpg";
			break;
		default:
			break;
	}

}