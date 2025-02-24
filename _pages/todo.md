---
permalink: /todo/
layout: default
author_profile: true
---

## To Do <a name="ToDo"></a>  
---
### Optimisation des longueurs d'onde pour la mesure de fluorescence 

 - [ ] Lancer un script complet
 - [ ] Remettre la méthode originale d'optimisation utilisée par Charly
 - [ ] Traiter les résultats

---
### Quantification de deux fluorophores connus en solution 

**Objectifs**
- Mise en place du pipeline complet de traitement de mesures associés à un modèle de propagation radiative
- Extension des résultats sur la réflectance interne aux cas fluorescents

#### Prérequis
- [ ] Mesurer le spectre de fluorescence de chaque encre fluorescente
- [ ] Mesurer le spectre d'absorption de chaque encre fluorescente

#### Realisation de solutions de fluorescence connues
- [ ] Réaliser les différentes solutions fluorescentes avec différents coefficients de diffusion (sans absorption)
<table>
<thead>
  <tr><th>ID Fantôme</th><th>C0</th><th>C1</th><th>µs</th><th>g</th><th>Volume eau (ml)</th><th>Volume Fluo 0</th><th>Volume Fluo 1</th><th>TiO2 (gr)</th>
  </tr>
</thead>
<tbody>
  <tr><td>0</td><td>0</td><td>28.57\%</td><td>0</td><td>1</td><td>50</td><td>0</td><td>20</td><td>0</td>
  </tr>
  <tr><td>1</td><td>0</td><td>16.66 \%</td><td>0</td><td>1</td><td>50</td><td>0</td><td>10</td><td>0</td>
  </tr>
  <tr><td>2</td><td>12.5\%</td><td>25\%</td><td>0</td><td>1</td><td>50</td><td>10</td><td>20</td><td>0</td>
  </tr>
  <tr><td>3</td><td>14.28\%</td><td>14.28\%</td><td>0</td><td>1</td><td>50</td><td>10</td><td>10</td><td>0</td>
  </tr>
  <tr><td>4</td><td>16.66 \%</td><td>0</td><td>0</td><td>1</td><td>50</td><td>10</td><td>0</td><td>0</td>
  </tr>
  <tr><td>5</td><td>22.22\%</td><td>22.22\%</td><td>0</td><td>1</td><td>50</td><td>20</td><td>20</td><td>0</td>
  </tr>
  <tr><td>6</td><td>25\%</td><td>12.5\%</td><td>0</td><td>1</td><td>50</td><td>20</td><td>10</td><td>0</td>
  </tr>
  <tr><td>7</td><td>28.57\%</td><td>0</td><td>0</td><td>1</td><td>50</td><td>20</td><td>0</td><td>0</td>
  </tr>
</tbody>
</table>
- [ ] Ajouter des encres imitant l'absorption du sang dans les solutions précédentes et refaire les mesures

#### Quantification Fluo en Modèle Diffusion spatialement résolu (R uniquement)
- [ ] Mesurer les solutions précédentes avec le système expérimental 
- [ ] Traitement des données et extraction des concentrations avec le modèle de Kim
- [ ] Traitement des données et extraction des concentrations avec le Monte-Carlo Symbolique
 
#### Quantification Fluo avec Modèle 2F (R+T)
- [ ] Pour chacune des solutions précédentes, faire une série de mesures avec le banc expérimental assemblé au labo où la quantité de solution augmente (<> Augmentation de l'épaisseur d'un slab)
- [ ] Traitement des données et extraction des concentrations avec le modèle 2F

### Imagerie Multi-modale préclinique IRM/Optique NADH
- [ ] Déterminer la bascule 90 du NADH
- [ ] Déterminer le T1 du NADH
- [ ] Déterminer le profil de sensibilité de l'[antenne <sup>1</sup>H<sup>31</sup>P](https://www.bruker.com/en/products-and-solutions/preclinical-imaging/mri/mri-rf-coils/mri-rf-coils-technical-details.html#section13) avec [biot-savart](https://pypi.org/project/biot-savart/)
- [ ] Déterminer le seuil de détectabilité de NADH (mesures sur gamme de fantômes 20 mM, 7 mM, 1 mM)