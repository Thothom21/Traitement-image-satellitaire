import os
import cv2

# Chemin du dossier contenant les images originales
dossier_images_originales = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\photo"

# Chemin du dossier où vous souhaitez enregistrer les images en niveaux de gris
dossier_images_gris = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\Niveau_de_gris"

# Parcours de tous les fichiers du dossier
for fichier in os.listdir(dossier_images_originales):
    # Vérification de l'extension de fichier (assurez-vous que seuls les fichiers image sont traités)
    if fichier.endswith(('.jpg', '.jpeg', '.png', '.bmp', '.gif')):
        # Chemin complet du fichier original
        chemin_fichier_original = os.path.join(dossier_images_originales, fichier)

        # Charger l'image en couleurs
        image_couleur = cv2.imread(chemin_fichier_original)

        # Convertir l'image en niveaux de gris
        image_gris = cv2.cvtColor(image_couleur, cv2.COLOR_BGR2GRAY)

        # Construire le nouveau nom de fichier avec _MAJ
        nouveau_nom_fichier = os.path.splitext(fichier)[0] + '_MAJ' + os.path.splitext(fichier)[1]

        # Chemin complet du fichier de destination
        chemin_fichier_destination = os.path.join(dossier_images_gris, nouveau_nom_fichier)

        # Enregistrement de l'image en niveaux de gris
        cv2.imwrite(chemin_fichier_destination, image_gris)

print("Conversion terminée.")
