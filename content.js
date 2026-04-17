document.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;

  const active = document.activeElement;

  // Allow Shift+Enter for new lines
  if (active && active.tagName === "TEXTAREA" && e.shiftKey) return;

  // 🔍 Check if modal (dialog) is open
  const modal = document.querySelector('[role="dialog"]');

  if (modal) {
    // ✅ Find commit button INSIDE modal only
    const confirmBtn = Array.from(modal.querySelectorAll("button"))
      .find(btn => btn.innerText.toLowerCase().includes("commit"));

    if (confirmBtn) {
      e.preventDefault();
      confirmBtn.click();
      console.log("✅ Final commit clicked (modal)");
      return;
    }
  }

  // 🔍 If modal NOT open → click top button
  const openBtn = Array.from(document.querySelectorAll("button"))
    .find(btn =>
      btn.innerText.toLowerCase().includes("commit changes") &&
      !btn.closest('[role="dialog"]')
    );

  if (openBtn) {
    e.preventDefault();
    openBtn.click();
    console.log("✅ Open commit modal clicked");
  }
});