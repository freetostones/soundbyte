function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
  description: 'dapi: Search the Drupal API for %s'
  });
}
resetDefaultSuggestion();