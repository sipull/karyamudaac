// step:
// - making class
// - making object
// - called it so it appears in browser using loop and innerHTML
// - refactor the code so it implements inheritance AuthorTestimonial
// - refactor the code so it implements polymorphism by making class CompanyTestimonial and override get author(the key point is polymorhp implement and override)
// - refactor the code so it implements abstraction by making get testimonialHTML and get author throw error when the children didn't use it
// - refactor the code so it implements encapsulation, use setter and getter (key point is, encapsulation try to make app more secure by implementing restriction)

// Superclass
class Testimonial {
  #quote = "";
  #image = "";

  constructor(quote, image) {
    this.#quote = quote;
    this.#image = image;
  }

  get quote() {
    return this.#quote;
  }

  get image() {
    return this.#image;
  }

  // This is an abstract method that subclasses will implement
  get author() {
    throw new Error("getAuthor() method must be implemented");
  }

  // This is a polymorphic method that can take any subclasses of Testimonial
  get testimonialHTML() {
    return `<div class="testimonial">
                <img
                    src="${this.image}"
                    class="profile-testimonial"
                />
                <p class="quote">${this.quote}</p>
                <p class="author">- ${this.author}</p>
            </div>
        `;
  }
}

// Subclass
class AuthorTestimonials extends Testimonial {
  #author = "";

  constructor(author, quote, image) {
    super(quote, image);
    this.#author = author;
  }

  get author() {
    return this.#author;
  }
}

// Subclass
class CompanyTestimonials extends Testimonial {
  #company = "";

  constructor(company, quote, image) {
    super(quote, image);
    this.#company = company;
  }

  get author() {
    return this.#company + " Company";
  }
}

const testimonial1 = new AuthorTestimonials(
  "Abel Dustin",
  "Jagalah Kebersihan",
  "https://assets.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=740&x=416"
);
const testimonial2 = new AuthorTestimonials(
  "Si Cantik",
  "Malu saya, keren banget!",
  "https://pbs.twimg.com/media/FVwWXzVWYAIWm5C?format=jpg&name=small"
);
const testimonial3 = new CompanyTestimonials(
  "BUMN",
  "Semangat Membuat Tetangga IRI!!🔥🔥🔥",
  "https://thumb.viva.id/vivabandung/1265x711/2023/02/16/63ede01d96d4f-menteri-bumn-erick-thohir_bandung.jpg"
);

let testimonialData = [testimonial1, testimonial2, testimonial3];
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
  testimonialHTML += testimonialData[i].testimonialHTML;
}

document.getElementById("testimonials").innerHTML = testimonialHTML;