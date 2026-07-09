---
title: "Borrowing capacity calculator"
translationKey: "sim-capacite-emprunt"
type: "simulateur"
noindex: true
weight: 1
date: "2026-06-11"
lastmod: "2026-06-14"
description: "Calculate your borrowing capacity for free for a new-build purchase in Île-de-France based on your income, expenses, deposit and loan term."
faq:
  - question: "What income do you need to borrow 200,000 €?"
    answer: "To borrow 200,000 € over 20 years at 3.5%, the monthly payment is around 1,160 €. With a 35% debt-to-income ratio, you therefore need about 3,300 € in net monthly income, with no other loans. The calculator adjusts this figure for your term and rate."
  - question: "What is the maximum debt-to-income ratio?"
    answer: "The debt-to-income ratio is capped at 35% of net income, including borrower insurance, under French HCSF guidelines. Banks keep some flexibility for part of their files, notably first-time buyers and higher incomes with a comfortable remaining living budget."
  - question: "How can you increase your borrowing capacity?"
    answer: "Several levers exist: increase your deposit, extend the loan term (up to 25 years for new-build), pay off a consumer loan, buy as a couple, or use a zero-rate loan that tops up the main loan without weighing on the debt ratio."
readingTime: false
---

Borrowing capacity is the amount a bank agrees to lend you to finance your new home. It depends on your **income**, your **expenses**, your **deposit** and the **loan term**, within a debt-to-income ratio capped at 35% of net income.

<div class="sim-calc" id="calc-capacite">
  <div class="sim-calc-fields">
    <div class="sim-field"><label for="ce-revenus">Net monthly household income (€)</label><input type="number" id="ce-revenus" value="4500" min="0" step="100"></div>
    <div class="sim-field"><label for="ce-charges">Monthly expenses: existing loans, alimony (€)</label><input type="number" id="ce-charges" value="0" min="0" step="50"></div>
    <div class="sim-field"><label for="ce-endettement">Maximum debt-to-income ratio (%)</label><input type="number" id="ce-endettement" value="35" min="0" max="40" step="1"></div>
    <div class="sim-field"><label for="ce-duree">Loan term (years)</label><input type="number" id="ce-duree" value="20" min="1" max="25" step="1"></div>
    <div class="sim-field"><label for="ce-taux">Annual interest rate (%)</label><input type="number" id="ce-taux" value="3.5" min="0" step="0.1"></div>
    <div class="sim-field"><label for="ce-assurance">Annual insurance rate (%)</label><input type="number" id="ce-assurance" value="0.34" min="0" step="0.01"></div>
    <div class="sim-field"><label for="ce-apport">Personal deposit (€)</label><input type="number" id="ce-apport" value="20000" min="0" step="1000"></div>
  </div>
  <div class="sim-calc-result">
    <div><span class="sim-result-label">Estimated borrowing capacity</span><span class="sim-result-value" id="ce-capacite">—</span></div>
    <ul class="sim-result-details">
      <li><span>Maximum monthly payment</span><span id="ce-mensualite">—</span></li>
      <li><span>Total budget with deposit</span><span id="ce-budget">—</span></li>
    </ul>
  </div>
</div>

<p class="sim-note">Indicative estimate, borrower insurance included in the debt-to-income ratio. The remaining living budget is not taken into account: only a bank or broker confirms a final borrowing capacity.</p>

## How does borrowing capacity work?

The bank starts from your **net monthly income** (salaries, stable rental income, pensions) and applies a maximum **debt-to-income ratio** of 35%, insurance included. It deducts your existing loan payments to obtain the monthly amount you can devote to your new loan. This payment, combined with the term and rate, determines the capital you can borrow.

## How is it calculated?

The calculation has two steps. First the maximum monthly payment: `(income × 35%) − expenses`. Then the conversion of that payment into capital, using the amortisation formula that accounts for the **interest rate**, the **term** and the **insurance** (included in the 35%). A longer term increases the capital you can borrow but raises the total interest cost. To see that cost, use our [monthly payment calculator](/en/calculators/monthly-payments/).

### Worked example

A couple earns 4,500 € net per month, with no current loan, borrowing over 20 years at 3.5% (insurance 0.34%). Their maximum monthly payment is 1,575 € (35% of 4,500 €). That corresponds to a borrowing capacity of about **259,000 €**, or a budget of **279,000 €** with a 20,000 € deposit. Extending the term to 25 years raises the capacity to nearly 298,000 €, but the interest cost increases significantly.

## How can you increase your borrowing capacity?

Several levers let you borrow more:

- **Increase the deposit**: it covers fees and reassures the bank.
- **Extend the term** up to 25 years, common for new-build.
- **Pay off a consumer loan** to free up monthly capacity.
- **Use a [zero-rate loan](/en/calculators/zero-rate-loan/)**, which tops up financing without affecting the debt ratio.

To go further, read our guides on [financing a new home](/en/blog/financing-new-home-loans-grants/) and the [benefits of buying new-build](/en/blog/buying-new-build-benefits-guarantees/).

## Frequently asked questions

<details>
<summary>What income do you need to borrow 200,000 €?</summary>

To borrow 200,000 € over 20 years at 3.5%, the monthly payment is around 1,160 €. With a 35% debt-to-income ratio, you therefore need about 3,300 € in net monthly income, with no other loans. The calculator adjusts this figure for your term and rate.

</details>

<details>
<summary>What is the maximum debt-to-income ratio?</summary>

The debt-to-income ratio is capped at 35% of net income, including borrower insurance, under French HCSF guidelines. Banks keep some flexibility for part of their files, notably first-time buyers and higher incomes with a comfortable remaining living budget.

</details>

<details>
<summary>How can you increase your borrowing capacity?</summary>

Several levers exist: increase your deposit, extend the loan term (up to 25 years for new-build), pay off a consumer loan, buy as a couple, or use a zero-rate loan that tops up the main loan without weighing on the debt ratio.

</details>
