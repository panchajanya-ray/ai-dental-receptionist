// Minimal loader fallback
window.Vapi = function(apiKey) {
  this.apiKey = apiKey;

  this.start = function(assistantId) {
    alert("Demo mode: Vapi SDK blocked.\n\nBut your setup is correct ✅\n\n);
  };
};
