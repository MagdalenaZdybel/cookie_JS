/* global expirationDateCookie, nazwisko */

//var expirationDataCookie = new Data();

function createCookie(name, value, days)
{
    var expires = '';
    
    if (days)
    {
    var expirationDateCookie = new Date();
    expirationDateCookie.setDate(expirationDateCookie.getDate()+days);
    expires = ";expires=" + expirationDateCookie.toUTCString();
    };
    
    document.cookie = name + "-" + value + expires +";path=/";
};

function removeCookie(name)
{
    var expirationDateCookie = new Date();
    expirationDateCookie.setTime(expirationDateCookie.getTime()-1);
    document.cookie = name+"=;expires="+expirationDateCookie.toUTCString()+";path=/";
};

function getCookieByName(name)
{
    var cookies = document.cookie.split("; ");
    
    for (var i = 0; i < cookies.length; i++)
    {
        
    };
};
window.onload = function()
{

	var box = document.getElementById("box");
	var zrobCiasteczko = document.getElementById("zrobCiasteczko");
        var usunCiasteczko = document.getElementById("usunCiasteczko");
        
	box.innerHTML = document.cookie;


	zrobCiasteczko.onclick = function()
	{

            
            createCookie("imie", "Magda", 30);
            createCookie("nazwisko", "Zdybel");
            
            //document.cookie = "imie=Magda;max-age="+60*60+";path=/";
            //document.cookie = "nazwisko=Zdybel;max-age="+60*60+";path=/";

	};
        usunCiasteczko.onclick = function()
        {
            removeCookie(nazwisko);
        };
};