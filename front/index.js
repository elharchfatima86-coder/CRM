const backendStatus = document.querySelector("#backend-status");

fetch("http://localhost:3000/api/health")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP ${response.status}`);
        }
        return response.json();
    })
    .then(({ message }) => {
        backendStatus.textContent = message;
    })
    .catch((error) => {
        backendStatus.textContent = "Impossible de joindre le backend.";
        console.error("Erreur de connexion au backend :", error);
    });