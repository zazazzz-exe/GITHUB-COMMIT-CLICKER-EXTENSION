document.addEventListener("keydown", function (e) {
  if (e.key !== "Enter") return;

  // Check if commit modal exists
  const commitModal = document.querySelector('[aria-label="Commit changes"]');
  if (!commitModal) return;

  const active = document.activeElement;

  // Allow Enter inside commit message textarea
  if (active && active.tagName === "TEXTAREA") {
    // Optional: only commit if Ctrl is NOT pressed (avoid newline issues)
    if (e.shiftKey) return; // allow Shift+Enter for new line
  }

  const buttons = document.querySelectorAll("button");

  for (let btn of buttons) {
    if (btn.innerText.toLowerCase().includes("commit changes")) {
      e.preventDefault(); // stop default behavior
      btn.click();
      console.log("✅ Commit triggered by Enter");
      return;
    }
  }
});