// 1: Faire apparaitre une fenètre et son backdrop lorsque que l'on appuie sur le bouton Add Movie.
// 2: Permettre l'annulation de la fenètre via le bouton cancel ou cliquer sur le backdrop.
// 3: Faire un message d'erreur lorsqu'une valeur dans les inputs est éroné/manquantes. 
// 4: Enregistrer les modifications sur la page principale en supprimant le premier message.
// 5: Cliquer sur la fenètre d'un film pour la supprimer avec un message de confirmation.

// Déclaration et initialization des variables
// Bouttons
const buttonAddMovie = document.querySelectorAll('button')[4]; //5éme bouton
const buttonAddModalConfirm = document.getElementsByClassName('btn btn--success')[0];
const buttonAddModalCancel = document.getElementsByClassName('btn btn--passive')[0]; //1er bouton cancel
const buttonDeleteModalConfirm = document.getElementsByClassName('btn btn--danger')[0];
const buttonDeleteModalCancel = document.getElementsByClassName('btn btn--passive')[1]; //2éme bouton cancel

// Inputs
const inputMovieName = document.getElementById('title');
const inputMovieImage = document.getElementById('image-url');
const inputMovieRating = document.getElementById('rating');

// Modal
const addModal = document.getElementById('add-modal');
const deleteModal = document.getElementById('delete-modal');
const modalBackdrop = document.getElementById('backdrop');

// Fonction du bouton AddMovie
buttonAddMovie.addEventListener('click', AddModalON);
function AddModalON() {
    addModal.style.display = 'block';
    modalBackdrop.style.display = 'block';
};

// Fonction du bouton Cancel du AddMovie
buttonAddModalCancel.addEventListener('click', CancelAddMovie);
function CancelAddMovie() {
    addModal.style.display = 'none';
    modalBackdrop.style.display = 'none';
};

// Fonction de retour au menu si click hors modal

// Fonctions de lecture des inputs
buttonAddModalConfirm.addEventListener('click', AddMovie);
function AddMovie() {
    // Condition d'alerte pour saisis d'informations éronés
    if (inputMovieName.value === '' || inputMovieImage.value === '' || inputMovieRating.value === '' || inputMovieRating.value > 5) {
        window.alert('Incorrect')
    } else {
        console.log(inputMovieName.value);
        console.log(inputMovieImage.value);
        console.log(inputMovieRating.value);
        addModal.style.display = 'none';
        modalBackdrop.style.display = 'none';

        let movieListe = document.getElementById("movie-list");
        let sectionMovie = document.createElement("li");
        sectionMovie.setAttribute("class","movie-element");
        movieListe.appendChild(movieListe);
    }
};

