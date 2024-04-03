
import cv2
import numpy as np

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
    input_image_path = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\deforestation_spot_1986.jpg"  # Remplacez par le chemin de votre image
    output_image_path = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\deforestation_spot_1986_image_mise_en_evidence.jpg"

    # Plage de couleurs verte en format HSV (teinte, saturation, valeur)
    lower_green = [35, 50, 50]  # Plage inférieure (vert)
    upper_green = [85, 255, 255]  # Plage supérieure (vert)

    # Appliquer la fonction pour mettre en évidence les zones vertes
    highlight_green_areas(input_image_path, output_image_path, lower_green, upper_green)

    # Calculer la proportion de vert dans l'image mise en évidence
    green_proportion = calculate_green_proportion_in_highlighted_image(output_image_path)

    print(f"Proportion de vert sur l'image mise en évidence : {green_proportion:.2f}%")
