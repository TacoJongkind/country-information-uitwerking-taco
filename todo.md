Stappenplan

Vraag 1 Maak een 'Zoek'-knop op de pagina en koppel deze aan een functie die de gegevens over België ophaalt en dit in de console logt.
Maak een knop in de HTML
Sla de referentie naar de HTML knop op in de JS
Zet een event-listener (click) op de knop en verwijs naar de functie (searchCountry)
Declareer de functie searchCountry
Volg de stappen voor het maken van een request om de data over Belgie op te halen

Vraag 2 en 3 Maak op basis van de response de volgende string en log dit in de console
Check in de console hoe jouw data eruit ziet (is het een array? Is het een object?)
Probeer eerst even alle data die je nodig hebt apart in de console te loggen
Voeg alle data samen tot één string en sla die op in een variabele

Vraag 4 Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt. In een land kunnen één of twee currencies gebruikt worden:
1 valuta: and you can pay with [currency]'s 2 valuta's: and you can pay with [currency]'s and [currency]'s

Declareer een aparte functie die een array van currencies verwacht
Loop over de array heen en maak op basis van de lengte van de array een string
Return het resultaat
Test of dit werkt door vanuit de searchCountry functie deze functie aan te roepen en hieraan de currencies van belgie mee te geven!

Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
1 taal: They speak [language] 2 talen: They speak [language] and [language] 3 talen: They speak [language], [language] and [language] etc.

Declareer een functie die een array van talen verwacht (strings)
Loop over de array heen en maak op basis van de lengte van de array een string
Return het resultaat
Test of dit werkt door vanuit de searchCountry functie deze functie aan te roepen en hieraan de languages van belgie mee te geven!

Vraag 7. Zorg ervoor dat de opgehaalde data op de volgende manier wordt toegevoegd aan de DOM
Maak een container element in de HTML
Sla de referentie (getElementById) op in de JS
Maak een image-element in JS
Maak een h1-element in JS
Maak nog drie p-elementen voor de beschrijvende tekst in JS
Stop de strings die je met bovenstaande functies hebt gegenereert als textContent op de tekst-elementen
Zet een src-attribuut op het image-element met de waarde van de link naar het vlaggetje (en een alt!)
Voeg de elementen één voor één toe aan het container-element met appendChild

Om een request te kunnen maken hebben we nodig:
Kijk naar welk endpoint/uri wij een request willen maken en wat voor soort request hebben we nodig?
Installeer axios
Importeer axios
Maak een asynchrone functie
Maak een variabele waarin, met het await keyword een axios GETrequest wordt gemaakt naar het juiste endpoint
Check yourself before you wreck yourself! Wat krijgen we terug? Log het in de console!
Doe iets met de data (opslaan in variabele o.i.d.)
Kijk hoe je de juiste data uit de response krijgt
Maak een try / catch blok met alle voorgaande code in de try.