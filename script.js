/* global expirationDateCookie, expirationDataCookie */

/*alert('uwagggggaaa!!!!');*/
//posta� cookies: klucz=wartosc;klucz2=wartosc2;
//"path=/" ciastko kt�re jest dost�pne w ka�dym subfolderze (bez tego tylko w tym folderze w kt�rym zosta� stworzony)
//expires= data wa�no�ci ciasteczka po zako�czeniu sesji. Przy tej opcji musimy tworzy� var x = new Date(); np. document.cookie = "imie=Magda;max-age="+expirationDataCookie.toUTCString();
//max-age=masymalny czas wa�nosci cookie (UWGA w sekundach)

window.onload = function()
{
	var box = document.getElementById("box");
	var zrobCiasteczko = document.getElementById("zrobCiasteczko");
        var usunCiasteczko = document.getElementById("usunCiasteczko");
        
	box.innerHTML = document.cookie;


	zrobCiasteczko.onclick = function()
	{
            var expirationDataCookie = new Date();
            expirationDataCookie.setDate(expirationDateCookie.getDate()+30);
                        
            document.cookie = "imie=Magda;max-age="+60*60+";path=/";
            document.cookie = "nazwisko=Zdybel;max-age="+60*60+";path=/";

	};
        usunCiasteczko.onclick = function()
        {
            var expirationDataCookie = new Date();
            expirationDataCookie.setDate(expirationDateCookie.getDate()-1);
            
            document.cookie = "imie=;expires="+expirationDateCookie.toUTCString()+";path=/";
        };
};