import cv2
import numpy as np
import os
import shutil

def highlight_green_areas(input_image_path, output_image_path, lower_green, upper_green):
    # Charger l'image d'entrée
    image = cv2.imread(input_image_path)

    # Convertir l'image en format HSV (teinte, saturation, valeur)
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Définir la plage de couleurs verte que vous souhaitez détecter
    lower_green = np.array(lower_green)
    upper_green = np.array(upper_green)

    # Créer un masque pour les pixels verts dans la plage spécifiée
    mask = cv2.inRange(hsv_image, lower_green, upper_green)

    # Appliquer le masque à l'image d'origine
    result = cv2.bitwise_and(image, image, mask=mask)

    # Enregistrer l'image résultante
    cv2.imwrite(output_image_path, result)

def calculate_green_proportion_in_highlighted_image(output_image_path):
    # Charger l'image résultante (image mise en évidence)
    highlighted_image = cv2.imread(output_image_path)

    # Convertir l'image en format HSV (teinte, saturation, valeur)
    hsv_highlighted_image = cv2.cvtColor(highlighted_image, cv2.COLOR_BGR2HSV)

    # Définir la plage de couleurs verte que vous souhaitez détecter
    lower_green = np.array([35, 50, 50])  # Plage inférieure (vert)
    upper_green = np.array([85, 255, 255])  # Plage supérieure (vert)

    # Créer un masque pour les pixels verts dans la plage spécifiée
    mask = cv2.inRange(hsv_highlighted_image, lower_green, upper_green)

    # Compter le nombre de pixels verts dans le masque
    green_pixel_count = np.count_nonzero(mask)

    # Calculer la proportion en pourcentage
    total_pixel_count = highlighted_image.shape[0] * highlighted_image.shape[1]
    green_proportion = (green_pixel_count / total_pixel_count) * 100

    return green_proportion

if __name__ == "__main__":
    input_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet"  # Remplacez par le chemin de votre répertoire
    output_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\modife"  # Remplacez par le chemin du répertoire de sortie

    # Plage de couleurs verte en format HSV (teinte, saturation, valeur)
    lower_green = [35, 50, 50]  # Plage inférieure (vert)
    upper_green = [85, 255, 255]  # Plage supérieure (vert)

    # Parcourir tous les fichiers du répertoire d'entrée
    for filename in os.listdir(input_folder):
        if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
            input_image_path = os.path.join(input_folder, filename)

            # Créer le nom de fichier de sortie avec _MAJ ajouté
            base_filename, file_extension = os.path.splitext(filename)
            output_image_filename = f"{base_filename}_MAJ{file_extension}"
            output_image_path = os.path.join(output_folder, output_image_filename)

            # Appliquer la fonction pour mettre en évidence les zones vertes
            highlight_green_areas(input_image_path, output_image_path, lower_green, upper_green)

            # Calculer la proportion de vert dans l'image mise en évidence
            green_proportion = calculate_green_proportion_in_highlighted_image(output_image_path)

            print(f"Proportion de vert dans {filename}: {green_proportion:.2f}%")

    print("Traitement terminé.")
