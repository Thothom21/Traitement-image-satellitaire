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

if __name__ == "__main__":
    input_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\photo"
    output_folder = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\seuillage"
    
    # Plage de couleurs verte en format HSV (teinte, saturation, valeur)
    lower_green = [35, 50, 50]  # Plage inférieure (vert)
    upper_green = [85, 255, 255]  # Plage supérieure (vert)
    
    process_images_in_folder(input_folder, output_folder,lower_green,upper_green)
