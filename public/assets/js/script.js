// Tema Switcher
$(document).ready(function () {
  const htmlElement = $("html");
  const themeButtons = $("[data-bs-theme-value]");
  const navbarEl = $(".navbar")
  
  let savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.attr("data-bs-theme", savedTheme);
  updateActiveButton(savedTheme);

  themeButtons.on("click", function () {
    let theme = $(this).attr("data-bs-theme-value");
    htmlElement.attr("data-bs-theme", theme);
    navbarEl.attr("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
    
    updateActiveButton(theme);
  });

  function updateActiveButton(theme) {
    themeButtons.removeClass("active").attr("aria-pressed", "false");
    themeButtons.filter(`[data-bs-theme-value="${theme}"]`)
      .addClass("active")
      .attr("aria-pressed", "true");
  }
});

// shadow di belakang nav
$(window).scroll(function() {
  if ($(window).scrollTop() > 50) {
      $('.navbar').css({
          'background-color': $('html').attr('data-bs-theme') === 'dark' ? 
              'rgba(33, 37, 41, 0.95)' : 'rgba(248, 249, 250, 0.95)',
          'box-shadow': '0 2px 10px rgba(0,0,0,0.1)'
      });
  } else {
      $('.navbar').css({
          'background-color': $('html').attr('data-bs-theme') === 'dark' ? 
              'rgba(33, 37, 41, 0.888)' : 'rgba(248, 249, 250, 0.875)',
          'box-shadow': 'none'
      });
  }
});