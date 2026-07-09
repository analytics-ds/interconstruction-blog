/* Simulateurs immobiliers - Le Mag Interconstruction
   Calculettes interactives : capacite d'emprunt, frais de notaire, PTZ, mensualites.
   Les libelles sont dans le HTML (FR/EN) ; ce script ne remplit que les valeurs chiffrees. */
(function () {
  "use strict";

  var eur = function (x) {
    if (!isFinite(x) || x < 0) x = 0;
    return Math.round(x).toLocaleString("fr-FR") + " €";
  };
  var pct = function (x) {
    if (!isFinite(x)) x = 0;
    return x.toLocaleString("fr-FR", { maximumFractionDigits: 2 }) + " %";
  };
  var num = function (id) {
    var el = document.getElementById(id);
    if (!el) return 0;
    var v = parseFloat(String(el.value).replace(",", "."));
    return isNaN(v) ? 0 : v;
  };
  var val = function (id) {
    var el = document.getElementById(id);
    return el ? el.value : "";
  };
  var set = function (id, txt) {
    var el = document.getElementById(id);
    if (el) el.textContent = txt;
  };

  // Mensualite d'un capital (amortissement constant)
  function mensualite(capital, tauxAnnuel, annees) {
    var i = tauxAnnuel / 100 / 12;
    var n = annees * 12;
    if (n <= 0) return 0;
    if (i === 0) return capital / n;
    return (capital * i) / (1 - Math.pow(1 + i, -n));
  }
  // Capital empruntable a partir d'une mensualite
  function capitalDepuisMensualite(M, tauxAnnuel, annees) {
    var i = tauxAnnuel / 100 / 12;
    var n = annees * 12;
    if (n <= 0) return 0;
    if (i === 0) return M * n;
    return (M * (1 - Math.pow(1 + i, -n))) / i;
  }

  /* 1. Capacite d'emprunt (assurance comprise dans le taux d'endettement) */
  function initCapacite() {
    var root = document.getElementById("calc-capacite");
    if (!root) return;
    function calc() {
      var revenus = num("ce-revenus");
      var charges = num("ce-charges");
      var endett = num("ce-endettement") || 35;
      var duree = num("ce-duree") || 20;
      var taux = num("ce-taux");
      var apport = num("ce-apport");
      var tauxAss = num("ce-assurance");
      var mensMax = revenus * (endett / 100) - charges;
      if (mensMax < 0) mensMax = 0;
      // La mensualite max couvre le pret ET l'assurance (calculee sur le capital).
      var i = taux / 100 / 12;
      var n = duree * 12;
      var facteurPret = n <= 0 ? 0 : i === 0 ? 1 / n : i / (1 - Math.pow(1 + i, -n));
      var denom = facteurPret + tauxAss / 100 / 12;
      var capacite = denom > 0 ? mensMax / denom : 0;
      set("ce-mensualite", eur(mensMax));
      set("ce-capacite", eur(capacite));
      set("ce-budget", eur(capacite + apport));
    }
    root.addEventListener("input", calc);
    calc();
  }

  /* 2. Frais de notaire */
  function emolumentsHT(prix) {
    var tranches = [
      [6500, 3.870],
      [17000, 1.596],
      [60000, 1.064],
      [Infinity, 0.799]
    ];
    var prev = 0, sum = 0;
    for (var k = 0; k < tranches.length; k++) {
      var seuil = tranches[k][0], t = tranches[k][1];
      var part = Math.min(prix, seuil) - prev;
      if (part > 0) sum += (part * t) / 100;
      prev = seuil;
      if (prix <= seuil) break;
    }
    return sum;
  }
  function initNotaire() {
    var root = document.getElementById("calc-notaire");
    if (!root) return;
    function calc() {
      var prix = num("fn-prix");
      var type = val("fn-type") || "neuf";
      var tauxDroits = type === "ancien" ? 6.31 : 0.715;
      var droits = (prix * tauxDroits) / 100;
      var csi = (prix * 0.10) / 100;
      var emolTTC = emolumentsHT(prix) * 1.20;
      var debours = type === "ancien" ? 1200 : 400;
      var total = droits + csi + emolTTC + debours;
      set("fn-droits", eur(droits));
      set("fn-emoluments", eur(emolTTC));
      set("fn-csi", eur(csi));
      set("fn-debours", eur(debours));
      set("fn-total", eur(total));
      set("fn-pct", prix > 0 ? pct((total / prix) * 100) : "—");
    }
    root.addEventListener("input", calc);
    root.addEventListener("change", calc);
    calc();
  }

  /* 3. Pret a taux zero (estimation, baremes 2024) */
  // Coefficient familial (1 a 8 personnes et plus)
  var PTZ_CF = [1, 1.5, 1.8, 2.1, 2.4, 2.7, 3.0, 3.3];
  // Plafonds de quotient familial par tranche (T1, T2, T3, T4 = plafond d'eligibilite)
  var PTZ_TRANCHES = {
    A:  [25000, 31000, 37000, 49000],
    B1: [21500, 26000, 30000, 34500],
    B2: [18000, 22500, 27000, 31500],
    C:  [15000, 19500, 24000, 28500]
  };
  // Plafond du cout de l'operation par zone et nombre de personnes (1 a 5+)
  var PTZ_OPERATION = {
    A:  [150000, 225000, 270000, 315000, 360000],
    B1: [135000, 202500, 243000, 283500, 324000],
    B2: [110000, 165000, 198000, 231000, 264000],
    C:  [100000, 150000, 180000, 210000, 240000]
  };
  // Quotite degressive par tranche (T1 a T4)
  var PTZ_QUOTITE = {
    neuf:   [0.50, 0.40, 0.40, 0.20],
    ancien: [0.50, 0.40, 0.40, 0.20]
  };
  function cf(personnes) {
    return PTZ_CF[Math.min(Math.max(personnes, 1), 8) - 1];
  }
  function plafondOp(zone, personnes) {
    var arr = PTZ_OPERATION[zone] || PTZ_OPERATION.C;
    return arr[Math.min(Math.max(personnes, 1), 5) - 1];
  }
  function initPtz() {
    var root = document.getElementById("calc-ptz");
    if (!root) return;
    function calc() {
      var zone = val("ptz-zone") || "A";
      var personnes = num("ptz-personnes") || 1;
      var revenu = num("ptz-revenu");
      var cout = num("ptz-cout");
      var type = val("ptz-type") || "neuf";
      var coef = cf(personnes);
      var tr = PTZ_TRANCHES[zone] || PTZ_TRANCHES.C;
      // Revenu retenu = max(revenu fiscal, cout / 9), puis quotient familial
      var revenuRetenu = Math.max(revenu, cout / 9);
      var quotient = revenuRetenu / coef;
      var eligible = revenu > 0 && quotient <= tr[3];
      // Tranche (0 a 3) selon le quotient
      var ti = 0;
      while (ti < 3 && quotient > tr[ti]) ti++;
      var quotite = (PTZ_QUOTITE[type] || PTZ_QUOTITE.neuf)[ti];
      var assiette = Math.min(cout, plafondOp(zone, personnes));
      var montant = eligible ? assiette * quotite : 0;
      set("ptz-quotite", eligible ? pct(quotite * 100) + " (tranche " + (ti + 1) + ")" : "—");
      set("ptz-plafond-revenu", eur(tr[3] * coef));
      set("ptz-montant", eligible ? eur(montant) : "0 €");
      var statut = document.getElementById("ptz-eligible");
      if (statut) {
        if (revenu <= 0) {
          statut.textContent = "—";
          statut.className = "sim-badge";
        } else if (eligible) {
          statut.textContent = statut.getAttribute("data-ok") || "Éligible";
          statut.className = "sim-badge sim-badge-ok";
        } else {
          statut.textContent = statut.getAttribute("data-ko") || "Revenus au-dessus du plafond";
          statut.className = "sim-badge sim-badge-ko";
        }
      }
    }
    root.addEventListener("input", calc);
    root.addEventListener("change", calc);
    calc();
  }

  /* 4. Mensualites */
  function initMensualite() {
    var root = document.getElementById("calc-mensualite");
    if (!root) return;
    function calc() {
      var montant = num("m-montant");
      var duree = num("m-duree") || 20;
      var taux = num("m-taux");
      var tauxAss = num("m-assurance");
      var n = duree * 12;
      var M = mensualite(montant, taux, duree);
      var assMens = (montant * (tauxAss / 100)) / 12;
      var interets = M * n - montant;
      var coutAss = assMens * n;
      set("m-mensualite", eur(M + assMens));
      set("m-mensualite-hors-ass", eur(M));
      set("m-interets", eur(interets));
      set("m-cout-assurance", eur(coutAss));
      set("m-cout-total", eur(interets + coutAss));
    }
    root.addEventListener("input", calc);
    calc();
  }

  function init() {
    initCapacite();
    initNotaire();
    initPtz();
    initMensualite();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
