import pandas as pd
import tkinter as tk
from tkinter import Listbox, Text

# Charger les deux tableaux
arbres_df = pd.read_excel(r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\Essence_d'arbres.xlsx")
surfaces_df = pd.read_excel(r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\Etude_déforestation.xlsx")

# Créer un DataFrame pour les résultats
result_df = pd.DataFrame(columns=['Nom de l\'arbre', 'Noms associés', 'Image', 'Résultat (€/km²)', 'Résultat Hauteur (km*m²)', 'Nb arbre total'])

# Parcourir les données des deux tableaux
for idx_arbre, row_arbre in arbres_df.iterrows():
    for idx_surface, row_surface in surfaces_df.iterrows():
        # Calculer le résultat €/km²
        resultat = row_arbre['Prix km2'] * row_surface['Surface en km²']

        # Calculer le résultat de la hauteur (km*m²)
        resultat_hauteur = row_arbre['Hauteur_linéaire_arbre_km2*m'] * row_surface['Surface en km²']

        # Calculer le nombre total d'arbres
        Nombretotal = row_arbre['Nb_arbre_au_ km2'] * row_surface['Surface en km²']

        result_df = result_df._append({
            'Nom de l\'arbre': row_arbre['Nom'],
            'Noms associés': ', '.join(arbres_df[arbres_df['Nom'] == row_arbre['Nom']]['Nom'].tolist()),
            'Image': row_surface['Image'],
            'Résultat (€/km²)': resultat,
            'Résultat Hauteur (km*m²)': resultat_hauteur,
            'Nb_arbre_total': Nombretotal
        }, ignore_index=True)

# Enregistrez les résultats dans un fichier Excel
result_df.to_excel(r"C:\Users\bauma\OneDrive\Bureau\esirem_dijon\traitement\projet\Surfaces_au_complet.xlsx", index=False)

# Fonction pour afficher les résultats
def afficher_resultats():
    essence_selectionnee = liste_essences.get(liste_essences.curselection())
    resultat_text.delete(1.0, tk.END)

    for i in range(len(result_df)):
        if essence_selectionnee in result_df['Noms associés'][i].split(', '):
            resultat_text.insert(tk.END, f"Image: {result_df['Image'][i]}\n")
            resultat_text.insert(tk.END, f"Résultat (€/km²): {result_df['Résultat (€/km²)'][i]}\n")
            resultat_text.insert(tk.END, f"Résultat Hauteur (km*m²): {result_df['Résultat Hauteur (km*m²)'][i]}\n")
            resultat_text.insert(tk.END, f"Nb_arbre_total: {result_df['Nb_arbre_total'][i]}\n\n")

# Créer l'interface tkinter
fenetre = tk.Tk()
fenetre.title("Affichage des résultats par essence d'arbres")

liste_essences = Listbox(fenetre)
liste_essences.pack()
essences_uniques = list(arbres_df['Nom'].unique())
for essence in essences_uniques:
    liste_essences.insert(tk.END, essence)

afficher_button = tk.Button(fenetre, text="Afficher les résultats", command=afficher_resultats)
afficher_button.pack()

resultat_text = Text(fenetre, height=40, width=70)
resultat_text.pack()

fenetre.mainloop()
