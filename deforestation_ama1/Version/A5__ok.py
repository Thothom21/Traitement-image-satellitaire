import cv2
import numpy as np
import os
import shutil
import openpyxl


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






def highlight_color_areas(input_image_path, lower_color, upper_color):
    # Charger l'image d'entrée
    image = cv2.imread(input_image_path)

    # Convertir l'image en format HSV (teinte, saturation, valeur)
    hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Définir la plage de couleurs que vous souhaitez détecter
    lower_color = np.array(lower_color)
    upper_color = np.array(upper_color)

    # Créer un masque pour les pixels de la couleur spécifiée
    mask = cv2.inRange(hsv_image, lower_color, upper_color)

    # Appliquer le masque à l'image d'origine
    result = cv2.bitwise_and(image, image, mask=mask)

    return result

def calculate_color_proportion_in_highlighted_image(highlighted_image, color_name):
    # Convertir l'image en format HSV (teinte, saturation, valeur)
    hsv_highlighted_image = cv2.cvtColor(highlighted_image, cv2.COLOR_BGR2HSV)

    # Définir la plage de couleurs pour le calcul de la proportion
    if color_name == "green":
        lower_color = np.array([35, 50, 50])  # Plage inférieure (vert)
        upper_color = np.array([85, 255, 255])  # Plage supérieure (vert)
    elif color_name == "red":
        lower_color = np.array([0, 50, 50])  # Plage inférieure (rouge)
        upper_color = np.array([30, 255, 255])  # Plage supérieure (rouge)
    else:
        raise ValueError("Couleur non prise en charge")

    # Créer un masque pour les pixels de la couleur spécifiée
    mask = cv2.inRange(hsv_highlighted_image, lower_color, upper_color)

    # Compter le nombre de pixels de la couleur dans le masque
    color_pixel_count = np.count_nonzero(mask)

    # Calculer la proportion en pourcentage
    total_pixel_count = highlighted_image.shape[0] * highlighted_image.shape[1]
    color_proportion = (color_pixel_count / total_pixel_count) * 100

    return color_proportion



def superpose_and_rename_images(départ, arrivée):
    # Obtenir la liste des fichiers triés par ordre alphabétique
    image_files = sorted([f for f in os.listdir(départ) if f.endswith(".jpg") or f.endswith(".jpeg") or f.endswith(".png")])

    for i in range(len(image_files) - 1):
        input_image_path1 = os.path.join(départ, image_files[i])
        input_image_path2 = os.path.join(départ, image_files[i + 1])

        # Charger les deux images
        image1 = cv2.imread(input_image_path1)
        image2 = cv2.imread(input_image_path2)

        # Redimensionner l'une des images si nécessaire
        if image1.shape != image2.shape:
            image1 = cv2.resize(image1, (image2.shape[1], image2.shape[0]))

        # Créer une image vide pour les pixels bleus
        blue_pixels = np.zeros_like(image1)

        # Obtenir les masques pour les zones vertes et noires dans les deux images
        green_mask1 = np.all(image1 == [0, 255, 0], axis=-1)  # Vert dans l'image 1
        green_mask2 = np.all(image2 == [0, 255, 0], axis=-1)  # Vert dans l'image 2
        black_mask1 = np.all(image1 == [0, 0, 0], axis=-1)    # Noir dans l'image 1
        black_mask2 = np.all(image2 == [0, 0, 0], axis=-1)    # Noir dans l'image 2

        # Créer l'image résultante en appliquant les masques
        result_image = image1.copy()
        result_image[green_mask1 & black_mask2] = [0, 0, 0]    # Noir pour les zones vertes -> noires
        result_image[black_mask1 & green_mask2] = [0, 0, 255]  # Bleu pour les zones noires -> vertes
        result_image[black_mask1 & black_mask2] = [0, 0, 0]    # Noir pour les zones noires communes
        result_image[green_mask1 & green_mask2] = [0, 255, 0]  # Vert pour les zones vertes communes
        result_image[~(green_mask1 | green_mask2 | black_mask1 | black_mask2)] = [0, 0, 255]  # Bleu pour les autres pixels

        # Créer le nom de fichier de sortie
        base_filename1, _ = os.path.splitext(image_files[i])
        base_filename2, _ = os.path.splitext(image_files[i + 1])
        output_filename = f"{base_filename1}-{base_filename2}_MAJ.jpg"
        output_image_path = os.path.join(arrivée, output_filename)

        # Enregistrer l'image résultante
        cv2.imwrite(output_image_path, result_image)

        print(f"Superposition de {image_files[i]} et {image_files[i + 1]} terminée.")

def create_excel_file(output_filename, data):
    workbook = openpyxl.Workbook()
    worksheet = workbook.active
    worksheet.title = "Données"
    # Add headers
    worksheet['A1'] = "Nom de l'image"
    worksheet['B1'] = "Proportion de vert (%)"
    worksheet['C1'] = "Surface en km²"

    # Add data
    for row_idx, row_data in enumerate(data, start=2):
        worksheet[f'A{row_idx}'] = row_data[0]
        worksheet[f'B{row_idx}'] = row_data[1]
        worksheet[f'C{row_idx}'] = row_data[2]

    workbook.save(output_filename)


if __name__ == "__main__":
    dossier_photo = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\photo"  # Remplacez par le chemin de votre répertoire
    départ  = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\modife"  # Remplacez par le chemin de votre répertoire d'images
    arrivée = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\supperpose"  # Remplacez par le chemin du répertoire de sortie

    # Plage de couleurs verte en format HSV (teinte, saturation, valeur)
    lower_green = [35, 50, 50]  # Plage inférieure (vert)
    upper_green = [85, 255, 255]  # Plage supérieure (vert)

    # Facteurs de conversion
    pixel_to_km = 20 / 38  # Conversion de pixels en km²

    # Données pour le fichier Excel
    excel_data = []

    # Parcourir tous les fichiers du répertoire d'entrée
    for filename in os.listdir(dossier_photo):
        if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
            input_image_path = os.path.join(dossier_photo, filename)

            # Créer le nom de fichier de sortie avec _MAJ ajouté
            base_filename, file_extension = os.path.splitext(filename)
            output_image_filename = f"{base_filename}_MAJ{file_extension}"
            output_image_path = os.path.join(départ, output_image_filename)

            # Appliquer la fonction pour mettre en évidence les zones vertes
            highlight_green_areas(input_image_path, output_image_path, lower_green, upper_green)

            # Charger l'image mise en évidence
            highlighted_image = cv2.imread(output_image_path)

            # Calculer la proportion de vert dans l'image mise en évidence
            green_proportion = calculate_green_proportion_in_highlighted_image(output_image_path)

            # Calculer la surface en kilomètres carrés
            total_pixels = highlighted_image.shape[0] * highlighted_image.shape[1]
            green_area_km2 = (green_proportion / 100) * (total_pixels * pixel_to_km ** 2)

            # Ajouter les informations à la liste des données
            excel_data.append([filename, green_proportion, green_area_km2])

            print(f"Proportion de vert dans {filename}: {green_proportion:.2f}%, Surface en km²: {green_area_km2:.2f} km²")

    # Enregistrer le fichier Excel
    excel_filename = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\Etude_déforestation.xlsx"
    create_excel_file(excel_filename, excel_data)

    superpose_and_rename_images(départ, arrivée)

    print("Traitement terminé.")