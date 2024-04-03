"""
Algorithme TraitementImages:
    1. Définir la fonction find_images(directory, filename) pour trouver les chemins des fichiers image dans un répertoire et ses sous-répertoires.
        a. Initialiser une liste vide found_files pour stocker les chemins des fichiers trouvés.
        b. Pour chaque répertoire racine, sous-répertoire et fichier dans le répertoire donné :
            i. Si le nom du fichier correspond au nom de fichier recherché :
                - Ajouter le chemin complet du fichier à la liste found_files.
        c. Retourner la liste found_files contenant les chemins des fichiers trouvés.

    2. Définir les variables repertoire_script, source_directory et image_filename.
        - repertoire_script : Chemin du répertoire du script en cours d'exécution.
        - source_directory : Chemin du dossier contenant les images à traiter.
        - image_filename : Nom du fichier image à rechercher.

    3. Appeler la fonction find_images(source_directory, image_filename) pour obtenir une liste des chemins des fichiers image trouvés.
        - Si aucun fichier n'est trouvé, afficher un message approprié et quitter.
    
    4. Pour chaque chemin de fichier trouvé dans la liste :
        a. Charger l'image à partir du chemin de fichier.
        b. Appliquer un flou gaussien à l'image pour réduire le bruit.
        c. Extraire le canal vert de l'image floutée.
        d. Créer une grille de coordonnées X, Y et Z à partir du canal vert.
        e. Afficher la surface 3D de la grille de coordonnées.
        f. Afficher la courbure moyenne de la grille.

"""

import os
import cv2
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import pyvista as pv
from pyvista import examples

def find_images(directory, filename):
    found_files = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file == filename:
                found_files.append(os.path.join(root, file))
    return found_files

repertoire_script = os.path.dirname(os.path.abspath(__file__))

# Chemin du dossier source
source_directory = repertoire_script + '/seuillage'

# Nom du fichier image recherché
image_filename = 'Green_and_Black.png'

# Recherche des fichiers image dans tous les sous-dossiers du dossier source
result = find_images(source_directory, image_filename)

# Affichage des chemins complets des fichiers trouvés
if result:
    print("Fichiers trouvés :")
    for file_path in result:
        print(file_path)
        image = cv2.imread(file_path)

        # Lisser l'image
        blurred_image = cv2.GaussianBlur(image, (15, 15), 0)

        green_channel = blurred_image[:, :, 1]
        depth = np.array(green_channel, dtype=np.float32)
        
        X, Y = np.meshgrid(range(depth.shape[1]), range(depth.shape[0]))
        Z = depth
        
        # Augmenter la taille le long de l'axe Z
        #Z *= 10  # Vous pouvez ajuster ce facteur selon votre besoin pour obtenir l'effet désiré
        
        fig = plt.figure()
        ax = fig.add_subplot(111, projection='3d')
        ax.plot_surface(X, Y, -Z, facecolors=cv2.cvtColor(blurred_image, cv2.COLOR_BGR2RGB)/255.0)
        
        # Create and plot structured grid
        grid = pv.StructuredGrid(X, Y, Z)
        grid.plot()
        # Plot mean curvature as well
        grid.plot_curvature(clim=[-1, 1])

else:
    print("Aucun fichier trouvé avec le nom '{}' dans les sous-dossiers de '{}'.".format(image_filename, source_directory))
