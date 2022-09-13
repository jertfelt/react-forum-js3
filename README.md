Inlämningsuppgift #2
![image](https://user-images.githubusercontent.com/30622818/189852499-0035c582-9f62-4d37-a10e-ffbf5022fc38.png)

 <p>I det här projektet experimenterar jag ännu mer med map, filter och routers.
              <br/>
             Jag har tittat på parametrar, och hur man kan skicka state via Link.
             <br/>
             Jag har även, utöver uppgifterna, labbat med att filtrera materialet. Samt försökt få den fetchade listan att hamna in en Infinite Scroller.
            <br/>
             Jag lärde mig att jag kunde göra en egen hook - useFetch - och har använt den för att slippa upprepa kod. 
             <br/>
             Jag har också tittat på hur jag kan konvertera userId till namn - tex 1 till "Håkan", och har testat lite olika varianter. Det som krånglar är att jag på något sätt inte får propsen att exporteras från Homepage till SelectFilter, det blir bara undefined för tillfället. Ska felsöka!
             <br/>
              Jag har också testat CSS-moduler(sass). Jag har tittat väldigt hastigt på att göra hemsidan responsiv.
              
          
FILTRERING: ![image](https://user-images.githubusercontent.com/30622818/189852090-de49188e-c412-45c5-96f4-6fec83ecd626.png)

ALLA INLÄGG:
![image](https://user-images.githubusercontent.com/30622818/189852131-0ee2d0be-a638-4954-87d2-4dad653b0163.png)
 
INDIVIDUELL: 
 
![image](https://user-images.githubusercontent.com/30622818/189852201-124b4b8f-7f83-437c-b5e5-51e345e1c1d1.png)
![image](https://user-images.githubusercontent.com/30622818/189852244-ec2a3e04-63cf-4567-9467-d2f19b83066e.png)
 
 
<h1>Instruktioner: </h1>

Inlämningsuppgift 2 - React Forum POC (Proof of Concept)

Din uppgift är att skapa ett forum som innehåller inlägg och kommentarer. Alla dessa ska hämtas från följande API-endpoints:

Inlägg: https://jsonplaceholder.typicode.com/posts
Kommentarer: https://jsonplaceholder.typicode.com/comments

/ (startsidan)

Användaren ska se samtliga inlägg - skriv endast ut titel för inläggen.
När man klickar på titeln för ett inlägg ska användaren navigeras till en ny sida med URL:en /post/:id .
KLART

/post/:id

Här ska användaren kunna se inläggets titel och textinnehåll. Skriv även ut samtliga kommentarer som gjorts i detta inlägg. Varje kommentar ska innehålla dess textinnehåll, samt namn och mail på personen som kommenterat.

Det ska även finnas en knapp för att gå tillbaka till listan över samtliga inlägg (startsidan).
KLART


Tekniska krav
En användare ska kunna skriva in ett id i URL:en (t.ex /post/9) och kunna se inlägget med det id:et.

Lycka till!

Deadline
