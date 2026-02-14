import { setPaidTrue } from "./common.js";

function checkStripeRedirect() {
  const url = new URL(window.location.href);

  if (url.searchParams.get("paid") === "true") {
    setPaidTrue();
    window.location.href = "/dashboard.html";
  }
}

checkStripeRedirect();
