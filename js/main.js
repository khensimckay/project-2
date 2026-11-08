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

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());

async function sendFormToServer(form, status) {
  if (!form.reportValidity()) return;
  const button = form.querySelector("button[type=submit]");
  button.disabled = true;
  status.textContent = "Sending your message securely…";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
    });
    const result = await response.json();
    if (result.success === "false" || result.success === false) {
      if (/activation/i.test(result.message || "")) {
        status.textContent = "The site owner must confirm the activation email sent to ST10528937@myemeris.edu.za. Please try again after the address is confirmed; this message was not delivered.";
        return;
      }
      throw new Error(result.message || "The form service could not accept the submission.");
    }
    if (!response.ok) {
      throw new Error(result.message || "The form service could not accept the submission.");
    }
    form.reset();
    status.textContent = "Thank you. Your message was sent successfully.";
  } catch (error) {
    status.textContent = "Your message could not be sent. Please check your connection and try again, or email ST10528937@myemeris.edu.za.";
  } finally {
    button.disabled = false;
  }
}

for (const [id, statusId] of [["enquiry-form", "enquiry-status"], ["contact-form", "contact-status"]]) {
  document.querySelector(`#${id}`)?.addEventListener("submit", (event) => {
    event.preventDefault();
    sendFormToServer(event.currentTarget, document.querySelector(`#${statusId}`));
  });
}

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

