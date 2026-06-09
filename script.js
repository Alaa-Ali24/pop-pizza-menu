const menu = [
  {
    category: "Pizza",
    note: "Alm. / Fam. / Large",
    items: [
      ["1", "Margherita", "tomat, ost", "68,- / 136,- / 204,-"],
      ["2", "Vesuvio", "tomat, ost, skinke", "72,- / 144,- / 216,-"],
      ["3", "Pepperoni", "tomat, ost, pepperoni", "72,- / 144,- / 216,-"],
      ["4", "Capricciosa", "tomat, ost, skinke, champignon", "75,- / 150,- / 225,-"],
      ["5", "Hawaii", "tomat, ost, ananas, skinke", "75,- / 150,- / 225,-"],
      ["6", "Vegetarin", "tomat, ost, champignon, løg, peberfrugt, oliven, majs", "80,- / 160,- / 225,-"],
      ["7", "Ciao", "tomat, ost, skinke, pepperoni, cocktailpølser, bacon, kødsauce", "85,- / 170,- / 255,-"],
      ["8", "Chaplin", "tomat, ost, skinke, oksekød, cocktailpølser", "83,- / 166,- / 249,-"],
      ["9", "Bearnaise", "tomat, ost, skinke, pepperoni, bearnaisesauce", "83,- / 166,- / 249,-"],
      ["10", "Rimmi", "tomat, ost, tun, rejer, hvidløg", "83,- / 166,- / 249,-"],
      ["11", "Alino", "tomat, ost, skinke, pepperoni, kødsauce", "83,- / 166,- / 249,-"],
      ["12", "Hopsan", "tomat, ost, pepperoni, kødsauce, løg, hvidløg", "85,- / 170,- / 255,-"],
      ["13", "Gorgonzola", "tomat, ost, kebab, champignon, løg, gorgonzola", "85,- / 170,- / 255,-"],
      ["14", "Volcane", "tomat, ost, tun, skinke, pepperoni, oksekød, løg, jalapeño, hvidløg", "85,- / 170,- / 255,-"],
      ["15", "Pisa", "tomat, ost, skinke, oksekød, cocktailpølser, hvidløg, champignon", "85,- / 170,- / 255,-"],
      ["16", "Stærk", "tomat, ost, skinke, bacon, kebab, chili", "83,- / 166,- / 249,-"],
      ["17", "Amigo", "tomat, ost, skinke, pepperoni, bacon, løg", "83,- / 166,- / 249,-"],
      ["18", "Mexicano", "tomat, ost, pepperoni, kebab, chili, jalapeños, løg", "85,- / 170,- / 255,-"],
      ["19", "Venus", "tomat, ost, skinke, kødsauce, bearnaisesauce", "83,- / 166,- / 249,-"],
      ["20", "Din egen pizza", "tomat, ost, + 4 x tilbehør", "98,- / 196,- / 294,-"],
      ["21", "Amerikansk", "tomat, ost, skinke, kødsauce, kebab, løg, pebermix, chili", "88,- / 176,- / 264,-"],
      ["22", "Pommes frites pizza", "tomat, ost, pommes frites, kebab, kylling, bearnaisesauce", "88,- / 176,- / 264,-"],
      ["23", "Bolognese", "tomat, ost, kødsauce, spaghetti, champignon, løg, pølser", "88,- / 176,- / 264,-"],
      ["24", "Kartoffel", "ost, kartoffelskiver, mozzarellaost, pesto, olivenolie", "85,- / 170,- / 255,-"],
      ["25", "Frederikke", "tomat, ost, bacon, cherrytomater", "85,- / 170,- / 255,-"],
      ["26", "Meat", "tomat, ost, æg, sucuk, cherrytomater", "83,- / 166,- / 249,-"],
      ["27", "Vendeing", "tomat, ost, æg, sucuk, tun, peberfrugtmix", "85,- / 170,- / 255,-"],
      ["28", "Natalie", "tomat, ost, kylling, champignon, løg, karry", "85,- / 170,- / 255,-"],
      ["29", "Meat lover", "tomat, ost, skinke, kebab, pepperoni, cocktailpølser, oksekød, bacon", "94,- / 188,- / 282,-"]
    ]
  },
  {
    category: "Gourmet Pizza",
    note: "Alm. / Fam. / Large",
    items: [
      ["30", "Mozzarina", "tomat, ost, pesto, serranoskinke, mozzarella, rucolasalat", "90,- / 180,- / 270,-"],
      ["31", "Special", "tomat, ost, serranoskinke, mozzarella, artiskok, rucolasalat, tomatskiver, pesto", "90,- / 180,- / 270,-"],
      ["32", "Luksus seafood", "tomat, ost, tun, rejer, muslinger, champignon, løg, hvidløg, chili", "98,- / 196,- / 294,-"],
      ["33", "Parmesan", "tomat, ost, parmesan, mozzarella, serranoskinke, tomatskiver, rucolasalat", "90,- / 180,- / 270,-"],
      ["34", "Omars pizza", "tomat, ost, serranoskinke, mozzarella, hvidløg, rucolasalat, cherrytomat", "95,- / 190,- / 285,-"]
    ]
  },
  {
    category: "Hvidgourmet Pizza",
    note: "Alm. / Fam. / Large",
    items: [
      ["35", "Kartoffel pizza 1", "ost, kartoffelskiver, mozzarella, olivenolie", "88,- / 176,- / 264,-"],
      ["36", "Kartoffel pizza 2", "ost, kartoffelskiver, bacon, rosmarin, cherrytomater, mozzarellaost, olivenolie", "90,- / 180,- / 270,-"],
      ["37", "Rosmarin", "ost, mascarpone, mozzarella, kartoffel, rosmarin, løg, olivenolie", "90,- / 180,- / 270,-"],
      ["38", "Serrano", "ost, mascarpone, serranoskinke, mozzarella, rosmarin", "90,- / 180,- / 270,-"],
      ["39", "Laks", "ost, mascarpone, røget laks, kartoffel, rucolasalat, løg", "90,- / 180,- / 270,-"],
      ["40", "Avocado", "ost, mascarpone, røget laks, avocado, rucolasalat, hvidløg", "90,- / 180,- / 270,-"],
      ["41", "Ostemix", "ost, mozzarella, cheddar, gorgonzola, parmesan", "90,- / 180,- / 270,-"]
    ]
  },
  {
    category: "Salat Pizza",
    note: "Alm. / Fam. / Large",
    items: [
      ["42", "Kebab", "tomat, ost, kebab, frisk salat, tomat, agurk, dressing", "90,- / 180,- / 270,-"],
      ["43", "Coralla", "tomat, ost, kebab, pepperoni, løg, frisk salat, tomat, agurk, dressing", "90,- / 180,- / 270,-"],
      ["44", "Serdina", "tomat, ost, skinke, oksekød, pepperoni, frisk salat, tomat, agurk, dressing", "90,- / 180,- / 270,-"],
      ["45", "Joudi", "tomat, ost, kylling, kebab, pepperoni, frisk salat, tomat, agurk, dressing", "90,- / 180,- / 270,-"]
    ]
  },
  {
    category: "Indbagt Pizza",
    note: "",
    items: [
      ["46", "Cao Cao", "tomat, ost, skinke", "70,-"],
      ["47", "Matador", "tomat, ost, skinke, rejer, champignon", "80,-"],
      ["48", "Napoli", "tomat, ost, kylling, kebab, paprika, chili", "80,-"],
      ["49", "Pasta", "tomat, ost, spaghetti, kødsauce", "80,-"]
    ]
  },
  {
    category: "Pasta",
    note: "",
    items: [
      ["50", "Spaghetti Speciale", "hvidløg, flødesauce, rejer, gorgonzola, chili", "85,-"],
      ["51", "Spaghetti Carbonara", "flødesauce, bacon, løg, æg", "80,-"],
      ["52", "Spaghetti Bolognese", "kødsauce", "70,-"],
      ["53", "Spaghetti Napoli", "flødesauce, kebab, kylling, pesto", "85,-"],
      ["54", "Spaghetti Kylling", "kylling, oliven, majs, parmesan, karry", "85,-"]
    ]
  },
  {
    category: "Sandwiches",
    note: "",
    items: [
      ["55", "Kylling Sandwich", "med ost, salat, dressing", "70,-"],
      ["56", "Kebab Sandwich", "med ost, salat, dressing", "70,-"]
    ]
  },
  {
    category: "Pitabrød",
    note: "",
    items: [
      ["57", "Pita Kebab", "hjemmelavet pitabrød, kebab, salat, agurk, tomat, dressing", "60,-"],
      ["58", "Pita Kylling", "hjemmelavet pitabrød, kylling, salat, agurk, tomat, dressing", "60,-"],
      ["59", "Pita Falafel", "hjemmelavet pitabrød, falafel, salat, agurk, tomat, dressing", "60,-"]
    ]
  },
  {
    category: "Rulle",
    note: "",
    items: [
      ["60", "Kebab Rulle", "hjemmelavet brød, kebab, salat, agurk, tomat, dressing", "70,-"],
      ["61", "Kylling Rulle", "hjemmelavet brød, kylling, salat, agurk, tomat, dressing", "70,-"],
      ["62", "Falafel Rulle", "hjemmelavet brød, falafel, tahini, salat, agurk, tomat, dressing", "70,-"]
    ]
  },
  {
    category: "POP Specialiteter",
    note: "",
    items: [
      ["63", "Stjerneskud", "2 stk. fiskefilet, rejer, brød, kaviar, asparges, agurk, dressing, citron", "104,-"],
      ["64", "Fiskefilet", "2 stk. fiskefilet, pommes frites, citron, ketchup, remoulade", "89,-"],
      ["65", "Skinke Schnitzel", "kartoffelbåde, bearnaisesauce, salat, tomat, agurk, dressing", "100,-"],
      ["66", "Bøfsandwich", "", "110,-"],
      ["67", "Dansk Bøf", "", "120,-"]
    ]
  },
  {
    category: "Børnemenu",
    note: "",
    items: [
      ["B1", "Chicken Nuggets", "5 stk. med pommes frites", "58,-"],
      ["B2", "Fiskefilet", "med pommes frites", "58,-"],
      ["B3", "Mickey Pizza", "tomat, ost, skinke, oregano", "49,-"],
      ["B4", "Rana Pizza", "tomat, ost, cocktailpølser, kødsauce, oregano", "58,-"],
      ["B5", "Anders AND pizza", "tomat, ost, skinke, pepperoni, oregano", "58,-"],
      ["B6", "Fedtmule pizza", "tomat, ost, pepperoni", "49,-"],
      ["B7", "Indbagt rejer", "5 stk. med pommes frites", "58,-"],
      ["B10", "Big Burger", "", "40,-"],
      ["B11", "Spaghetti Bolognese", "", "40,-"]
    ]
  },
  {
    category: "Grill & Burger",
    note: "",
    items: [
      ["68", "Kylling Burger", "", "63,-"],
      ["69", "Big Burger", "", "67,-"],
      ["70", "Bacon Burger", "", "70,-"],
      ["71", "Cheese Burger", "", "70,-"],
      ["72", "Bacon Cheese Burger", "", "75,-"],
      ["73", "Dobbelt Burger", "", "80,-"],
      ["74", "Ægge Burger", "", "80,-"],
      ["75", "1/2 Grillkylling", "med pommes frites, salat, ketchup, remoulade, creme fraiche dressing", "90,-"]
    ]
  },
  {
    category: "Diverse",
    note: "",
    items: [
      ["76", "Pommes Frites", "lille / mellem / stor", "25,- / 35,- / 45,-"],
      ["77", "Hvidløgesbrød", "med ost", "70,-"],
      ["78", "Kebab Tallerken", "med kebab, pommes frites, salat, agurk, tomat, creme fraiche dressing", "80,-"],
      ["79", "Kylling Tallerken", "med kylling, pommes frites, salat, agurk, tomat, creme fraiche dressing", "80,-"],
      ["80", "Falafel Tallerken", "med falafel, tahini, pommes frites, salat, tomat, agurk, dressing", "80,-"],
      ["81", "Pølsemix", "med pølser, pommes frites, salat, agurk, tomat, ketchup", "80,-"],
      ["82", "Nachos 1", "med cheddarost, guacamole, salsa", "70,-"],
      ["83", "Nachos 2", "med cheddarost, kylling, guacamole, salsa", "75,-"],
      ["84", "Snackkurv", "2 mozzarellasticks, 2 chilicheese tops, 2 chicken nuggets, 2 indbagte rejer, 2 løgringe, ketchup, remoulade, mayo", "75,-"]
    ]
  },
  {
    category: "Salater",
    note: "",
    items: [
      ["85", "Tun Salat", "", "65,-"],
      ["86", "Græsk Salat", "", "65,-"],
      ["87", "Kebab Salat", "", "65,-"],
      ["88", "Kylling Salat", "", "65,-"],
      ["89", "Reje Salat", "", "75,-"]
    ]
  },
  {
    category: "Dessert",
    note: "",
    items: [
      ["90", "Pandekage", "", "55,-"],
      ["91", "Chokoladekage", "", "55,-"]
    ]
  },
  {
    category: "Drikkevarer",
    note: "",
    items: [
      ["", "Cocio", "", "25,-"],
      ["", "Vand", "", "20,-"],
      ["", "Dåsesodavand 0,33 cl", "", "17,-"]
    ]
  },
  {
    category: "Tilbehør",
    note: "Alm. / Fam. / Large",
    items: [
      ["", "Kød", "", "12,- / 24,- / 36,-"],
      ["", "Salat", "", "10,- / 20,- / 30,-"],
      ["", "Dressing", "", "8,- / 16,- / 24,-"],
      ["", "Chili / Hvidløg", "", "6,- / 12,- / 18,-"]
    ]
  }
];

const nav = document.querySelector("#category-nav");
const root = document.querySelector("#menu-root");
const search = document.querySelector("#menu-search");

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function itemMatches(item, category, term) {
  if (!term) return true;
  return [category, item[0], item[1], item[2], item[3]]
    .join(" ")
    .toLowerCase()
    .includes(term);
}

function renderNavigation() {
  nav.innerHTML = menu
    .map((section) => `<a href="#${slugify(section.category)}">${section.category}</a>`)
    .join("");
}

function renderMenu() {
  const term = search.value.trim().toLowerCase();
  const sections = menu
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => itemMatches(item, section.category, term))
    }))
    .filter((section) => section.items.length);

  if (!sections.length) {
    root.innerHTML = `<p class="empty">Ingen retter matcher din søgning.</p>`;
    return;
  }

  root.innerHTML = sections
    .map((section) => {
      const items = section.items
        .map(([number, name, description, price]) => {
          const numberHtml = number ? `<span class="item-number">${number}</span>` : "";
          const descriptionHtml = description ? `<p class="item-desc">${description}</p>` : "";
          return `
            <article class="menu-item">
              <div class="item-main">
                <h3 class="item-title">${numberHtml}<span class="item-name">${name}</span></h3>
                ${descriptionHtml}
              </div>
              <div class="item-price">${price}</div>
            </article>
          `;
        })
        .join("");

      const note = section.note ? `<span>${section.note}</span>` : "";
      return `
        <section class="menu-section" id="${slugify(section.category)}">
          <div class="section-heading">
            <h2>${section.category}</h2>
            ${note}
          </div>
          <div class="items">${items}</div>
        </section>
      `;
    })
    .join("");
}

renderNavigation();
renderMenu();
search.addEventListener("input", renderMenu);
