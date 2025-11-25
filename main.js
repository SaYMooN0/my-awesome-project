(() => {
  const dialog = document.getElementById("contactDialog");
  const openBtn = document.getElementById("openDialog");
  const closeBtn = document.getElementById("closeDialog");

  if (openBtn) {
    openBtn.addEventListener("click", () => dialog.showModal());
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Сообщение отправлено!");
      dialog.close();
      form.reset();
    });
  }
})();
