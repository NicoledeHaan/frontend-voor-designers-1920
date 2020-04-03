# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Carousel met foto's van films: Een carousel met meerdere foto's van films, die je kan bedienen met een button en met de pijltjes op het toetsenbord.

Ik ben begonnen met het schetsen van mijn eerste idee. Mijn idee is om een carousel te maken met foto's van films. Ik wil dat je de foto helemaal te zien krijgt en vervolgens buttons op het scherm heb links en rechts, als je hier op klikt krijg je de volgende afbeelding te zien etc. Verder wil ik dat de carousel ook te bedienen is met tabben en toetsenbord. Om de gebruiker feedback te geven hoeveel foto's er zijn en waar hij/zij nu is wil ik onderin bolletjes plaatsen en dat bijvoorbeeld het tweede bolletje gevuld is als je de tweede foto te zien krijgt. Verder wil dat als je hovert over de foto je extra informatie te zien krijgt over de film. Hieronder vind je mijn volledige idee geschetst: 
![4d1f0ae8-c055-4cb4-91a6-624ab436dbb4](https://user-images.githubusercontent.com/58775312/78297245-8005d500-752f-11ea-9f93-e14d1e59437d.jpg)

Vervolgens ben ik begonnen met het coderen van mijn idee. Ik heb mijn code van opdracht twee gekopieerd. Verder heb ik als eerste met JavaScript de films opgehaald van de externe data. Ik heb mijn ul niet meer in HTML staan, maar in Javascript met innerHTML. Hierdoor krijg ik alsnog de carousel te zien die ik in opdracht 2 had. Bekijk hieronder de eerste versie van de site: 
<img width="904" alt="Schermafbeelding 2020-03-24 om 16 37 14" src="https://user-images.githubusercontent.com/58775312/78365761-d91d4980-75bf-11ea-9f5a-2dca7da7dd6f.png">

Vervolgens ben ik nog meer data uit de externe bron gaan halen, namelijk de reviews, maar alleen de getallen hiervan. Bekijk hieronder de tweede versie van mijn site: 
<img width="1440" alt="Schermafbeelding 2020-03-24 om 16 37 22" src="https://user-images.githubusercontent.com/58775312/78365846-f7834500-75bf-11ea-8759-4374fbe555e9.png">

Ik wilde boven de foto van de film de bijbehorende titel hebben, deze heb ik uit de externe data gehaald en vormgegeven, bovenaan gezet en de tekst wit gemaakt. Bekijk hieronder de tweede derde versie van mijn site:
<img width="957" alt="Schermafbeelding 2020-03-24 om 16 37 36" src="https://user-images.githubusercontent.com/58775312/78366006-2c8f9780-75c0-11ea-9e92-e6346a6747ac.png">

Vervolgens heb ik de laatste externe data gehaald die ik wilde hebben. Ik wilde extra film informatie laten zien, zoals plot, genre, release date. Ik heb de text kleur rood gemaakt, zodat ik voor nu even makkelijk kon zien wat ik heb opgehaald. Bekijk hieronder de vierde versie van mijn site:
<img width="744" alt="Schermafbeelding 2020-03-24 om 21 50 36" src="https://user-images.githubusercontent.com/58775312/78369456-83e43680-75c5-11ea-9005-7b73ba4dd601.png">

Ik wilde zodra je over de film heen hovert je pas de extra film informatie te zien kreeg, ik kreeg dit niet voor elkaar. Ik heb Sanne hierover gemaild en hij heeft mij hierbij geholpen. Bekijk hieronder de vijfde versie van mijn site:
<img width="749" alt="Schermafbeelding 2020-04-01 om 20 46 03" src="https://user-images.githubusercontent.com/58775312/78369500-92cae900-75c5-11ea-81f8-afe9afd7efe3.png">

De film + titel stonden nu naast elkaar, maar ik wilde dit onder elkaar hebben. Het koste mij verbazigwekkend veel moeite om dit te doen. Ik had het eerst voor elkaar, maar duurde me enorm lang voordat ik het weer goed had. Bekijk hieronder de zesde versie van mijn site:
<img width="1133" alt="Schermafbeelding 2020-04-02 om 22 05 09" src="https://user-images.githubusercontent.com/58775312/78369592-b7bf5c00-75c5-11ea-9f28-0db9e716cfad.png">

Als laatste heb ik de tekstkleur rood weer verandert naar wit. Ik wilde inplaats van de simple plot de uitgebreide plot, dit heb ik weer uit de externe bron gehaald. Vervolgens heb ik de hover kleur verandert naar een lichtere kleur die beter bij de foto's past. Ik ben enorm blij met het eindresultaat. Vooral omdat ik grotendeels zelf heb gedaan wat ik niet dacht dat mij zou lukken, zoals alle data heb ik zelf opgehaald uit de externe bron. Ik dacht dat deze opdracht mij veel moeizamer zal verlopen, het koste mij veel tijd maar ik kwam er wel zelf uit daar ben ik erg blij mee. Ik zat er in het begin erg tegenop omdat ik niet zo goed begreep hoe dit allemaal nou werkte en omdat het met meeer Javascript is. Uiteindelijk is het me gelukt en daar ben ik super blij mee en stiekem een beetje trots op ;). Bekijk hieronder de laatste versie van mijn site:
<img width="778" alt="Schermafbeelding 2020-04-02 om 22 03 36" src="https://user-images.githubusercontent.com/58775312/78369612-c1e15a80-75c5-11ea-936e-f94ba1443f42.png">
