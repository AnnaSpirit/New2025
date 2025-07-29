import os

def list_all_files_and_dirs(path, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        for root, dirs, files in os.walk(path):
            f.write(f"\n📁 Folder: {root}\n")
            print(f"\n📁 Folder: {root}")

            for d in dirs:
                folder_path = os.path.join(root, d)
                f.write(f"   📂 Subfolder: {folder_path}\n")
                print(f"   📂 Subfolder: {folder_path}")

            for file in files:
                file_path = os.path.join(root, file)
                f.write(f"   📄 File: {file_path}\n")
                print(f"   📄 File: {file_path}")

# ——— CONFIGURATION ———
base_path = r"E:\New2025"  # ← Ton dossier à scanner
output_path = "exploration_result.txt"  # Fichier de sortie

# ——— LANCEMENT DU SCAN ———
list_all_files_and_dirs(base_path, output_path)

input("\n🎉 Done! Press Enter to exit...")  # Garde la fenêtre ouverte après exécution
