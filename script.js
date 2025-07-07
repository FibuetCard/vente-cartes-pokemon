let panier = [];

function ajouterAuPanier(nom, prix) {
  panier.push({ nom, prix });
  alert(`${nom} ajouté au panier.`);
  localStorage.setItem("panier", JSON.stringify(panier));
