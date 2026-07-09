---
title: "Zero-rate loan (PTZ) calculator"
translationKey: "sim-ptz"
type: "simulateur"
noindex: true
weight: 3
date: "2026-06-11"
lastmod: "2026-06-14"
description: "Check your eligibility for the zero-rate loan (PTZ) for free and estimate the amount for a new-build purchase in Île-de-France based on your zone and income."
faq:
  - question: "Who can get the zero-rate loan?"
    answer: "The PTZ is for first-time buyers, meaning those who have not owned their main residence in the last two years, subject to income conditions based on the geographic zone and household size. It finances a main residence, for new-build and for older homes with works depending on the zone."
  - question: "How much can you get with a PTZ?"
    answer: "The PTZ can finance up to 50% of the operation cost for new-build, within a ceiling that depends on the zone and the number of occupants. In Île-de-France (zones A and B1), the ceilings are the highest. The exact amount also depends on the household income bracket."
  - question: "Can the PTZ be combined with a standard loan?"
    answer: "Yes, the PTZ is a complementary loan, interest-free and fee-free, that adds to the main mortgage. It never covers the entire purchase and does not weigh on the debt-to-income ratio, which makes it a powerful lever for first-time buyers."
readingTime: false
---

The zero-rate loan (PTZ) is an interest-free loan reserved for **first-time buyers**, topping up the main loan to buy a new main residence. Its amount depends on your **zone**, your **income** and your **household size**. Check your eligibility and estimate the amount.

<div class="sim-calc" id="calc-ptz">
  <div class="sim-calc-fields">
    <div class="sim-field"><label for="ptz-zone">Geographic zone</label>
      <select id="ptz-zone">
        <option value="A">Zone A / A bis (Paris and inner suburbs)</option>
        <option value="B1">Zone B1 (outer suburbs, large cities)</option>
        <option value="B2">Zone B2 (mid-size towns)</option>
        <option value="C">Zone C (rest of the country)</option>
      </select>
    </div>
    <div class="sim-field"><label for="ptz-personnes">Number of people in the household</label><input type="number" id="ptz-personnes" value="2" min="1" max="8" step="1"></div>
    <div class="sim-field"><label for="ptz-revenu">Reference tax income (N-2, €)</label><input type="number" id="ptz-revenu" value="40000" min="0" step="1000"></div>
    <div class="sim-field"><label for="ptz-cout">Total operation cost (€)</label><input type="number" id="ptz-cout" value="300000" min="0" step="10000"></div>
    <div class="sim-field"><label for="ptz-type">Property type</label>
      <select id="ptz-type">
        <option value="neuf">New-build (apartment)</option>
        <option value="ancien">Older home with works</option>
      </select>
    </div>
  </div>
  <div class="sim-calc-result">
    <div><span class="sim-result-label">Estimated PTZ amount</span><span class="sim-result-value" id="ptz-montant">—</span></div>
    <ul class="sim-result-details">
      <li><span>Eligibility</span><span class="sim-badge" id="ptz-eligible" data-ok="Eligible" data-ko="Income above the ceiling">—</span></li>
      <li><span>Income ceiling</span><span id="ptz-plafond-revenu">—</span></li>
      <li><span>Applied share</span><span id="ptz-quotite">—</span></li>
    </ul>
  </div>
</div>

<p class="sim-note">Indicative estimate based on 2024 scales. The final amount depends on your income bracket and is calculated by the bank. Check the official ANIL or service-public.fr simulator.</p>

## How does the zero-rate loan work?

The PTZ finances part of the purchase **interest-free and fee-free**. It is for households that have not owned their main residence in the last two years. Its amount is capped by **geographic zone** (Île-de-France falls under zones A and B1, the most favourable) and the **number of occupants**.

## How is the amount calculated?

The calculator applies a **share** to the operation cost, capped by your zone and household. This share is **degressive based on your income bracket**: up to 50% for the lowest incomes (bracket 1), then 40%, 40% and 20% for bracket 4. The income is divided by a family coefficient, then compared to your zone's thresholds. The amount obtained adds to your main loan without weighing on your [borrowing capacity](/en/calculators/borrowing-capacity/).

### Worked example

A couple in **zone A** with **40,000 € of income** buys a new apartment at 300,000 €. Their family quotient places them in **bracket 2 (40% share)**. The eligible cost is capped at 225,000 €: the PTZ therefore reaches about **90,000 €**, interest-free, to deduct from the amount financed by the main loan. With lower income (bracket 1), the share would rise to 50%, or nearly 112,500 €.

## How to maximise your PTZ?

Buying new-build in a high-demand zone (A or B1) offers the highest share and ceilings. Also anticipate the household size and the total operation cost, fees included. To fit the PTZ into your financing plan, estimate your [monthly payments](/en/calculators/monthly-payments/) and read our guides on [financing a new home](/en/blog/financing-new-home-loans-grants/) and the [benefits of buying new-build](/en/blog/buying-new-build-benefits-guarantees/).

## Frequently asked questions

<details>
<summary>Who can get the zero-rate loan?</summary>

The PTZ is for first-time buyers, meaning those who have not owned their main residence in the last two years, subject to income conditions based on the geographic zone and household size. It finances a main residence, for new-build and for older homes with works depending on the zone.

</details>

<details>
<summary>How much can you get with a PTZ?</summary>

The PTZ can finance up to 50% of the operation cost for new-build, within a ceiling that depends on the zone and the number of occupants. In Île-de-France (zones A and B1), the ceilings are the highest. The exact amount also depends on the household income bracket.

</details>

<details>
<summary>Can the PTZ be combined with a standard loan?</summary>

Yes, the PTZ is a complementary loan, interest-free and fee-free, that adds to the main mortgage. It never covers the entire purchase and does not weigh on the debt-to-income ratio, which makes it a powerful lever for first-time buyers.

</details>
