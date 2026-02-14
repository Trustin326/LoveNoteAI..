import {
  requireLogin,
  requirePayment
} from "./common.js";

requireLogin();
requirePayment();

/* FEATURE BUTTON WIRES */

document.querySelectorAll(".open-tool").forEach(btn => {
  btn.addEventListener("click", () => {
    if (document.body.classList.contains("payment-locked")) {
      alert("Upgrade required");
      return;
    }
  });
});
