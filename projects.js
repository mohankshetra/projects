 function toggleDetails(element) {
      const p = element.nextElementSibling;
      if (p.style.display === "block") {
        p.style.display = "none";
      } else {
        p.style.display = "block";
      }
    }