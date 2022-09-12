Inlämningsuppgift #2

I det här projektet experimenterar jag ännu mer med map, filter och routers.
Jag har tittat på parametrar, och hur man kan skicka state via Link.
Jag lärde mig att jag kunde göra en egen hook - useFetch - och har använt den för att slippa upprepa kod. Jag har även tittat på en scroll-funktion, men har inte fått det att fungera. Jag har också tittat på hur jag kan konvertera userId till namn - tex 1 till "Håkan".
Jag har också testat CSS-moduler(sass). Jag har tittat väldigt hastigt på att göra hemsidan responsiv.

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
KLART

-->
Det ska även finnas en knapp för att gå tillbaka till listan över samtliga inlägg (startsidan).


Tekniska krav
En användare ska kunna skriva in ett id i URL:en (t.ex /post/9) och kunna se inlägget med det id:et.

Lycka till!

Deadline
Inlämning senast 20 september 2022
