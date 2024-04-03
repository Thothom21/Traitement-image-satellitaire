import os
import cv2
import numpy as np

def process_images_in_folder(input_folder, output_folder,lower_green,upper_green):
    # Create the output folders if they don't exist
    os.makedirs(output_folder, exist_ok=True)
    
    # Get a list of all image files in the input folder
    image_files = [f for f in os.listdir(input_folder) if f.endswith(('.jpg', '.png', '.jpeg', '.bmp', '.PNG'))]

    for image_file in image_files:
        # Load the image
        image_path = os.path.join(input_folder, image_file)
        image = cv2.imread(image_path)
        if image is None:
            print(f"Failed to read {image_file}. Skipping...")
            continue

        print(f"Processing {image_file}...")

        # Convertir l'image en format HSV (teinte, saturation, valeur)
        hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

        # Définir la plage de couleurs verte que vous souhaitez détecter
        lower_green = np.array(lower_green)
        upper_green = np.array(upper_green)

        # Créer un masque pour les pixels verts dans la plage spécifiée
        mask = cv2.inRange(hsv_image, lower_green, upper_green)

        # Appliquer le masque à l'image d'origine
        result = cv2.bitwise_and(image, image, mask=mask)

        # Convert to grayscale
        gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

        # Save the grayscale image
        output_path = os.path.join(output_folder, image_file)
        os.makedirs(output_path, exist_ok=True)
        cv2.imwrite(os.path.join(output_path, "gray_image.png"), gray)

        # Apply Gaussian blur
        blurred = cv2.GaussianBlur(gray, (5, 5), 0)

        # Apply Canny edge detection with different thresholds
        large = cv2.Canny(blurred, 10, 200)
        medium = cv2.Canny(blurred, 30, 150)
        narrow = cv2.Canny(blurred, 240, 250)

        # Save the processed images in the output folder
        cv2.imwrite(os.path.join(output_path, "large_canny.png"), large)
        cv2.imwrite(os.path.join(output_path, "medium_canny.png"), medium)
        cv2.imwrite(os.path.join(output_path, "narrow_canny.png"), narrow)
        cv2.imwrite(os.path.join(output_path, "Green_and_Black.png"), result)

        print(f"Processed {image_file} and saved the results in {output_path}")

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

if __name__ == "__main__":
    input_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\photo"
    output_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\seuillage"
    
    # Plage de couleurs verte en format HSV (teinte, saturation, valeur)
    lower_green = [35, 50, 50]  # Plage inférieure (vert)
    upper_green = [85, 255, 255]  # Plage supérieure (vert)
    
    process_images_in_folder(input_folder, output_folder,lower_green,upper_green)

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
