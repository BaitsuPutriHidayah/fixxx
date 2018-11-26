function notif(){
	var data = confirm('Apakah data sudah benar?');
	if(data===true){
		alert('Selamat Anda Berhasil LogIn');
	} else {
		alert('Pastikan data yang anda masukkan benar');
	}
}