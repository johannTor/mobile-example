function myFunction() {
  // x is the html element with id #myLinks
    var x = document.getElementById("myLinks");
    // if the element contains the class hideMobile remove it, otherwise add it
    if (x.classList.contains("hideMobile")) {
      x.classList.remove("hideMobile")
    } else {
      x.classList.add("hideMobile");
    }
}