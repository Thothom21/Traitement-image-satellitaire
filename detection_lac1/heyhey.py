from PIL import Image

def convert_dpi(image_path, dpi):
    try:
        # Ouvrir l'image
        image = Image.open(image_path)

        # Convertir la résolution
        image_info = image.info
        image_resolution = image_info.get("dpi")
        if image_resolution is not None:
            # Si la résolution est déjà définie, la mettre à jour
            image_info["dpi"] = (dpi, dpi)
        else:
            # Sinon, ajouter la résolution
            image_info["dpi"] = (dpi, dpi)

        # Enregistrer l'image avec la nouvelle résolution
        image.save(r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\SE_8\computer_science\detection_lac1\photo\output.jpg", **image_info)

        print("L'image a été convertie avec succès avec une résolution de {} dpi.".format(dpi))
    except Exception as e:
        print("Une erreur s'est produite lors de la conversion de l'image : ", str(e))

# Exemple d'utilisation
image_path = r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\SE_8\computer_science\detection_lac1\photo\01-2021.jpg"
dpi = 900

convert_dpi(image_path, dpi)
