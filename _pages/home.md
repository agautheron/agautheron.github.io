---
title: "Dr. Arthur GAUTHERON"
layout: homelay
author_profile: false
permalink: /
---

<!-- ### Dr. Arthur GAUTHERON -->

<br/><br/>

I am an associate professor at [Creatis](https://www.creatis.insa-lyon.fr/site/en) laboratory and  [Polytech Lyon1, GBM](https://polytech.univ-lyon1.fr/formation/cycle-ingenieur/genie-biomedical/genie-biomedical-par-cursus-classique).
<br/>

I specialize in multimodal biomedical optics, integrating fluorescence spectroscopy (FS), mass spectrometry (MS/SpiderMass), and optical modeling to improve intraoperative diagnosis and characterization of brain pathologies.<br/>

My research focuses on spectral unmixing, radiative transfer modeling, and the development of experimental optical systems, with a strong emphasis on correlating multimodal data (FS, MS, MRS) for metabolic and structural biomarker extraction in projects such as Opticskin, TRESOR, and Impulsion.

<!-- - Impulsion: Identification of intraoperative biomarkers for Focal Cortical Dysplasia (FCD) using fluorescence spectroscopy and SpiderMass, correlated with preoperative MRI and postoperative histology, starting with resection waste analysis and pilot patient studies.

- TRESOR: Integration of preoperative 7T MRS NAD+ measurements with intraoperative NADH fluorescence to compute NAD+/NADH redox ratios, combined with other metabolic markers (GABA, Glutamate, PpIX, FAD/NADH optical redox) in a multimodal database, including MRI structural biomarkers for FCD delineation.

- Opticskin: Development of optical imaging approaches for skin and brain tissue characterization, linking spectroscopy signals with clinical outcomes. -->

The goal is to create robust, fast, and clinically usable multimodal tools for real-time biomarker-guided surgery.
<svg id="rs2-svg" width="1000" height="450" viewBox="0 0 1000 450" style="max-width:100%;height:auto;font-family:inherit;">
<defs>
  <marker id="rs2-arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
    <path id="rs2-arrow-path" d="M0,0 L6,3 L0,6 Z"/>
  </marker>
</defs>

<!-- Blocks -->
<rect class="rs2-block" id="measurements" x="40"  y="160" width="180" height="100" rx="12"/>
<rect class="rs2-block" id="signal"        x="260" y="60"  width="180" height="100" rx="12"/>
<rect class="rs2-block" id="modeling"      x="260" y="260" width="180" height="100" rx="12"/>
<rect class="rs2-block" id="multimodal"    x="500" y="60"  width="180" height="100" rx="12"/>
<rect class="rs2-block" id="biomarkers"    x="500" y="260" width="180" height="100" rx="12"/>
<rect class="rs2-block" id="clinical"      x="740" y="160" width="200" height="100" rx="12"/>

<!-- Labels -->
<text class="rs2-label" x="130" y="190" text-anchor="middle" font-size="15" font-weight="bold">Optical</text>
<text class="rs2-label" x="130" y="210" text-anchor="middle" font-size="15" font-weight="bold">Measurements</text>

<text class="rs2-label" x="350" y="90"  text-anchor="middle" font-size="15" font-weight="bold">Signal</text>
<text class="rs2-label" x="350" y="110" text-anchor="middle" font-size="15" font-weight="bold">Processing</text>

<text class="rs2-label" x="350" y="290" text-anchor="middle" font-size="15" font-weight="bold">Optical</text>
<text class="rs2-label" x="350" y="310" text-anchor="middle" font-size="15" font-weight="bold">Modeling</text>

<text class="rs2-label" x="590" y="90"  text-anchor="middle" font-size="15" font-weight="bold">Multimodal</text>
<text class="rs2-label" x="590" y="110" text-anchor="middle" font-size="15" font-weight="bold">Integration</text>
<text class="rs2-label" x="590" y="130" text-anchor="middle" font-size="13">(Fluorescence / MS / MRI / SRM)</text>

<text class="rs2-label" x="590" y="290" text-anchor="middle" font-size="15" font-weight="bold">Biomarker</text>
<text class="rs2-label" x="590" y="310" text-anchor="middle" font-size="15" font-weight="bold">Extraction</text>

<text class="rs2-label" x="840" y="195" text-anchor="middle" font-size="15" font-weight="bold">Clinical</text>
<text class="rs2-label" x="840" y="215" text-anchor="middle" font-size="15" font-weight="bold">Application</text>

<!-- Arrows -->
<line class="rs2-arrow" x1="220" y1="210" x2="260" y2="110" marker-end="url(#rs2-arrow)"/>
<line class="rs2-arrow" x1="220" y1="210" x2="260" y2="310" marker-end="url(#rs2-arrow)"/>
<line class="rs2-arrow" x1="440" y1="110" x2="500" y2="110" marker-end="url(#rs2-arrow)"/>
<line class="rs2-arrow" x1="440" y1="310" x2="500" y2="310" marker-end="url(#rs2-arrow)"/>
<line class="rs2-arrow" x1="680" y1="100" x2="740" y2="210" marker-end="url(#rs2-arrow)"/>
<line class="rs2-arrow" x1="680" y1="310" x2="740" y2="210" marker-end="url(#rs2-arrow)"/>
</svg>

<div id="rs2-tooltip" style="
  position:fixed;
  padding:7px 13px;
  border-radius:5px;
  font-size:12.5px;
  pointer-events:none;
  opacity:0;
  transition:opacity 0.18s;
  max-width:300px;
  line-height:1.5;
  z-index:9999;
  border-left: 3px solid transparent;
"></div>

<script>
(function () {
  var TIPS = {
    measurements: "Acquisition of tissue spectra using optical probes and lasers. Challenges: maintaining SNR in OR, multi-wavelength calibration, and minimally invasive measurements.",
    signal:       "Signal processing including spectral unmixing to isolate biomarkers from complex fluorescence signals. Scientific challenge: crosstalk between fluorophores and real-time computation constraints.",
    modeling:     "Optical modeling with radiative transfer equations to estimate tissue properties. Scientific challenge: accurate internal reflectance, diffusion approximation limits, and heterogeneous tissue composition.",
    multimodal:   "Integration of multiple modalities (Fluorescence, MS/SpiderMass, MRI, SRM) for metabolic and structural biomarker correlation (Opticskin, TRESOR, Impulsion). Challenges: spatial registration, motion compensation, and combining modalities with different resolutions.",
    biomarkers:   "Extraction of key biomarkers (PpIX, NADH, NAD+, GABA, Glutamate) for metabolic profiling. Challenges: validation against histology, noise robustness, and intraoperative timing.",
    clinical:     "Clinical applications such as tumor and FCD delineation, and intraoperative guidance. Scientific challenge: translating multimodal biomarkers to actionable surgical information in real time."
  };

  function bsRgb(cls) {
    var el = document.createElement('span');
    el.className = cls;
    el.style.cssText = 'position:absolute;visibility:hidden;display:inline';
    document.body.appendChild(el);
    var c = getComputedStyle(el).color;
    document.body.removeChild(el);
    return c;
  }
  function cssVar(v) {
    var el = document.createElement('span');
    el.style.cssText = 'position:absolute;visibility:hidden;color:var(' + v + ')';
    document.body.appendChild(el);
    var c = getComputedStyle(el).color;
    document.body.removeChild(el);
    return c;
  }
  function rgba(rgb, a) {
    return rgb.replace('rgb(', 'rgba(').replace(')', ',' + a + ')');
  }

  var BLOCK_COLORS = {
    measurements: bsRgb('text-primary'),
    signal:       bsRgb('text-success'),
    modeling:     bsRgb('text-info'),
    multimodal:   bsRgb('text-warning'),
    biomarkers:   bsRgb('text-warning'),
    clinical:     bsRgb('text-danger'),
  };

  var textColor = cssVar('--main-text-color');
  var cardColor = cssVar('--card-color');

  document.querySelectorAll('.rs2-block').forEach(function (r) {
    var c = BLOCK_COLORS[r.id] || bsRgb('text-secondary');
    r.setAttribute('fill',         rgba(c, 0.15));
    r.setAttribute('stroke',       rgba(c, 0.65));
    r.setAttribute('stroke-width', '1.5');
    r._fillN = rgba(c, 0.15);
    r._fillH = rgba(c, 0.38);
    r.style.cursor = 'pointer';
    r.addEventListener('mouseenter', function () {
      r.setAttribute('fill', r._fillH);
      tip.textContent          = TIPS[r.id] || '';
      tip.style.opacity        = '1';
      tip.style.borderColor    = rgba(c, 0.8);
    });
    r.addEventListener('mouseleave', function () {
      r.setAttribute('fill', r._fillN);
      tip.style.opacity = '0';
    });
  });

  document.querySelectorAll('.rs2-label').forEach(function (t) {
    t.setAttribute('fill', textColor);
  });

  document.querySelectorAll('.rs2-arrow').forEach(function (l) {
    l.setAttribute('stroke',       textColor);
    l.setAttribute('stroke-width', '2');
  });
  document.getElementById('rs2-arrow-path').setAttribute('fill', textColor);

  var tip = document.getElementById('rs2-tooltip');
  tip.style.background = cardColor;
  tip.style.color      = textColor;

  document.getElementById('rs2-svg').addEventListener('mousemove', function (e) {
    var w  = tip.offsetWidth || 300;
    var tx = e.clientX + 16;
    if (tx + w > window.innerWidth - 10) tx = e.clientX - w - 16;
    tip.style.left = tx + 'px';
    tip.style.top  = (e.clientY + 14) + 'px';
  });
})();
</script>
<!-- 
## Short cv
<span class="semi-bold">AG</span> is an engineer who graduated from the Institut d'Optique Graduate School. <br/>
In 2019, he also received two other degrees, one university degree from the Institut de Formation Supérieure en Biomédical ([IFSBM](https://www.ifsbm.universite-paris-saclay.fr/), Paris Saclay Université) and a master degree in automatic & signal and images processing from Université Paris-Saclay.

<span class="semi-bold">AG</span> started in 2019 a thesis in engineering for health (biomedical optics, optical modeling and signal processing) under the supervision of [Bruno Montcel](https://fr.linkedin.com/in/bruno-montcel-a58192131) from [CREATIS](http://creatis.insa-lyon.fr/) (Université Claude Bernard, Lyon) and [Mathieu Hébert](https://fr.linkedin.com/in/mathieu-hebert-76889321) from [LHC](https://laboratoirehubertcurien.univ-st-etienne.fr/en/index.html) (Université Jean Monnet, Saint-Etienne). His thesis was funded by the [Labex PRIMES](https://primes.universite-lyon.fr/) and is briefly summarized [here](https://primes.universite-lyon.fr/medias/fichier/resume-these-labex-arthur-gautheron-v2_1625571544265-pdf).
He successfully defended his Ph.D thesis on the 8th of December 2022. 

In 2023, <span class="semi-bold">AG</span> was appointed as a 18-month post-doctoral fellow in the [BIOSPEC - Research Project](https://manutech-sleight.com/research-innovation/sleight-s-research-projects/biospec-research-project-277559.kjsp) funded by the [Manutech Sleight Graduate School](https://manutech-sleight.com/). He was member of the Image team ([LHC](https://laboratoirehubertcurien.univ-st-etienne.fr/en/index.html), Saint-Etienne) and the MAGICS team ([CREATIS](https://www.creatis.insa-lyon.fr/site7/fr/node/46932), Lyon).<br/>

In September 2024, he started an Assistant Professor position, with teaching at [CPE Lyon](https://www.cpe.fr) and research in the MAGICS team ([CREATIS](https://www.creatis.insa-lyon.fr/site/), Lyon).
 -->