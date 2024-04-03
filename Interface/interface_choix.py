import tkinter as tk
import subprocess
import os

def lancer_programme(programme):
    subprocess.Popen(["python", programme])

def choix_deforestation():
    repertoire_script = os.path.dirname(os.path.abspath(__file__))
    chemin1= os.path.abspath(os.path.join(repertoire_script,".."))
    lancer_programme(chemin1+r"/deforestation_ama1/Programme_déforéstation_chemins_relatif_défitinif.py")

def choix_secheresse():
    repertoire_script = os.path.dirname(os.path.abspath(__file__))
    chemin1= os.path.abspath(os.path.join(repertoire_script,".."))
    lancer_programme(chemin1+r"/detection_lac1/Programme_desertification.py")
    lancer_programme(repertoire_script+r"/BDD_desertification.py")

def choix_3d():
    repertoire_script = os.path.dirname(os.path.abspath(__file__))
    chemin1= os.path.abspath(os.path.join(repertoire_script,".."))
    lancer_programme(chemin1+r"/detection_lac1/Profondeur.py")



# Création de la fenêtre principale
fenetre = tk.Tk()
fenetre.title("Choix du problème")

# Définir les boutons
bouton_deforestation = tk.Button(fenetre, text="Déforestation en Amazonie", command=choix_deforestation)
bouton_secheresse = tk.Button(fenetre, text="Sécheresse lac en Irak", command=choix_secheresse)
bouton_3d = tk.Button(fenetre, text = "lac 3D en irak", command=choix_3d)

# Placer les boutons dans la fenêtre
bouton_deforestation.pack(pady=10)
bouton_secheresse.pack(pady=10)
bouton_3d.pack(pady=10)
# Lancer la boucle principale
fenetre.mainloop()
