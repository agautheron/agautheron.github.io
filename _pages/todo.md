---
permalink: /todo/
layout: default
author_profile: true
---

## To Do <a name="ToDo"></a>  
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
| ID Fantôme 	| C0 		| C1 		| µs 	| g 	| Volume eau (ml) 	| Volume Fluo 0 	| Volume Fluo 1 	| TiO2 (gr) 	|
|------------	|--------	|--------	|----	|---	|-----------------	|---------------	|---------------	|-----------	|
|      0      	|   0 		|   28.57\%	|   0 	|   1	|        50       	|        0       	|         20      	|   0       	|
|      1      	|   0 		|  16.66 \%	|   0 	|   1	|        50       	|        0       	|         10      	|   0       	|
|      1      	|  12.5\%	|   25\%	|   0 	|   1	|        50       	|        10       	|         20      	|   0       	|
|      1      	|  14.28\%	|   14.28\%	|   0 	|   1	|        50       	|        10       	|         10      	|   0       	|
|      1      	|  16.66 \% |   0 		|   0 	|   1	|        50       	|        10       	|         0      	|   0       	|
|      2      	|  22.22\%	|  22.22\%	|   0 	|   1	|        50       	|        20       	|         20      	|   0       	|
|      2      	| 25\%		| 12.5\% 	|   0 	|   1	|        50       	|        20       	|         10      	|   0       	|
|      2      	| 28.57\%	| 0 		|   0 	|   1	|        50       	|        20       	|         0      	|   0       	|
- [ ] Ajouter des encres imitant l'absorption du sang dans les solutions précédentes et refaire les mesures

#### Quantification Fluo en Modèle Diffusion spatialement résolu (R uniquement)
- [ ] Mesurer les solutions précédentes avec le système expérimental 
- [ ] Traitement des données et extraction des concentrations avec le modèle de Kim
- [ ] Traitement des données et extraction des concentrations avec le Monte-Carlo Symbolique
 
#### Quantification Fluo avec Modèle 2F (R+T)
- [ ] Pour chacune des solutions précédentes, faire une série de mesures avec le banc expérimental assemblé au labo où la quantité de solution augmente (<> Augmentation de l'épaisseur d'un slab)
- [ ] Traitement des données et extraction des concentrations avec le modèle 2F

### 