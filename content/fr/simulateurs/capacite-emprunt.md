---
title: "Simulateur de capacité d'emprunt"
translationKey: "sim-capacite-emprunt"
type: "simulateur"
noindex: true
weight: 1
date: "2026-06-11"
lastmod: "2026-06-14"
description: "Calculez gratuitement votre capacité d'emprunt pour un achat dans le neuf en Île-de-France selon vos revenus, vos charges, votre apport et la durée du prêt."
faq:
  - question: "Quel salaire faut-il pour emprunter 200 000 € ?"
    answer: "Pour emprunter 200 000 € sur 20 ans à 3,5 %, la mensualité avoisine 1 160 €. Avec un taux d'endettement de 35 %, il faut donc environ 3 300 € de revenus nets mensuels, sans autre crédit en cours. Le simulateur ajuste ce montant selon votre durée et votre taux."
  - question: "Quel est le taux d'endettement maximal autorisé ?"
    answer: "Le taux d'endettement est plafonné à 35 % des revenus nets, assurance emprunteur comprise, selon les recommandations du HCSF. Les banques disposent d'une marge de souplesse pour une partie de leurs dossiers, notamment les primo-accédants et les hauts revenus avec un reste à vivre confortable."
  - question: "Comment augmenter sa capacité d'emprunt ?"
    answer: "Plusieurs leviers existent : augmenter l'apport personnel, allonger la durée du prêt (jusqu'à 25 ans dans le neuf), solder un crédit à la consommation, acheter à deux, ou mobiliser un prêt à taux zéro qui complète le prêt principal sans alourdir le taux d'endettement."
readingTime: false
---

La capacité d'emprunt correspond au montant qu'une banque accepte de vous prêter pour financer votre logement neuf. Elle dépend de vos **revenus**, de vos **charges**, de votre **apport** et de la **durée du prêt**, dans la limite d'un taux d'endettement plafonné à 35 % des revenus nets.

<div class="sim-calc" id="calc-capacite">
  <div class="sim-calc-fields">
    <div class="sim-field"><label for="ce-revenus">Revenus nets mensuels du foyer (€)</label><input type="number" id="ce-revenus" value="4500" min="0" step="100"></div>
    <div class="sim-field"><label for="ce-charges">Charges mensuelles : crédits en cours, pensions (€)</label><input type="number" id="ce-charges" value="0" min="0" step="50"></div>
    <div class="sim-field"><label for="ce-endettement">Taux d'endettement maximal (%)</label><input type="number" id="ce-endettement" value="35" min="0" max="40" step="1"></div>
    <div class="sim-field"><label for="ce-duree">Durée du prêt (années)</label><input type="number" id="ce-duree" value="20" min="1" max="25" step="1"></div>
    <div class="sim-field"><label for="ce-taux">Taux d'intérêt annuel (%)</label><input type="number" id="ce-taux" value="3.5" min="0" step="0.1"></div>
    <div class="sim-field"><label for="ce-assurance">Taux d'assurance annuel (%)</label><input type="number" id="ce-assurance" value="0.34" min="0" step="0.01"></div>
    <div class="sim-field"><label for="ce-apport">Apport personnel (€)</label><input type="number" id="ce-apport" value="20000" min="0" step="1000"></div>
  </div>
  <div class="sim-calc-result">
    <div><span class="sim-result-label">Capacité d'emprunt estimée</span><span class="sim-result-value" id="ce-capacite">—</span></div>
    <ul class="sim-result-details">
      <li><span>Mensualité maximale</span><span id="ce-mensualite">—</span></li>
      <li><span>Budget total avec apport</span><span id="ce-budget">—</span></li>
    </ul>
  </div>
</div>

<p class="sim-note">Estimation indicative, assurance emprunteur comprise dans le taux d'endettement. Le reste à vivre n'est pas pris en compte : seule une banque ou un courtier valide une capacité d'emprunt définitive.</p>

## Comment fonctionne la capacité d'emprunt ?

La banque part de vos **revenus nets mensuels** (salaires, revenus locatifs pérennes, pensions) et applique un **taux d'endettement** maximal de 35 %, assurance comprise. Elle déduit vos charges de crédit existantes pour obtenir la mensualité que vous pouvez consacrer à votre nouveau prêt. Cette mensualité, combinée à la durée et au taux, détermine le capital empruntable.

## Comment est-elle calculée ?

Le calcul se fait en deux temps. D'abord la mensualité maximale : `(revenus × 35 %) − charges`. Ensuite la conversion de cette mensualité en capital, selon la formule d'amortissement qui tient compte du **taux d'intérêt**, de la **durée** et de l'**assurance** (incluse dans les 35 %). Plus la durée est longue, plus le capital empruntable augmente, mais plus le coût total des intérêts s'alourdit. Pour visualiser ce coût, utilisez notre [simulateur de mensualités](/simulateurs/mensualites/).

### Exemple chiffré

Un couple gagne 4 500 € nets par mois, sans crédit en cours, et emprunte sur 20 ans à 3,5 % (assurance 0,34 %). Sa mensualité maximale est de 1 575 € (35 % de 4 500 €). Cela correspond à une capacité d'emprunt d'environ **259 000 €**, soit un budget de **279 000 €** avec 20 000 € d'apport. En allongeant la durée à 25 ans, la capacité grimpe à près de 298 000 €, mais le coût des intérêts augmente sensiblement.

## Comment augmenter sa capacité d'emprunt ?

Plusieurs leviers permettent d'emprunter davantage :

- **Augmenter l'apport** : il couvre les frais et rassure la banque.
- **Allonger la durée** jusqu'à 25 ans, courante dans le neuf.
- **Solder un crédit conso** pour libérer de la mensualité.
- **Mobiliser un [prêt à taux zéro](/simulateurs/pret-taux-zero/)**, qui complète le financement sans peser sur le taux d'endettement.

Pour aller plus loin, consultez nos guides sur le [financement d'un logement neuf](/blog/financer-logement-neuf-prets-aides/) et les [avantages de l'achat dans le neuf](/blog/acheter-dans-le-neuf-avantages-garanties/).

## Questions fréquentes

<details>
<summary>Quel salaire faut-il pour emprunter 200 000 € ?</summary>

Pour emprunter 200 000 € sur 20 ans à 3,5 %, la mensualité avoisine 1 160 €. Avec un taux d'endettement de 35 %, il faut donc environ 3 300 € de revenus nets mensuels, sans autre crédit en cours. Le simulateur ajuste ce montant selon votre durée et votre taux.

</details>

<details>
<summary>Quel est le taux d'endettement maximal autorisé ?</summary>

Le taux d'endettement est plafonné à 35 % des revenus nets, assurance emprunteur comprise, selon les recommandations du HCSF. Les banques disposent d'une marge de souplesse pour une partie de leurs dossiers, notamment les primo-accédants et les hauts revenus avec un reste à vivre confortable.

</details>

<details>
<summary>Comment augmenter sa capacité d'emprunt ?</summary>

Plusieurs leviers existent : augmenter l'apport personnel, allonger la durée du prêt (jusqu'à 25 ans dans le neuf), solder un crédit à la consommation, acheter à deux, ou mobiliser un prêt à taux zéro qui complète le prêt principal sans alourdir le taux d'endettement.

</details>
