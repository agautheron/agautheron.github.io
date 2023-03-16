---
permalink: /
excerpt: "About me"
layout: default
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Welcome to the professional web page of **Dr. Timothée Schmoderer**. <span class="semi-bold">TS</span> is an engineer who graduated from INSA Rouen Normandie with a  specialization in applied mathematics. In 2018, he received two  Masters degrees in theoretical and applied mathematics, one from  Sorbonne Université (Paris VI) and the other from Normandie Université. <span class="semi-bold">TS</span> started in 2018 a thesis in nonlinear control theory under the supervision of [Witold Respondek](http://lmi.insa-rouen.fr/membres/9-membres/professeurs/19-respondek-witold.html) from [LMI](http://lmi.insa-rouen.fr/) (INSA Rouen Normandie, Rouen) and [Emmanuel Trélat](https://www.ljll.math.upmc.fr/trelat/) from [LJLL](https://www.ljll.math.upmc.fr/) (Sorbonne Université, Paris). He successfully defended his Ph.D thesis on the 21st of June 2022. In 2023, <span class="semi-bold">TS</span> was appointed as a one year post-doctoral fellow in the control of  time-delay dynamical systems at [Inria DISCO](https://team.inria.fr/disco/fr/) team ([L2S](https://l2s.centralesupelec.fr/), CentraleSupélec).


<p style="margin-bottom: 0;"><strong>Content</strong>:</p>
1. [Research interests](#research)
2. [Short CV](#shortcv)
3. [Publications](#publis) 
4. [Softwares](#softwares)
5. [Invitations](#invitations)
6. [Teaching](#teaching)
7. [Administrative functions](#admin)

## Research interests <a name="research"></a>

<span class="semi-bold">TS</span>'s expertise lies in the field of nonlinear control theory, which encompasses a wide range of both theoretical and practical aspects of control systems. He is particularly interested in exploring the following research topics: the characterisation and classification of quadratic control systems, the study of the Lie algebra of infinitesimal symmetries of control-systems, the study of trivial control systems and their relation to control-curvature, the motion planning problem and the development of practical algorithms for determining control laws, and the stabilization of linear time-delay systems...

<small>**Keywords**: Nonlinear control system, Quadratic nonholonomic constraints, Feedback equivalence, Normal forms, Lie algebra of infinitesimal symmetries, Control curvature, Motion planning, Continuation method, Regularization techniques (e.g. Tikhonov regularization), Time-delay systems, Stabilization, Complex analysis</small>

### Characterisation and classification of quadratic control systems 

The main contribution of <span class="semi-bold">TS</span> thesis to control theory is the extensive study of quadratic control systems, i.e. nonlinear systems of the form $\dot{x}(t)=F(x(t),u(t))$, whose trajectories satisfiy a scalar equation of the form 

$$
\class{my-mathjax-math-style}{S_q(x,\dot{x})=\dot{x}^t\textsf{g}(x)\dot{x}+2\omega(x)\dot{x}+h(x)=0,\label{eq:quadratic}}
$$

where $x$ belongs to a smooth $n$-dimensional manifold, $\textsf{g}$ is a smooth $(0,2)$-tensor (possibly degenerated), $\omega$ is a smooth one-form, and $h$ is a smooth function. This study generalizes the classical feedback classification of control-affine and control-linear systems, respectively given by

$$
\dot{x}(t) = f(x)+g(x)u\quad\textrm{and}\quad \dot{x}(t)=g(x)u\nonumber. 
$$

<span class="semi-bold">TS</span>'s thesis provides a complete characterization and a classifcation of control-systems that satisfy \eqref{eq:quadratic} when $\dim x=2$ and $\dim u=1$, including the case when $\textrm{rk}(\textsf{g})$ is non-constant. When the rank of $\textsf{g}$ is constant and equal to $n-1$, a complete characterization is obtained in the case of an $n$-dimensional state space, and the identified class of control systems is referred to as the *paraboloid control systems*.

<small>**Future Research Directions**: generalise the $2$-dimensional case and characterise control systems satisying \eqref{eq:quadratic} with full generality of $n$ and rank of $\textsf{g}$, study the property of the identifyed class (e.g. controlability, stability, ...), extend the $2$-dimensional case to equations of the form \eqref{eq:quadratic} with additional polynomial terms in $\dot{x}$ of order higher than three...</small>


### Symmetries of control systems 

In the study of quadratic and trivial control systems, <span class="semi-bold">TS</span> demonstrated that the simplest classes (that can be represented by a normal form without any functional or real continuous parameters) are uniquely identified by their Lie algebra of infinitesimal symmetries. This implies that if a given control system has a Lie algebra of infinitesimal symmetries that is isomorphic to the Lie algebra of symmetries of a particular class, then the system is feedback equivalent to the corresponding normal form that represents the class.

<small>**Future Research Directions**: obtain a general comprehension of the class of control-systems that are determined by their symmetries, give a characterisation of the Lie algebra that can be symmetries of control systems... </small>

### Motion planning

In <span class="semi-bold">TS</span>'s thesis, he study the motion planning problem (MPP), that is, the problem of designing and studying algorithms that (for a given control-nonlinear system) compute controls realizing a certain target trajectory. Specifically, for a given control system of the form $\dot{x}(t)=F(t,x(t),u(t))$, the MPP amounts solving an inverse problem on the input-output map 

$$
\begin{align}
E_{T,x_0}\,:\, U([0,T],\mathbb{R}^m)&\longrightarrow \mathbb{R}^n\nonumber \\ 
u&\longmapsto E_{T,x_0}(u) = x(T,u,x_0),\nonumber
\end{align}
$$

which maps a control to the endpoint of the associated trajectory. In his work, <span class="semi-bold">TS</span> propose a regularisation of the **continuation method** (CS) introduced by Chitour and Sussmann at the beginning of the century. The classical version of the continuation method reduces the MPP to solving an ordinary differential equation on $U([0,T],\mathbb{R}^m)$, which might be singular at some points and might not posses a global solution. The regularised version of the CM proposed by <span class="semi-bold">TS</span> tackles both the problem of singularity and the existence of a global solution. In his thesis, he shows the potential of his method through several numerical examples.

<small>**Future Research Directions**: further theoretical analysis on the regularised continuation method, study in details the effect of the proposed regularisation, incorporate other types of regularisation, high-performance computing implementation, add constraints on the set of controls and state. </small>

### Trivial control-systems

After completing his thesis, <span class="semi-bold">TS</span> became interested in the concept of trivial control systems, which are systems whose dynamics depend only on the controls (or controlled variables) and are represented by either of the following forms:

$$
\dot{x}(t)=F(u(t))\quad\textrm{or}\quad \left\{\begin{array}[rl] \dot{x}(t)&=w(t) \\ \dot{w}(t) &= u(t) \end{array}\right..\nonumber
$$

This notion of trivial control systems has previously been introduced in literature (in the case $\dim x = 2$ and $\dim u = 1$) by U. Serres in his thesis. <span class="semi-bold">TS</span> further developed this concept by providing two general characterizations of trivial control systems of arbitrary dimension and with an arbitrary number of controls. However, those two novel characterisations can not be used in practice. In the case of $\dim x = 2$ and $\dim u = 1$, <span class="semi-bold">TS</span> revisited the results of Serres and found that a characterization could be expressed via two feedback invariant functions: the control-curvature (introduced by Agrachev) and the centro-affine curvature. Based on the properties of these two feedback invariants, <span class="semi-bold">TS</span> was able to give a complete classification of control-affine systems with $\dim x = 3$ and $\dim u = 1$.

<small>**Future Research Directions**: extend the characterisation of trivial control systems via curvatures to the case of $\dim x=n$.  </small>

### Stabilization of time-delay dynamical systems

During his postdoctoral fellowship at INRIA team DISCO, <span class="semi-bold">TS</span> studied the stabilisation of linear time-delay equations of the form

$$
x^{(n)}(t)+\sum_{k=0}^{n-1}a_kx^{(k)}(t)+\sum_{k=0}^m\alpha_kx^{(k)}(t-\tau) = 0,\label{eq:delay}
$$

where $\tau>0$ is the delay. In contrast to the no-delay case, where the Rough-Hurwitz criteria directly provides stability information for linear ODEs, the stability analysis of the time-delay case is much more involved due to the corresponding transfer function being a quasipolynomial with an infinite number of roots. However, a bound on the number of real roots can be obtained, and it has been shown that assigning a single root with maximal multiplicity ensures asymptotic stability of the equation. During his postdoctoral position, <span class="semi-bold">TS</span> focused on assigning the maximal number of real roots and showed that this guarantees asymptotic stability of the corresponding equation.

<small>**Future Research Directions**: design a control law to stabilize a given time-delay equation with some fixed parameters, analyze the properties of a system for which roots with arbitrary multiplicity are assigned, extend the results to the multi-delay case,...</small>

### Misc: Variational optimisation and imaging science 

In 2019, <span class="semi-bold">TS</span> was invited to the Department of Applied Mathematics at the University of Cambridge, where he developed a model for reconstructing MRI images. Due to technical limitations, MRI images are often taken as undersampled Fourier data and must be extrapolated to produce a usable image. To address this issue, <span class="semi-bold">TS</span> developed an optimization procedure that combines both variational and learned techniques. The learning aspect of the optimization involves the optical flow between two frames in the same sequence of MRI images. The procedure constructs a dictionary of representative optical flows, allowing the true optical flow to be expressed as a linear combination of dictionary atoms. The variational aspect of the optimization problem includes data fidelity and regularization terms, such as total variation (TV) or $L^1$ penalties. Thus, the optimization problem is non-trivial, as it involves non-convex and non-differentiable terms. In his publications, he and his colleagues provided theoretical guarantees on the existence of a solution to the optimization problem and demonstrated its potential through numerical simulations.

## Short CV <a name="shortcv"></a> <!--[<img src="https://tschmoderer.github.io/images/fontawesome/external-link-alt-solid.svg" alt="external-link" width="20"/>](https://tschmoderer.github.io/files/CV/cv_tschmoderer_fr.pdf)-->

* 2023 - :  Post-doctoral fellow at INRIA DISCO team, L2S CentraleSupélec
  * <u>Subject</u>: Stabilization of time-delay dynamical systems 
  * <u>Collaborators</u>: [Islam Boussaada](https://l2s.centralesupelec.fr/u/boussaada-islam/) and [Silviu Niculescu](https://l2s.centralesupelec.fr/u/niculescu-silviu-iulian/)
* 2018 - 2022 : **Ph.D thesis in nonlinear control  theory**, INSA Rouen Normandie
  * <u>Title</u>: *Study of control systems under quadratic nonholonomic constraints. Motion planning, introduction to the regularised continuation method.*
  * <u>Advisors</u>: [Witold Respondek](http://lmi.insa-rouen.fr/membres/9-membres/professeurs/19-respondek-witold.html) (LMI, INSA Rouen Normandie) and [Emmanuel Trélat](https://www.ljll.math.upmc.fr/~trelat/) (LJLL, Sorbonne Université)
  * <u>Defense</u>: 21 June 2022 before the jury composed of
    * Professor Yacine Chitour (CentralSupélec, Reviewer)
    * Professor Frédéric Jean (ENSTA, Reviewer)
    * Research Director Ugo Boscain (CNRS, Examiner)
    * Research Director Jean-Baptiste Pomet (INRIA, Examiner)
    * Professor Hasnaa Zidani (INSA, Examiner, President)
  * <u>Manuscript</u>:  [direct link](https://tschmoderer.github.io/files/thesis/manuscrit_these_tschmoderer.pdf) ; [HAL](https://hal.science/tel-03767853) ; [theses.fr](http://theses.fr/s221665)
  * Funding: INSA Rouen Normandie
* 2013 - 2018 : **Engineer degree** in applied Mathematics at INSA Rouen Normandie
* 2016 - 2018 : **Master degree** in applied Mathematics at Sorbonne Univerity (Paris VI)
* 2018 : **Master degree** in applied Mathematics at University of Rouen

## Publications <a name="publis"></a> 

<div id="publi-hal-all"></div>

## Softwares <a name="softwares"></a> 

### MRIR-DLMC

A MATLAB implementation of the MRIR-DLMC algorithm for reconstructing magnetic resonance images from undersampled Fourier data. For a given sequence of sparse MRI data, the algorithm exploits the structure of each individual frame as well as the correlation between two consecutive frames (computed through the optical flow). The model includes a data fidelity term and several penalties on the structure of the data. The optimization task is computationally challenging due to the presence of non-convex and non-differentiable terms.. Moreover, the optical flow is computed from a learned dictionary, which is constructed using fully-sampled MRI sequences and phantom data. [Link to the code](https://github.com/tschmoderer/2019_mri_reconstruction).

### Control-ToolBox 

A C++ toolbox with a Python interface designed to handle control systems. The toolbox primarily focuses on implementing the homotopy continuation method for solving motion planning problems. Additionally, it provides functionalities such as dynamical and control systems simulations, motion planning with state and input constraints, and state-of-the-art algorithms for stabilizing linear equations, which may include delays. *Work in progress*. [Link to the code](https://github.com/tschmoderer/control-toolbox).

## Invitations <a name="invitations"></a> 

|             |                                                              |                                                              |
| :-----------: | ------------------------------------------------------------ | ------------------------------------------------------------ | --- |
| Summer 2019 | University of Cambridge, UK, with [Noemie Debroux](http://lmi.insa-rouen.fr/mfa/2-non-categorise/60-n-debroux.html) and [Angelica I. Aviles-Rivero](https://www.maths.cam.ac.uk/person/ai323). | University of Cambridge, Department of Applied Mathematics and Theoretical Physics, Cambridge Image Analysis Group | ![Cambridge University](./assets/img/cambridge.png)|

## Teaching <a name="teaching"></a>  <!--[<img src="https://tschmoderer.github.io/images/fontawesome/external-link-alt-solid.svg" alt="external-link" width="20"/>](https://tschmoderer.github.io/teaching/)-->

### Teaching assignment and Temporary teaching assistant at INSA de Rouen Normandie (278h)

- 2021 / 2022 : Numerical Analysis, direct and iterative methods for solving systems of linear equations, for graduated students (*lectures, tutorials, and practical sessions* - 63h). [Page du cours](https://tschmoderer.github.io/teaching/2021-gm3-ananum).
  * Linear algebra 
  * Direct and iterative methods for linear
equations
  * Methods for nonlinear equations 
  * Python practical exercices


- 2019 / 2022 : Sequences, Real variable functions analysis, differentiability, integration for undergraduates students (*tutorials* - 215h).
  * Introduction to logic 
  * Sets theory
  * Sequences 
  * Real functions analysis

### Temporary teaching at Polytech Sorbonne (64h)

- 2018 / 2019 : Informatics, Embedded system, FORTRAN (*practical sessions* - 64h).


## Administrative functions <a name="admin"></a> 

- 2021 / 2023: Elected member representative of PhD students for the [laboratory](http://lmi.insa-rouen.fr/).
- 2020 / 2022: Elected member representative of PhD students for the [Doctoral School](http://ed-miis.normandie-univ.fr/).