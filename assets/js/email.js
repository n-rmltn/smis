function setMailto() {
  var form = document.getElementById("contactForm");
  var services = form.querySelectorAll('input[name="service"]:checked');
  var serviceList = [];
  services.forEach((service) => {
    serviceList.push(service.value);
  });

  var subject =
    serviceList.length > 0
      ? "Service Request: " + serviceList.join(", ")
      : "Service Request";

  var name = form.querySelector('input[name="name"]').value;
  var about = form.querySelector('textarea[name="about"]').value;
  var email = form.querySelector('input[name="email"]').value;
  var body = "My name is " + name + "\n\n" + about + "\n\nFrom : " + email;

  var mailtoLink =
    "mailto:norm@normandlubaton.dev,msucnathan@gmail.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailtoLink;
}
