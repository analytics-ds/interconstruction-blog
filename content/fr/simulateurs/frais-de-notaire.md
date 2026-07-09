---
title: "Simulateur de frais de notaire"
translationKey: "sim-frais-notaire"
type: "simulateur"
noindex: true
weight: 2
date: "2026-06-11"
lastmod: "2026-07-09"
description: "Calculez gratuitement les frais de notaire d'un achat dans le neuf ou l'ancien : 2 à 3 % contre 7 à 8 % du prix. Détail des droits, émoluments et débours."
faq:
  - question: "Quel est le montant des frais de notaire dans le neuf ?"
    answer: "Dans le neuf, les frais de notaire représentent environ 2 à 3 % du prix d'achat, contre 7 à 8 % dans l'ancien. Sur un logement à 300 000 €, cela représente environ 6 000 à 9 000 € dans le neuf, contre 21 000 à 24 000 € dans l'ancien."
  - question: "Comment sont calculés les frais de notaire ?"
    answer: "Ils additionnent quatre postes : les droits de mutation (0,715 % dans le neuf, environ 5,80 % dans l'ancien), la contribution de sécurité immobilière (0,10 %), les émoluments du notaire selon un barème dégressif, et les débours. Seuls les droits de mutation expliquent l'écart entre neuf et ancien."
  - question: "Les frais de notaire sont-ils négociables ?"
    answer: "Depuis 2021, le notaire peut accorder jusqu'à 20 % de remise sur ses émoluments pour la part du prix dépassant 100 000 €. Les droits de mutation et la contribution de sécurité immobilière, eux, sont fixes et non négociables."
readingTime: false
---

Acheter dans le neuf permet de diviser ses frais de notaire par trois environ : **2 à 3 % du prix** contre 7 à 8 % dans l'ancien. Indiquez le prix du bien et son type pour estimer le montant, avec le détail des droits, des émoluments et des débours.

<div class="sim-calc" id="calc-notaire">
  <div class="sim-calc-fields">
    <div class="sim-field"><label for="fn-prix">Prix du bien (€)</label><input type="number" id="fn-prix" value="300000" min="0" step="10000"></div>
    <div class="sim-field"><label for="fn-type">Type de bien</label>
      <select id="fn-type">
        <option value="neuf">Logement neuf (VEFA ou récent)</option>
        <option value="ancien">Logement ancien</option>
      </select>
    </div>
  </div>
  <div class="sim-calc-result">
    <div><span class="sim-result-label">Frais de notaire estimés</span><span class="sim-result-value" id="fn-total">—</span></div>
    <ul class="sim-result-details">
      <li><span>Soit, du prix</span><span id="fn-pct">—</span></li>
      <li><span>Droits de mutation</span><span id="fn-droits">—</span></li>
      <li><span>Émoluments du notaire (TTC)</span><span id="fn-emoluments">—</span></li>
      <li><span>Contribution de sécurité immobilière</span><span id="fn-csi">—</span></li>
      <li><span>Débours</span><span id="fn-debours">—</span></li>
    </ul>
  </div>
</div>

<p class="sim-note">Estimation indicative basée sur le barème national des émoluments. Le montant exact est arrêté par le notaire au moment de la signature.</p>

## Pourquoi les frais sont-ils réduits dans le neuf ?

L'écart vient d'un seul poste : les **droits de mutation**. Dans l'ancien, ce droit atteint 5,80 à 6,30 % du prix selon le département (de nombreux départements l'ont relevé en 2025) ; dans le neuf, il tombe à 0,715 %. La rémunération du notaire et les autres frais restent identiques. C'est pourquoi un même logement coûte beaucoup moins cher en frais lorsqu'il est neuf.

## Comment sont calculés les frais de notaire ?

Le simulateur additionne quatre éléments :

- **Droits de mutation** : 0,715 % du prix dans le neuf, 5,80 à 6,30 % dans l'ancien selon le département.
- **Émoluments du notaire** : barème national dégressif (3,870 %, puis 1,596 %, 1,064 % et 0,799 %), majorés de la TVA à 20 %.
- **Contribution de sécurité immobilière** : 0,10 % du prix.
- **Débours** : quelques centaines d'euros de frais avancés.

### Exemple chiffré

Pour un **appartement neuf à 300 000 €**, les frais de notaire avoisinent **6 200 €**, soit environ 2,1 % du prix : 2 145 € de droits de mutation, 3 350 € d'émoluments TTC, 300 € de contribution de sécurité immobilière et 400 € de débours. Le même bien dans l'ancien coûterait près de **23 800 €** de frais (environ 7,9 %), soit un écart de plus de 17 000 € expliqué uniquement par les droits de mutation.

## Comment réduire encore la facture ?

Au-delà de l'avantage du neuf, le notaire peut accorder jusqu'à **20 % de remise** sur ses émoluments au-delà de 100 000 €. Intégrez aussi ces frais dès l'estimation du budget : ils ne sont en général pas financés par le prêt. Pour bâtir votre plan de financement, estimez votre [capacité d'emprunt](/simulateurs/capacite-emprunt/) et vos [mensualités](/simulateurs/mensualites/), et consultez notre guide sur le [financement d'un logement neuf](/blog/financer-logement-neuf-prets-aides/).

## Questions fréquentes

<details>
<summary>Quel est le montant des frais de notaire dans le neuf ?</summary>

Dans le neuf, les frais de notaire représentent environ 2 à 3 % du prix d'achat, contre 7 à 8 % dans l'ancien. Sur un logement à 300 000 €, cela représente environ 6 000 à 9 000 € dans le neuf, contre 21 000 à 24 000 € dans l'ancien.

</details>

<details>
<summary>Comment sont calculés les frais de notaire ?</summary>

Ils additionnent quatre postes : les droits de mutation (0,715 % dans le neuf, environ 5,80 % dans l'ancien), la contribution de sécurité immobilière (0,10 %), les émoluments du notaire selon un barème dégressif, et les débours. Seuls les droits de mutation expliquent l'écart entre neuf et ancien.

</details>

<details>
<summary>Les frais de notaire sont-ils négociables ?</summary>

Depuis 2021, le notaire peut accorder jusqu'à 20 % de remise sur ses émoluments pour la part du prix dépassant 100 000 €. Les droits de mutation et la contribution de sécurité immobilière, eux, sont fixes et non négociables.

</details>
