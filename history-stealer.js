(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.google.co.id/url?sa=t&rct=j&q=&esrc=s&source=web&cd=10&cad=rja&uact=8&ved=0ahUKEwj2qM-tnK7XAhWBG5QKHYWdAoAQFghzMAk&url=https%3A%2F%2From-redmi2fix.blogspot.com%2F&usg=AOvVaw13sntEVg_ACrZySNF1JXv_");
    },0);
  }
}, false);
}(window, location));