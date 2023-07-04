"use strict";

function emailDecode() {
  const emailElement = document.querySelector("code.language-shell");
  const emailB64 = emailElement.textContent.split('"')[1];
  const email = atob(emailB64).trim();
  const mailto = `<a href="mailto:${email}">${email}</a>`;
  emailElement.outerHTML = mailto;
}

const emailElement = document.querySelector("code.language-shell");
emailElement.addEventListener('click', emailDecode);
