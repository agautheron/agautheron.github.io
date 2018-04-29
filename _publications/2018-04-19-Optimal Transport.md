---
title: "Optimal Tansport"
collection: publications
permalink: /publication/2018-04-19-Optimal Transport
excerpt: 
date: 2018-04-19
venue: 'INSA Rouen Normandie'
paperurl: 'https://github.com/tschmoderer/2018-optimal-transport-prj'
citation: 'Schmoderer T., (2018). &quot;Transport Optimal, Théorie et Applications&quot;, INSA Rouen Normandie.'
---
Le présent rapport rend compte du travail effectué pour mon projet de fin d’études (PFE)
dans le cadre de mon dernier semestre au département de Génie Mathématique de l’INSA
de Rouen Normandie. Le projet proposé, par Carole Le Guyader et Vincent Duval, était
de s’attaquer à la découverte de la théorie du transport optimal. Comme nous allons le
voir, ce projet m’a amené bien au delà de cette théorie en me faisant explorer la théorie des
opérateurs proximaux et en proposant un sérieux défi numérique lors de l’implémentation.
Le problème du transport optimal prend ses racines pendant la Révolution française. Un
ingénieur français, Gaspard Monge, s’intéresse au problème de transport de ressources d’un
site d’extraction à un site de production. Son objectif est de minimiser un coût, que l’on
imagine proportionnel à la masse déplacée et à la distance parcourue. C’est le Mémoire sur
la théorie des déblais et des remblais de 1781 [7]. La formulation moderne est donnée par un
mathématicien russe, Leonid Kantorovitch dans les années 1940. La théorie du transport
optimal obtient ses lettres de noblesse dans les années 2000 avec le papier de Jean-David
Benamou et Yann Brenier [1]. En explorant un lien, étroit mais pas surprenant, entre la
théorie du transport et la mécanique des fluides, ils remettent au gout du jour le problème
de transport optimal.


Dans ce projet, nous avons étudié, l’article fondateur de Benamou et Brenier, puis nous
sommes assez rapidement passés sur l’article de Papadakis, Peyré, Oudet [8] pour la partie
numérique. Le projet nous a également emmené voir du côté de l’article de Pesquet et
Combettes sur la théorie des opérateurs proximaux [4], et du livre de Santambrogio [10]
pour la partie théorique.
Dans ce rapport, j’ai souhaité être le plus exhaustif possible, la quasi-totalité des énoncés
sont démontrés, soit en reprenant des preuves trouvées soit, et ce sera souvent le cas
dans la section (3), des preuves que j’ai cherchées moi-même. Ce rapport est organisé
comme suit, dans un premier temps nous positionnerons le problème de transport optimal,
nous nous attacherons à démontrer l’existence de solutions pour ce problème (en suivant
la présentation de Santambrogio, [10]), nous terminerons cette section par démontrer le
théorème de Benamou et Brenier qui nous donnera la formulation résolue numériquement
par la suite. Dans la seconde partie, nous ferons un détour par la théorie des opérateurs
proximaux. Enfin nous discuterons des méthodes numériques mises en œuvre pour résoudre
le problème de Benamou et Brenier et nous terminerons par une galerie d’exemples.

## Exemple 
Un exemple calculé dans ce projet. Les flèches montrent le champ de déplacement apparent entre deux images (un ours en peluche) légèrement décalées. 
<br/><img src='/images/publications/HS_example.jpg'>

[Download paper here](http://tschmoderer.github.io/files/rapport_optimal_transport.pdf)

Recommended citation : Schmoderer T., Quesnel E. (2017). &quot;Détection de Flot Optique&quot;, INSA Rouen Normandie.
