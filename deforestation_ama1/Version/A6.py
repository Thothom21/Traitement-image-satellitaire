import cv2
import os
import numpy as np

# Définir le répertoire d'entrée (contenant les images à traiter)
repertoire_entree = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\supperpose"  # Remplacez par le chemin de votre dossier

# Définir le répertoire de sortie (où les images inversées seront enregistrées)
repertoire_sortie = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\supperpose_propre"  # Remplacez par le chemin de sortie souhaité

# Assurez-vous que le répertoire de sortie existe. S'il n'existe pas, créez-le.
if not os.path.exists(repertoire_sortie):
    os.makedirs(repertoire_sortie)

# Liste des extensions de fichiers d'images pris en charge
extensions_images = [".jpg", ".jpeg", ".png"]

# Parcourir tous les fichiers du répertoire d'entrée
for filename in os.listdir(repertoire_entree):
    # Vérifier si le fichier a une extension d'image prise en charge
    if any(filename.lower().endswith(ext) for ext in extensions_images):
        # Construire le chemin d'accès complet pour le fichier d'entrée
        chemin_image_entree = os.path.join(repertoire_entree, filename)

        # Charger l'image
        image = cv2.imread(chemin_image_entree)

        # Remplacer les pixels rouges par des pixels noirs
        image[np.where((image == [0, 0, 255]).all(axis=2))] = [0, 0, 0]

        # Construire le chemin de sortie en inversant l'extension
        nom_fichier_sortie, extension = os.path.splitext(filename)
        chemin_image_sortie = os.path.join(repertoire_sortie, f"{nom_fichier_sortie}_sans_rouge{extension}")

        # Enregistrer l'image avec les pixels rouges transformés en noir
        cv2.imwrite(chemin_image_sortie, image)

print("Toutes les images avec les pixels rouges transformés en noir ont été enregistrées avec succès.")
