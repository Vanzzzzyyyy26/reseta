function clearAll() {
  if (!confirm("I-clear lahat?")) return;
  [
    "rx-date",
    "pt-name",
    "pt-age",
    "pt-sex",
    "pt-address",
    "rx-content",
    "followup",
    "ptr-no",
  ].forEach((id) => (document.getElementById(id).value = ""));
}
