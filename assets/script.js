const navLink = $("header");
const aboutCard = $("#about-card");
const contactCard = $("#contact-card");
const portfolioCard = $("#portfolio-card");

navLink.on("click", function (event) {
  aboutCard.addClass("hide-card");
  contactCard.addClass("hide-card");
  portfolioCard.addClass("hide-card");
  const link = `#${$(event.target).attr("id")}-card`;
  $(link).removeClass("hide-card").addClass("animate__zoomIn");



});