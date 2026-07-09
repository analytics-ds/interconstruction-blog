---
title: "Monthly payments calculator"
translationKey: "sim-mensualites"
type: "simulateur"
noindex: true
weight: 4
date: "2026-06-11"
lastmod: "2026-06-14"
description: "Calculate your new-build mortgage monthly payments for free based on the amount, term, interest rate and insurance. Total cost of interest and insurance."
faq:
  - question: "How do you calculate a mortgage monthly payment?"
    answer: "The monthly payment depends on the amount borrowed, the interest rate and the term. It is calculated with the amortisation formula: payment = capital × monthly rate / (1 − (1 + monthly rate)^−number of months). The calculator adds borrower insurance to obtain the real monthly payment."
  - question: "Which loan term should you choose for new-build?"
    answer: "For new-build, terms of 20 to 25 years are common. A longer term lowers the monthly payment but increases the total interest cost. A shorter term costs less overall but requires a higher monthly payment, and therefore higher income."
  - question: "Is borrower insurance mandatory?"
    answer: "Borrower insurance is not legally mandatory but banks systematically require it to grant a mortgage. Its rate, applied to the capital, represents a significant share of the total cost: it can be delegated to an external insurer to reduce the bill."
readingTime: false
---

A mortgage monthly payment depends on the **amount borrowed**, the **term**, the **interest rate** and the **insurance**. Enter these to find your monthly payment and the total cost of your loan for a new-build purchase.

<div class="sim-calc" id="calc-mensualite">
  <div class="sim-calc-fields">
    <div class="sim-field"><label for="m-montant">Amount borrowed (€)</label><input type="number" id="m-montant" value="250000" min="0" step="10000"></div>
    <div class="sim-field"><label for="m-duree">Loan term (years)</label><input type="number" id="m-duree" value="20" min="1" max="25" step="1"></div>
    <div class="sim-field"><label for="m-taux">Annual interest rate (%)</label><input type="number" id="m-taux" value="3.5" min="0" step="0.1"></div>
    <div class="sim-field"><label for="m-assurance">Annual insurance rate (%)</label><input type="number" id="m-assurance" value="0.34" min="0" step="0.01"></div>
  </div>
  <div class="sim-calc-result">
    <div><span class="sim-result-label">Monthly payment (insurance included)</span><span class="sim-result-value" id="m-mensualite">—</span></div>
    <ul class="sim-result-details">
      <li><span>Of which payment excl. insurance</span><span id="m-mensualite-hors-ass">—</span></li>
      <li><span>Total interest cost</span><span id="m-interets">—</span></li>
      <li><span>Total insurance cost</span><span id="m-cout-assurance">—</span></li>
      <li><span>Total cost of the loan</span><span id="m-cout-total">—</span></li>
    </ul>
  </div>
</div>

<p class="sim-note">Indicative fixed-rate estimate, insurance calculated on the initial capital. The real cost depends on the loan offer and insurance contract chosen.</p>

## How is a monthly payment calculated?

The monthly payment relies on the amortisation formula: it combines the **capital borrowed**, the **monthly interest rate** and the **number of payments**. Each instalment repays part interest and part capital, with the proportion shifting over the life of the loan. To this payment is added **borrower insurance**, calculated on the capital.

### Worked example

For a loan of **250,000 € over 20 years at 3.5%**, with insurance at 0.34%, the monthly payment is around **1,521 €** (including 71 € of insurance). Over the full term, the loan costs nearly **115,000 €**: about 98,000 € of interest and 17,000 € of insurance. Switching to 15 years raises the payment to around 1,858 €, but the total cost falls below 85,000 €.

## What is the impact of term and rate?

Extending the term **lowers the monthly payment** but increases the total interest cost. Conversely, a shorter loan costs less overall but requires higher income. The rate weighs directly on the cost: a few tenths of a point mean thousands of euros over 20 years. Check your [borrowing capacity](/en/calculators/borrowing-capacity/) first.

## How to lower your monthly payment?

Several levers reduce the monthly payment: increase the deposit, extend the term, negotiate the rate or delegate borrower insurance. Also consider the [zero-rate loan](/en/calculators/zero-rate-loan/), which finances part of the purchase interest-free. To prepare your project, read our guides on [financing a new home](/en/blog/financing-new-home-loans-grants/) and the [benefits of buying new-build](/en/blog/buying-new-build-benefits-guarantees/).

## Frequently asked questions

<details>
<summary>How do you calculate a mortgage monthly payment?</summary>

The monthly payment depends on the amount borrowed, the interest rate and the term. It is calculated with the amortisation formula: payment = capital × monthly rate / (1 − (1 + monthly rate)^−number of months). The calculator adds borrower insurance to obtain the real monthly payment.

</details>

<details>
<summary>Which loan term should you choose for new-build?</summary>

For new-build, terms of 20 to 25 years are common. A longer term lowers the monthly payment but increases the total interest cost. A shorter term costs less overall but requires a higher monthly payment, and therefore higher income.

</details>

<details>
<summary>Is borrower insurance mandatory?</summary>

Borrower insurance is not legally mandatory but banks systematically require it to grant a mortgage. Its rate, applied to the capital, represents a significant share of the total cost: it can be delegated to an external insurer to reduce the bill.

</details>
