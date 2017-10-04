/* global expirationDateCookie, nazwisko */

var expirationDataCookie = new Data();

function removeCookie(name)
{
    //var expirationDateCookie = new Date();
    expirationDateCookie.setTime(expirationDateCookie.getTime()-1);
    document.cookie = name+"=;expires="+expirationDateCookie.toUTCString()+";path=/";
};

window.onload = function()
{
	var box = document.getElementById("box");
	var zrobCiasteczko = document.getElementById("zrobCiasteczko");
        var usunCiasteczko = document.getElementById("usunCiasteczko");
        
	box.innerHTML = document.cookie;


	zrobCiasteczko.onclick = function()
	{
           // var expirationDateCookie = new Date();
            expirationDateCookie.setDate(expirationDateCookie.getDate()+30);
                        
            document.cookie = "imie=Magda;max-age="+60*60+";path=/";
            document.cookie = "nazwisko=Zdybel;max-age="+60*60+";path=/";

	};
        usunCiasteczko.onclick = function()
        {
            removeCookie(nazwisko);
        };
};