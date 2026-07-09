---
title: "Simulateur de mensualités de prêt"
translationKey: "sim-mensualites"
type: "simulateur"
noindex: true
weight: 4
date: "2026-06-11"
lastmod: "2026-06-14"
description: "Calculez gratuitement les mensualités de votre prêt immobilier neuf selon le montant, la durée, le taux et l'assurance. Coût total des intérêts et de l'assurance."
faq:
  - question: "Comment calculer la mensualité d'un prêt immobilier ?"
    answer: "La mensualité dépend du montant emprunté, du taux d'intérêt et de la durée. Elle se calcule avec la formule d'amortissement : mensualité = capital × taux mensuel / (1 − (1 + taux mensuel)^−nombre de mois). Le simulateur ajoute l'assurance emprunteur pour obtenir la mensualité réelle."
  - question: "Quelle durée de prêt choisir dans le neuf ?"
    answer: "Dans le neuf, les durées de 20 à 25 ans sont courantes. Une durée plus longue réduit la mensualité mais augmente le coût total des intérêts. Une durée plus courte coûte moins cher au global mais exige une mensualité, donc des revenus, plus élevés."
  - question: "L'assurance emprunteur est-elle obligatoire ?"
    answer: "L'assurance emprunteur n'est pas légalement obligatoire mais elle est systématiquement exigée par les banques pour accorder un prêt immobilier. Son taux, appliqué au capital, représente une part non négligeable du coût total : elle est déléguable à un assureur externe pour réduire la facture."
readingTime: false
---

La mensualité d'un prêt immobilier dépend du **montant emprunté**, de la **durée**, du **taux d'intérêt** et de l'**assurance**. Renseignez ces paramètres pour connaître votre mensualité et le coût total de votre crédit pour un achat dans le neuf.

<div class="sim-calc" id="calc-mensualite">
  <div class="sim-calc-fields">
    <div class="sim-field"><label for="m-montant">Montant emprunté (€)</label><input type="number" id="m-montant" value="250000" min="0" step="10000"></div>
    <div class="sim-field"><label for="m-duree">Durée du prêt (années)</label><input type="number" id="m-duree" value="20" min="1" max="25" step="1"></div>
    <div class="sim-field"><label for="m-taux">Taux d'intérêt annuel (%)</label><input type="number" id="m-taux" value="3.5" min="0" step="0.1"></div>
    <div class="sim-field"><label for="m-assurance">Taux d'assurance annuel (%)</label><input type="number" id="m-assurance" value="0.34" min="0" step="0.01"></div>
  </div>
  <div class="sim-calc-result">
    <div><span class="sim-result-label">Mensualité (assurance incluse)</span><span class="sim-result-value" id="m-mensualite">—</span></div>
    <ul class="sim-result-details">
      <li><span>Dont mensualité hors assurance</span><span id="m-mensualite-hors-ass">—</span></li>
      <li><span>Coût total des intérêts</span><span id="m-interets">—</span></li>
      <li><span>Coût total de l'assurance</span><span id="m-cout-assurance">—</span></li>
      <li><span>Coût total du crédit</span><span id="m-cout-total">—</span></li>
    </ul>
  </div>
</div>

<p class="sim-note">Estimation indicative à taux fixe, assurance calculée sur le capital initial. Le coût réel dépend de l'offre de prêt et du contrat d'assurance retenus.</p>

## Comment se calcule une mensualité ?

La mensualité repose sur la formule d'amortissement : elle combine le **capital emprunté**, le **taux d'intérêt mensuel** et le **nombre de mensualités**. Chaque échéance rembourse une part d'intérêts et une part de capital, la proportion évoluant au fil du prêt. À cette mensualité s'ajoute l'**assurance emprunteur**, calculée sur le capital.

### Exemple chiffré

Pour un emprunt de **250 000 € sur 20 ans à 3,5 %**, avec une assurance à 0,34 %, la mensualité s'élève à environ **1 521 €** (dont 71 € d'assurance). Sur la durée totale, le crédit coûte près de **115 000 €** : environ 98 000 € d'intérêts et 17 000 € d'assurance. En passant sur 15 ans, la mensualité grimpe à environ 1 858 €, mais le coût total tombe sous les 85 000 €.

## Quel impact de la durée et du taux ?

Allonger la durée **réduit la mensualité** mais augmente le coût total des intérêts. À l'inverse, un prêt plus court coûte moins cher au global mais demande des revenus plus élevés. Le taux, lui, pèse directement sur le coût : quelques dixièmes de point représentent des milliers d'euros sur 20 ans. Vérifiez en amont votre [capacité d'emprunt](/simulateurs/capacite-emprunt/).

## Comment alléger sa mensualité ?

Plusieurs leviers réduisent la mensualité : augmenter l'apport, allonger la durée, négocier le taux ou déléguer l'assurance emprunteur. Pensez aussi au [prêt à taux zéro](/simulateurs/pret-taux-zero/), qui finance une partie sans intérêts. Pour préparer votre projet, consultez nos guides sur le [financement d'un logement neuf](/blog/financer-logement-neuf-prets-aides/) et les [avantages de l'achat dans le neuf](/blog/acheter-dans-le-neuf-avantages-garanties/).

## Questions fréquentes

<details>
<summary>Comment calculer la mensualité d'un prêt immobilier ?</summary>

La mensualité dépend du montant emprunté, du taux d'intérêt et de la durée. Elle se calcule avec la formule d'amortissement : mensualité = capital × taux mensuel / (1 − (1 + taux mensuel)^−nombre de mois). Le simulateur ajoute l'assurance emprunteur pour obtenir la mensualité réelle.

</details>

<details>
<summary>Quelle durée de prêt choisir dans le neuf ?</summary>

Dans le neuf, les durées de 20 à 25 ans sont courantes. Une durée plus longue réduit la mensualité mais augmente le coût total des intérêts. Une durée plus courte coûte moins cher au global mais exige une mensualité, donc des revenus, plus élevés.

</details>

<details>
<summary>L'assurance emprunteur est-elle obligatoire ?</summary>

L'assurance emprunteur n'est pas légalement obligatoire mais elle est systématiquement exigée par les banques pour accorder un prêt immobilier. Son taux, appliqué au capital, représente une part non négligeable du coût total : elle est déléguable à un assureur externe pour réduire la facture.

</details>
