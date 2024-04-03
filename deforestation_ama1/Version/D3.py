import os
import cv2
import numpy as np

# Fonction pour détecter les contours blancs et remplir les zones
def detecter_contours_et_remplir(image_path):
    image = cv2.imread(image_path)
    if image is None:
        return

    # Conversion en niveaux de gris
    image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Détection des contours blancs
    _, thresh = cv2.threshold(image_gray, 200, 255, cv2.THRESH_BINARY)

    # Dilatation
    kernel = np.ones((3, 3), np.uint8)
    thresh = cv2.dilate(thresh, kernel, iterations=5)

    # Érosion pour fermer les zones (moins agressivement)
    thresh = cv2.erode(thresh, kernel, iterations=5)

    # Trouver les contours
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Créer une image vide pour le remplissage
    filled_image = np.zeros_like(image)

    # Remplir les contours en blanc
    cv2.drawContours(filled_image, contours, -1, (255, 255, 255), thickness=cv2.FILLED)

    # Enregistrement de l'image modifiée
    output_path = image_path.replace('medium_canny.png', 'filled.png')
    cv2.imwrite(output_path, filled_image)

    return filled_image

# Fonction pour compter les pixels et calculer la superficie en km²
def compter_pixels_et_calculer_superficie(image):
    if image is None:
        return None

    # Compter le nombre total de pixels
    total_pixels = image.size

    # Compter le nombre de pixels blancs
    white_pixels = np.count_nonzero(np.all(image == [255, 255, 255], axis=2))

    # Calculer la superficie en km²
    superficie_km2 = (white_pixels / (38 * 38)) * 400_000_000

    return total_pixels, white_pixels, superficie_km2

# Répertoire racine contenant les sous-dossiers d'images
repertoire_racine = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\seuillage"

# Parcourez les sous-dossiers et recherchez "medium_canny.png"
for dossier, sous_dossiers, fichiers in os.walk(repertoire_racine):
    for fichier in fichiers:
        if fichier == 'medium_canny.png':
            chemin_image = os.path.join(dossier, fichier)
            filled_image = detecter_contours_et_remplir(chemin_image)
            if filled_image is not None:
                total_pixels, white_pixels, superficie_km2 = compter_pixels_et_calculer_superficie(filled_image)
                print(f"Image traitée : {chemin_image}")
                print(f"Nombre total de pixels : {total_pixels}")
                print(f"Nombre de pixels blancs : {white_pixels}")
                print(f"Superficie en km² : {superficie_km2} km²")
