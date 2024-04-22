const testimonials = [
  {
    name: "Cheris G",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",

    text: "I never knew a simple fruit could make such a difference in my daily routine until I started incorporating bananas into my diet. They are my go-to snack for a quick energy boost, and I feel healthier and more satisfied throughout the day.",
  },
  {
    name: "Rosetta Q",
    photoUrl:
      "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",

    text: "As a long-time Apple user, I can confidently say that their products have never let me down. From the sleek design to the seamless user experience, Apple truly sets the standard for technology excellence.",
  },
  {
    name: "Andrew Wiebe",
    photoUrl:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D",

    text: "I've been a loyal Samsung customer for years, and I can confidently say that their products never disappoint. From their innovative technology to sleek designs, Samsung always delivers excellence.",
  },
];

const imagEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userrnameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imagEl.src = photoUrl;
  textEl.innerText = text;
  userrnameEl.innerText = name;
  idx++;

  if (idx === testimonials.length) {
    idx = 0;
  }

  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
