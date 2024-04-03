import cv2
import os

# Définir le répertoire d'entrée (contenant les images à traiter)
input_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\supperpose"  # Remplacez par le chemin de votre dossier

# Définir le répertoire de sortie (où les images inversées seront enregistrées)
output_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\supperpose_propre"  # Remplacez par le chemin de sortie souhaité

# Assurez-vous que le répertoire de sortie existe. S'il n'existe pas, créez-le.
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Liste des extensions de fichiers d'images pris en charge
extensions_images = [".jpg", ".jpeg", ".png"]

# Parcourir tous les fichiers du répertoire d'entrée
for filename in os.listdir(input_folder):
    # Vérifier si le fichier a une extension d'image prise en charge
    if any(filename.lower().endswith(ext) for ext in extensions_images):
        # Construire le chemin d'accès complet pour le fichier d'entrée
        chemin_image_entree = os.path.join(input_folder, filename)

        # Charger l'image
        image = cv2.imread(chemin_image_entree)

        # Inverser les canaux Rouge (0) et Vert (1)
        inverted_image = image.copy()
        inverted_image[:, :, 0] = image[:, :, 1]  # Canal Rouge devient Vert
        inverted_image[:, :, 1] = image[:, :, 0]  # Canal Vert devient Rouge

        # Construire le chemin de sortie en inversant l'extension
        nom_fichier_sortie, extension = os.path.splitext(filename)
        chemin_image_sortie = os.path.join(output_folder, f"{nom_fichier_sortie}_inverse{extension}")

        # Enregistrer l'image inversée
        cv2.imwrite(chemin_image_sortie, inverted_image)

print("Toutes les images ont été inversées avec succès.")
