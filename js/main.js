"use strict";

const projectSearch = document.querySelector("#project-search");
const projectCards = [...document.querySelectorAll(".project-card")];
const searchStatus = document.querySelector("#search-status");
const enquiryDate = document.querySelector("#enquiry-date");
if (enquiryDate) enquiryDate.min = new Date().toISOString().slice(0, 10);

projectSearch?.addEventListener("input", () => {
  const query = projectSearch.value.trim().toLocaleLowerCase();
  let visible = 0;
  for (const card of projectCards) {
    const matches = `${card.dataset.search} ${card.textContent}`.toLocaleLowerCase().includes(query);
    card.hidden = !matches;
    if (matches) visible += 1;
  }
  searchStatus.textContent = query ? `${visible} project${visible === 1 ? "" : "s"} found.` : "Showing all projects.";
});

document.querySelector("#current-year").textContent = String(new Date().getFullYear());

document.querySelector("#enquiry-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#enquiry-status");
  if (!form.reportValidity()) return;
  const formData = new FormData(form);
  const name = String(formData.get("name")).trim();
  const service = String(formData.get("service"));
  const date = String(formData.get("date"));
  status.textContent = `Thanks, ${name}. Your enquiry about “${service}”${date ? ` for ${date}` : ""} has been checked. This demo does not send or store it; use the contact form to prepare an email.`;
});

document.querySelector("#contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector("#contact-status");
  if (!form.reportValidity()) return;
  const recipient = new URL(form.action).pathname;
  if (recipient.includes("REPLACE_WITH_YOUR_EMAIL")) {
    status.textContent = "Please replace the example email address in the HTML before sending. Your message has not been sent.";
    return;
  }
  const data = new FormData(form);
  const subject = `${data.get("message_type")} from ${data.get("name")}`;
  const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nMessage type: ${data.get("message_type")}\n\n${data.get("message")}`;
  status.textContent = "Your email app is opening with the validated message. Review it there and press Send.";
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const lightbox = document.querySelector("#image-lightbox");
const lightboxImage = lightbox?.querySelector("img");
for (const image of document.querySelectorAll(".project-image img")) {
  image.tabIndex = 0;
  image.setAttribute("role", "button");
  image.setAttribute("aria-label", "Enlarge project image");
  const openImage = () => { lightboxImage.src = image.currentSrc || image.src; lightboxImage.alt = image.closest(".project-card").querySelector("h3").textContent; lightbox.showModal(); };
  image.addEventListener("click", openImage);
  image.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openImage(); } });
}
lightbox?.querySelector(".lightbox-close")?.addEventListener("click", () => lightbox.close());
lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) lightbox.close(); });

