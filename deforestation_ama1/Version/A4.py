import cv2
import numpy as np
import os

def highlight_green(input_image_path):
    # Charger l'image d'entrée
    image = cv2.imread(input_image_path)

    # Convertir l'image en format HSV (teinte, saturation, valeur)
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Définir la plage de couleurs verte
    lower_green = np.array([35, 50, 50])  # Plage inférieure (vert)
    upper_green = np.array([85, 255, 255])  # Plage supérieure (vert)

    # Créer un masque pour les pixels verts
    green_mask = cv2.inRange(hsv_image, lower_green, upper_green)

    # Appliquer le masque pour mettre en évidence le vert
    result = cv2.bitwise_and(image, image, mask=green_mask)

    return result

def overlay_images(image1, image2):
    # Superposer les deux images en gardant l'image1 en vert et en transformant le vert de l'image2 en rouge
    alpha = 0.5
    overlay = cv2.addWeighted(image1, alpha, image2, 1 - alpha, 0)
    return overlay

def process_images_and_save(input_dir, output_dir):
    # Obtenir la liste des fichiers triés par ordre alphabétique
    image_files = sorted([f for f in os.listdir(input_dir) if f.endswith(".jpg") or f.endswith(".jpeg") or f.endswith(".png")])

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Charger la première image et la mettre en évidence en vert
    first_image_path = os.path.join(input_dir, image_files[0])
    highlighted_green = highlight_green(first_image_path)

    # Obtenir la taille de la première image
    target_size = highlighted_green.shape

    for i in range(1, len(image_files)):
        input_image_path = os.path.join(input_dir, image_files[i])

        # Charger l'image courante et la mettre en évidence en vert
        current_highlighted_green = highlight_green(input_image_path)

        # Redimensionner l'image courante à la taille de la première image si nécessaire
        if current_highlighted_green.shape != target_size:
            current_highlighted_green = cv2.resize(current_highlighted_green, (target_size[1], target_size[0]))

        # Superposer l'image courante avec l'image précédente
        result_image = overlay_images(highlighted_green, current_highlighted_green)

        # Créer le nom de fichier de sortie
        base_filename, _ = os.path.splitext(image_files[i])
        output_filename = f"{base_filename}_superpose.jpg"
        output_image_path = os.path.join(output_dir, output_filename)

        # Enregistrer l'image résultante
        cv2.imwrite(output_image_path, result_image)

if __name__ == "__main__":
    input_directory = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\modife"
    output_directory = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\supperpose"
    
    process_images_and_save(input_directory, output_directory)
    
    print("Traitement terminé.")
