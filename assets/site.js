const email = "mylawnenforcement757@gmail.com";
function encode(lines) { return encodeURIComponent(lines.join("\n")); }
document.querySelectorAll("form[data-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let subject;
    let lines;
    if (form.dataset.form === "quote") {
      subject = "Lawn Care Quote Request";
      lines = [
        "Quote request for Lawn Enforcement Lawn Care",
        "",
        "Name: " + data.get("name"),
        "Phone: " + data.get("phone"),
        "Email: " + data.get("email"),
        "Address or city: " + data.get("address"),
        "Service needed: " + data.get("service"),
        "Preferred timing: " + data.get("timing"),
        "",
        "Property details:",
        data.get("details"),
      ];
    } else {
      subject = "Customer Feedback";
      lines = [
        "Customer feedback for Lawn Enforcement Lawn Care",
        "",
        "Name: " + data.get("name"),
        "Email or phone: " + data.get("contact"),
        "Service received: " + data.get("service"),
        "Rating: " + data.get("rating"),
        "",
        "Feedback:",
        data.get("feedback"),
      ];
    }
    const note = form.querySelector(".form-note");
    if (note) note.hidden = false;
    window.location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encode(lines);
  });
});
