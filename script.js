function openWhatsApp(article, price, imageLink) {
  // Construction du message pré-écrit avec les détails de l'article
  var message = "Bonjour, je suis intéressé(e) par l'article suivant:\n";
  message += "Nom de l'article: " + article + "\n";
  message += "Prix: " + price + "\n";
  message += "Image: " + imageLink;

  // Encodage du message pour l'URL
  var encodedMessage = encodeURIComponent(message);

  // URL de base pour WhatsApp avec le message pré-écrit
  var whatsappURL = "https://wa.me/+22890802049?text=" + encodedMessage;

  // Redirection vers WhatsApp
  window.location.href = whatsappURL;
}

document.addEventListener("DOMContentLoaded", function() {
  let timeout;
  let isDragging = false;
  let offsetX, offsetY;
  function showNotification() {
    const notification = document.createElement("div");
    notification.classList.add("notification-banner");
    notification.style.position = "fixed";
    notification.style.top = "35%";
    notification.style.left = "50%";
    notification.style.transform = "translate(-50%, -50%)";
    notification.style.width = "300px"; 
    notification.style.borderRadius = "10px";
    notification.style.padding = "15px";
   
    notification.style.color = "white";
    notification.style.textAlign = "center";
    notification.style.cursor = "move";
    notification.style.userSelect = "none";
    notification.style.webkitUserSelect = "none";
    notification.style.msUserSelect = "none"; 
    notification.addEventListener("mousedown", function (e) {
      isDragging = true;
      offsetX = e.clientX - notification.getBoundingClientRect().left;
      offsetY = e.clientY - notification.getBoundingClientRect().top;
      clearTimeout(timeout);
    });
    document.addEventListener("mousemove", function (e) {
      if (isDragging) {
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;
        notification.style.left = `${x}px`;
        notification.style.top = `${y}px`;
      }
    });
    document.addEventListener("mouseup", function () {
      isDragging = false;
      enableAutoHide();
    });
    notification.addEventListener("click", function () {
      document.body.removeChild(notification);
    });
    
    notification.appendChild(messageText);
    document.body.appendChild(notification);
    enableAutoHide();
  }
  
});
document.addEventListener("DOMContentLoaded", function () {
  const marqueeContainer = document.createElement("div");
  marqueeContainer.classList.add("marquee-container");
  const marqueeText = document.createElement("div");
  marqueeText.classList.add("marquee-text");
  marqueeText.textContent = "Fly-Shop vous remercie d'avoir parcouru toutes ses sections et espère vous revoir très bientôt!. ";
  marqueeContainer.appendChild(marqueeText);
  document.body.appendChild(marqueeContainer);
});
document.addEventListener("DOMContentLoaded", function () {
  const marqueeContainer = document.createElement("div");
  marqueeContainer.classList.add("marquee-container");
  const marqueeText = document.createElement("div");
  marqueeText.classList.add("marquee-text");
  marqueeText.textContent = "La qualité c'est ici.Notre Boutique est située à Agbalépédogan dans la ville de Lomé. Elle est à 300m de la HAAC dans le premier von à gauche en quittant la HAAC vers le feu rouge Agbalepedo.Nous sommes ouvert tous les jours de 8h30 à 21h GMT.  Téléphones: +228 90802049 / +228 90127726";
  marqueeContainer.appendChild(marqueeText);
  const homeSection = document.getElementById("home");
  homeSection.insertAdjacentElement("afterend", marqueeContainer);
});
// Numéros de téléphone avec des liens vers les opérateurs téléphoniques
const phoneNumbers = [
  { number: "+22890802049", link: "tel:+22890802049" },
  { number: "+22890127726", link: "tel:+22890127726" }
];

// Fonction pour créer et styliser la petite page
function createModal() {
  // Créer un élément div pour la page modale
  const modalContainer = document.createElement("div");
  modalContainer.id = "modalContainer";

  // Style pour la page modale
  modalContainer.style.display = "none";
  modalContainer.style.position = "fixed";
  modalContainer.style.top = "150px"; // Déplacer vers le bas
  modalContainer.style.left = "auto"; // Laisser la position à gauche ajustée automatiquement
  modalContainer.style.right = "10px"; // Déplacer vers la droite
  modalContainer.style.backgroundColor = "white";
  modalContainer.style.border = "2px solid lightblue";
  modalContainer.style.padding = "20px";
  modalContainer.style.textAlign = "center";
  modalContainer.style.maxWidth = "200px"; // Réduire la taille de la page
  modalContainer.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)"; // Ajouter une ombre légère
  modalContainer.style.userSelect = "none"; // Rendre le texte non sélectionnable

  // Créer un élément h2 pour le titre
  const title = document.createElement("h2");
  title.textContent = "Numéros de téléphone des vendeurs";
  title.style.fontWeight = "bold";
  title.style.color = "black";
  title.style.marginBottom = "10px";

  // Créer un élément div pour les numéros
  const numbersContainer = document.createElement("div");
  numbersContainer.style.fontWeight = "bold";
  numbersContainer.style.color = "blue"; // Couleur bleue pour les numéros
  numbersContainer.style.fontSize = "16px"; // Ajuster la taille des numéros
  numbersContainer.style.marginTop = "10px"; // Ajouter un espacement vers le haut

  // Ajouter les numéros de téléphone à l'élément div
  phoneNumbers.forEach((phone, index) => {
    const numberElement = document.createElement("p");
    const numberLink = document.createElement("a");

    numberLink.href = phone.link;
    numberLink.textContent = `☎ ${phone.number}`; // Ajouter le symbole de contact
    numberLink.style.textDecoration = "none"; // Supprimer la soulignement du lien
    numberLink.style.color = "blue"; // Couleur bleue pour les liens
    numberLink.style.cursor = "pointer"; // Définir le curseur comme pointeur

    numberElement.appendChild(numberLink);

    // Ajouter un espacement entre les deux numéros (sauf pour le dernier)
    if (index < phoneNumbers.length - 1) {
      numberElement.style.marginBottom = "5px";
    }

    numbersContainer.appendChild(numberElement);
  });

  // Ajouter le titre et les numéros à la page modale
  modalContainer.appendChild(title);
  modalContainer.appendChild(numbersContainer);

  // Ajouter la page modale à la page body
  document.body.appendChild(modalContainer);

  // Récupérer le lien "Contact" et ajouter l'événement de clic
  const contactLink = document.getElementById("contactLink");
  contactLink.addEventListener("click", toggleModal);
}

// Fonction pour afficher ou masquer la petite page lors du clic sur le lien "Contact"
function toggleModal(event) {
  const modalContainer = document.getElementById("modalContainer");
  modalContainer.style.display = (modalContainer.style.display === "none") ? "block" : "none";
  event.preventDefault();
}

window.onload = createModal;

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const images = document.querySelectorAll(".slider img");
  const imageWidth = images[0].clientWidth;
  let counter = 1;

  function startSlider() {
    setInterval(() => {
      slider.style.transition = "transform 0.5s ease-in-out";
      slider.style.transform = `translateX(${-imageWidth * counter}px)`;
      counter++;

      if (counter === images.length) {
        setTimeout(() => {
          slider.style.transition = "none";
          slider.style.transform = "translateX(0)";
          counter = 1;
        }, 500);
      }
    }, 3000); // Change image every 3 seconds
  }

  startSlider();
});

document.addEventListener("DOMContentLoaded", function () {
  // Sélectionnez tous les éléments avec la classe "prix" dans la section des Articles
  var prixElements = document.querySelectorAll('#Articles li span.prix');

  // Parcourez chaque élément et mettez à jour son contenu avec des prix barrés et des nouveaux prix de promotion
  prixElements.forEach(function (prixElement) {
    var prixActuel = parseFloat(prixElement.innerText.replace('Fcfa', '').trim());

    // Calculer le prix barré (par exemple, réduction de 20%)
    var prixBarre = prixActuel * 1.2;

    // Mettez à jour le contenu de l'élément avec le prix barré et le nouveau prix de promotion
    prixElement.innerHTML = `<del style="color: red; text-decoration: line-through;">${prixBarre.toFixed(0)} Fcfa</del> <span style="color: black;">|</span> <span style="color: green;">${prixActuel.toFixed(0)} Fcfa &#10004;</span>`;
  });
});

// Désactiver la sélection de texte
document.addEventListener('DOMContentLoaded', function () {
  document.body.style.userSelect = 'none';
});

// Désactiver le clic droit sur les images
document.addEventListener('contextmenu', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

// Désactiver le téléchargement des images
document.addEventListener('dragstart', function (e) {
  if (e.target.tagName === 'IMG') {
    e.preventDefault();
  }
});

document.addEventListener('backbutton', function () {
  navigator.app.exitApp();
});

"use strict";

function clearSensitiveData() {
}

setTimeout(clearSensitiveData, 5 * 60 * 1000);

if (typeof console !== 'undefined') {
  console.log = function() {
    clearSensitiveData();
    throw new Error("Impossible d'accéder aux données sensibles dans la console du navigateur.");
  };
}
document.getElementById('voirPlusBtn').style.fontSize = 'larger';

// Assurez-vous que vous avez inclus la bibliothèque Font Awesome dans votre fichier HTML

// Ajoutez cette partie pour centrer verticalement les icônes
var socialIcons = document.querySelector('.social-icons');
socialIcons.style.display = 'flex';
socialIcons.style.alignItems = 'center';
socialIcons.style.justifyContent = 'center';

// Ajoutez des styles personnalisés pour chaque icône
var tiktokIcon = document.querySelector('.social-icon.tiktok i');
var facebookIcon = document.querySelector('.social-icon.facebook i');
var instagramIcon = document.querySelector('.social-icon.instagram i');

tiktokIcon.style.color = '#69C9D0'; // Couleur TikTok
facebookIcon.style.color = '#3B5998'; // Couleur Facebook
instagramIcon.style.color = '#E4405F'; // Couleur Instagram

// Ajouter des styles pour la ligne horizontale
var separatorLine = document.querySelector('.separator-line');
separatorLine.style.borderTop = '2px solid #ccc';
separatorLine.style.width = '100%';
separatorLine.style.margin = '20px 0';


