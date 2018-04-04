function error() {
	window.alert("404 PAGE NOT FOUND");
	document.getElementById("searchInput").value = "";
}

function loginError() {
	window.alert("ERROR! User not found");
	document.getElementById("login").value = "";
}