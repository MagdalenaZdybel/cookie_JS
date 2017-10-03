/*alert('uwagggggaaa!!!!');*/

window.onload = function()
{
	var box = document.getElementById("box");
	var zrobCiasteczko = document.getElementById("zrobCiasteczko");

	

	zrobCiasteczko.onclick = function()
	{
		document.cookie = "imie=Magda;";
		box.innerHTML = document.cookie;
		//var expirationDateCookie = new Date();
		//expirationDateCookie.setDate(expirationDateCookie.getDate() + 30);
		//document.cookie = "nazwa=ciacho;expires="+expirationDateCookie.toUTCString();
	};
};