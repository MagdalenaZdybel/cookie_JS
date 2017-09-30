/*alert('uwagggggaaa!!!!');*/

window.onload = functon()
{
	var box = document.getElementById("box");
	var zrobCiasteczko = document.getElementById("zrobCiasteczko");

	info.innerHTML = document.cookie;

	zrobCiasteczko.onclick = functon()
	{
		var expirationDateCookie = new Date();
		expirationDateCookie.setDate(expirationDateCookie.getDate() + 30);
		document.cookie = "nazwa=ciacho;expires="+expirationDateCookie.toUTCString();
	};
};