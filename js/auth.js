import { supabase } from "./supabaseClient.js";
import { saveUserSession } from "./common.js";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async e => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const { data, error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (error) {
      alert(error.message);
      return;
    }

    saveUserSession(data.user);
    window.location.href = "/dashboard.html";
  });
}
