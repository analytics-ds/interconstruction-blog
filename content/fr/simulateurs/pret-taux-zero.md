---
title: "Simulateur de prêt à taux zéro (PTZ)"
translationKey: "sim-ptz"
type: "simulateur"
noindex: true
weight: 3
date: "2026-06-11"
lastmod: "2026-06-14"
description: "Vérifiez gratuitement votre éligibilité au prêt à taux zéro (PTZ) et estimez le montant pour un achat dans le neuf en Île-de-France selon votre zone et vos revenus."
faq:
  - question: "Qui peut bénéficier du prêt à taux zéro ?"
    answer: "Le PTZ s'adresse aux primo-accédants, c'est-à-dire qui n'ont pas été propriétaires de leur résidence principale durant les deux dernières années, sous conditions de ressources selon la zone géographique et la composition du foyer. Il finance l'achat d'une résidence principale, dans le neuf comme dans l'ancien avec travaux selon les zones."
  - question: "Quel montant peut-on obtenir avec un PTZ ?"
    answer: "Le PTZ peut financer jusqu'à 50 % du coût de l'opération dans le neuf, dans la limite d'un plafond qui dépend de la zone et du nombre d'occupants. En Île-de-France (zones A et B1), les plafonds sont les plus élevés. Le montant exact dépend aussi de la tranche de revenus du foyer."
  - question: "Le PTZ est-il cumulable avec un prêt classique ?"
    answer: "Oui, le PTZ est un prêt complémentaire, sans intérêts ni frais de dossier, qui s'ajoute au prêt immobilier principal. Il ne couvre jamais la totalité de l'achat et n'alourdit pas le taux d'endettement, ce qui en fait un levier puissant pour les primo-accédants."
readingTime: false
---

Le prêt à taux zéro (PTZ) est un prêt sans intérêts réservé aux **primo-accédants**, qui complète le prêt principal pour l'achat d'une résidence principale neuve. Son montant dépend de votre **zone**, de vos **revenus** et de la **composition du foyer**. Vérifiez votre éligibilité et estimez le montant.

<div class="sim-calc" id="calc-ptz">
  <div class="sim-calc-fields">
    <div class="sim-field"><label for="ptz-zone">Zone géographique</label>
      <select id="ptz-zone">
        <option value="A">Zone A / A bis (Paris et proche couronne)</option>
        <option value="B1">Zone B1 (grande couronne, grandes villes)</option>
        <option value="B2">Zone B2 (villes moyennes)</option>
        <option value="C">Zone C (reste du territoire)</option>
      </select>
    </div>
    <div class="sim-field"><label for="ptz-personnes">Nombre de personnes dans le foyer</label><input type="number" id="ptz-personnes" value="2" min="1" max="8" step="1"></div>
    <div class="sim-field"><label for="ptz-revenu">Revenu fiscal de référence (N-2, €)</label><input type="number" id="ptz-revenu" value="40000" min="0" step="1000"></div>
    <div class="sim-field"><label for="ptz-cout">Coût total de l'opération (€)</label><input type="number" id="ptz-cout" value="300000" min="0" step="10000"></div>
    <div class="sim-field"><label for="ptz-type">Type de logement</label>
      <select id="ptz-type">
        <option value="neuf">Neuf (logement collectif)</option>
        <option value="ancien">Ancien avec travaux</option>
      </select>
    </div>
  </div>
  <div class="sim-calc-result">
    <div><span class="sim-result-label">Montant de PTZ estimé</span><span class="sim-result-value" id="ptz-montant">—</span></div>
    <ul class="sim-result-details">
      <li><span>Éligibilité</span><span class="sim-badge" id="ptz-eligible" data-ok="Éligible" data-ko="Revenus au-dessus du plafond">—</span></li>
      <li><span>Plafond de revenus</span><span id="ptz-plafond-revenu">—</span></li>
      <li><span>Quotité appliquée</span><span id="ptz-quotite">—</span></li>
    </ul>
  </div>
</div>

<p class="sim-note">Estimation indicative selon les barèmes 2024. Le montant définitif dépend de votre tranche de revenus et est calculé par la banque. Vérifiez sur le simulateur officiel de l'ANIL ou de service-public.fr.</p>

## Comment fonctionne le prêt à taux zéro ?

Le PTZ finance une partie de l'achat **sans intérêts ni frais de dossier**. Il s'adresse aux ménages qui n'ont pas été propriétaires de leur résidence principale au cours des deux dernières années. Son montant est plafonné selon la **zone géographique** (l'Île-de-France relève des zones A et B1, les plus favorables) et le **nombre d'occupants**.

## Comment est calculé le montant ?

Le simulateur applique une **quotité** au coût de l'opération, plafonné selon votre zone et votre foyer. Cette quotité est **dégressive selon votre tranche de revenus** : jusqu'à 50 % pour les revenus les plus modestes (tranche 1), puis 40 %, 40 % et 20 % pour la tranche 4. Le revenu est rapporté à un coefficient familial, puis comparé aux plafonds de votre zone. Le montant obtenu vient s'ajouter à votre prêt principal sans peser sur votre [capacité d'emprunt](/simulateurs/capacite-emprunt/).

### Exemple chiffré

Un couple en **zone A** avec **40 000 € de revenus** achète un appartement neuf à 300 000 €. Son quotient familial le place en **tranche 2 (quotité 40 %)**. Le coût retenu est plafonné à 225 000 € : le PTZ atteint donc environ **90 000 €**, sans intérêts, à déduire du montant à financer par le prêt principal. Avec des revenus plus modestes (tranche 1), la quotité monterait à 50 %, soit près de 112 500 €.

## Comment maximiser son PTZ ?

Acheter dans le neuf en zone tendue (A ou B1) offre la quotité et les plafonds les plus élevés. Anticipez aussi la composition du foyer et le coût total de l'opération, frais inclus. Pour intégrer le PTZ dans votre plan de financement, estimez vos [mensualités](/simulateurs/mensualites/) et consultez nos guides sur le [financement d'un logement neuf](/blog/financer-logement-neuf-prets-aides/) et les [avantages de l'achat dans le neuf](/blog/acheter-dans-le-neuf-avantages-garanties/).

## Questions fréquentes

<details>
<summary>Qui peut bénéficier du prêt à taux zéro ?</summary>

Le PTZ s'adresse aux primo-accédants, c'est-à-dire qui n'ont pas été propriétaires de leur résidence principale durant les deux dernières années, sous conditions de ressources selon la zone géographique et la composition du foyer. Il finance l'achat d'une résidence principale, dans le neuf comme dans l'ancien avec travaux selon les zones.

</details>

<details>
<summary>Quel montant peut-on obtenir avec un PTZ ?</summary>

Le PTZ peut financer jusqu'à 50 % du coût de l'opération dans le neuf, dans la limite d'un plafond qui dépend de la zone et du nombre d'occupants. En Île-de-France (zones A et B1), les plafonds sont les plus élevés. Le montant exact dépend aussi de la tranche de revenus du foyer.

</details>

<details>
<summary>Le PTZ est-il cumulable avec un prêt classique ?</summary>

Oui, le PTZ est un prêt complémentaire, sans intérêts ni frais de dossier, qui s'ajoute au prêt immobilier principal. Il ne couvre jamais la totalité de l'achat et n'alourdit pas le taux d'endettement, ce qui en fait un levier puissant pour les primo-accédants.

</details>
