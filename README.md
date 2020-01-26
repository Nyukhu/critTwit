# CRITWIT

### But de l'application : 
L'application critwit a pour but de permettre à des dessinateurs d'obtenir des critiques constructives sur leurs oeuvres 

   Elle récupère en temps réel les tweets comportant le #artcritweet et les affiche aux utilisateurs de l'app.  
Depuis l'application les utilisateurs, peuvent noter un dessin sur plusieurs critères. Ils peuvent aussi laisser un court commentaire afin de donner des indications plus précises.  
Une fois envoyée la critique ou "review" sera transmise en reponse au tweet d'origine.

### Choix :

#### L'arborescence du projet 

   J'ai choisi de structurer le projet de sorte à ce que je puisse par le futur rajouter d'autres résaux sociaux et sources de dessins a l'application.

#### Pourquoi un dessin et pas le tweet en entier ?

   J'ai fais le choix d'afficher juste l'image afin de conserver l'anonyma sur l'artiste pour que la critique ne s'en trouve pas influencée.

#### Pourquoi un #artcritweet plutot qu'un filtre sur des mots clés ?

   J'ai choisi  de créer un # spécial car d'une part, l'application se retrouverai floodé de dessins d'auteurs qui ne veulent pas forcement / ne préteront pas d'attention à la critique.  
    La requête de critique doit etre une volonté de l'artiste.
 
#### Pourquoi un darktheme ? 
    
  > because light arract bugs 


### Difficultés techniques

  la plus grosse difficulté que j'ai rencontré était lié au js lui-même, en effet j'ai passé beaucoup de temps sur un bug qui venait du fait que l'id d'un tweet était un entier trop gros qui était donc arrondi sans renvoyer d'erreurs
  sinon a part ca tout s'est déroulé sans accros majeurs

### Pistes d'amélioration 

L'app pourrait etre améliorée sur plusieur points
- Ajouter des comptes et un system permettant de voir les review directement sur l'app afin de s'affranchir de la limite de caracteres de twitter
- Intéger d'autres réseaux sociaux tel que facebook, discord ou encore deviant-art
- Faire un systeme de points / niveaux pour gamifier un peut le truc et pousser les artistes a s'améliorer.
- Faire un systeme d'évaluation des compétences des "critiques" d'arts afin que les notes qu'ils attribuent soient pondérée.
- etc.


