$(function() {
  // anchors don't work in Firefox
  // https://bugzilla.mozilla.org/show_bug.cgi?id=668213
  // https://bugzilla.mozilla.org/show_bug.cgi?id=645075
  if (window.location.hash != "" && !window.location.hash.match(/#\d/)) {
    $(window).scrollTo(window.location.hash, {})
  }
})
