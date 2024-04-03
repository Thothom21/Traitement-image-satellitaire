import cv2
import numpy as np
import os

def highlight_green_areas(input_image_path, lower_green, upper_green):
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

    return result

def calculate_green_proportion_in_highlighted_image(highlighted_image):
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

def main(input_directory, output_image_path):
    # Plage de couleurs verte en format HSV (teinte, saturation, valeur)
    lower_green = [35, 50, 50]  # Plage inférieure (vert)
    upper_green = [85, 255, 255]  # Plage supérieure (vert)

    result_image = None

    # Parcourir tous les fichiers du répertoire d'entrée
    for filename in os.listdir(input_directory):
        if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
            input_image_path = os.path.join(input_directory, filename)

            # Appliquer la fonction pour mettre en évidence les zones vertes
            highlighted_image = highlight_green_areas(input_image_path, lower_green, upper_green)

            # Superposer l'image actuelle sur l'image résultante
            if result_image is None:
                result_image = highlighted_image
            else:
                # Assurez-vous que les images ont la même taille avant de les superposer
                if highlighted_image.shape == result_image.shape:
                    result_image = cv2.add(result_image, highlighted_image)

            # Calculer la proportion de vert dans l'image mise en évidence
            green_proportion = calculate_green_proportion_in_highlighted_image(highlighted_image)

            print(f"Proportion de vert dans {filename}: {green_proportion:.2f}%")

    if result_image is not None:
        # Enregistrer l'image résultante only if it's not empty
        cv2.imwrite(output_image_path, result_image)
        print("Traitement terminé. L'image résultante a été enregistrée sous 'resultat_superpose.jpg'.")
    else:
        print("Aucune image à enregistrer. Aucune zone verte n'a été détectée dans les images d'entrée.")

if __name__ == "__main__":
    input_directory = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet"  # Remplacez par le chemin de votre répertoire
    output_image_path = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\resultat_superpose.jpg"  # Nom du fichier de sortie

    main(input_directory, output_image_path)
