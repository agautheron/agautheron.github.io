---
title: "Image Processing - Horn & Schunck Method"
collection: publications
permalink: /publication/2017-05-19-Horn and Schunck
excerpt: 'My fourth year image processing project. This project deal with the implementation of the Horn and schunck method to compute the optical flow (i.e. the relative mouvement of the observer) between a pair of images.'
date: 2017-05-19
venue: 'INSA Rouen Normandie'
paperurl: 'https://github.com/tschmoderer/image-prj'
citation: 'Schmoderer T., Quesnel E. (2017). &quot;Détection de Flot Optique&quot;.'
---
Parmi les nombreux domaines de recherche en Traitement d’Images, une place importante est réservée à la détection de mouvements d’objets sur des images (sur une séquence vidéos par exemple). L’importance considérable que représente l’étude du comportement
dynamique d’objets se justifie à travers la multitude d’applications reposant sur ces méthodes. Plus concrètement, les progrès de l’informatique ont ouvert de nouvelles thématiques de recherche qui exploitent pleinement les méthodes développées dans le cadre de
l’analyse de mouvement des objets : citons le thème de la vision artificielle (ou vision par ordinateur) et plus particulièrement le sujet de la conduite assistée qui repose sur la détection en temps réel d’obstacles (piétons notamment) et l’interprétation des variations du mouvement de la scène observée, pouvant par exemple servir à anticiper un freinage brutal (et donc un éventuel accident de la route imminent) en palliant la lenteur du temps de réaction du conducteur et en actionnant le système de freinage avant le conducteur lui-même (un système de freinage anticipé équipe déjà certains modèles de voiture Tesla). Dans une autre perspective, la déformation de tissus et d’organes ou l’estimation du débit sanguin constituent des exemples d’applications biomédicales dans lesquelles la prise en compte de l’analyse du mouvement entre images joue un rôle important. La liste n’est évidemment pas exhaustive et nous renvoyons le lecteur à [2] pour de plus amples informations. 

Initiées dès le début des années 1980 par Berthold K.P. Horn et Brian G. Schunck, l’analyse du mouvement entre 2 images, et plus précisément le calcul du flot optique entre ces images, s’est considérablement développée depuis. Pour le projet qui nous concernait, celui-ci consistait à implémenter en Matlab différentes méthodes d’estimation du flot optique entre 2 images données en partant de l’algorithme original des 2 auteurs. Avant de rentrer dans le vif du sujet, précisons sans plus attendre la signification de cette notion de flot optique qui nous a accompagnés tout au long de ce projet.

## Définition 1.1 : Flot Optique ([17])
Le flot optique (ou flux optique) est le mouvement apparent des objets, surfaces et contours d’une scène visuelle, causé par le mouvement relatif entre un observateur (l’oeil ou une caméra) et la scène. 

## Example 
<br/><img src='/images/publications/HS_example.jpg'>

[Download paper here](http://academicpages.github.io/files/rapport_horn_schunk.pdf)

Recommended citation : Schmoderer T., Quesnel E. (2017). &quot;Détection de Flot Optique&quot;.
