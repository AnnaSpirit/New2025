import requests

API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
SEARCH_URL   = "https://api.giphy.com/v1/gifs/search"
TRENDING_URL = "https://api.giphy.com/v1/gifs/trending"
MAX_RESULTS  = 10

def fetch_gifs(endpoint: str, params: dict) -> list[dict]:
    """Effectue l’appel à Giphy et renvoie la liste 'data' (GIFs)."""
    params["api_key"] = API_KEY
    params["limit"]   = MAX_RESULTS
    r = requests.get(endpoint, params=params, timeout=10)
    if r.status_code != 200:
        raise RuntimeError(f"HTTP {r.status_code} – {r.text}")
    return r.json()["data"]

def main() -> None:
    term = input("🔍 What term do you want? ").strip()
    gifs = []
    if term:
        gifs = fetch_gifs(SEARCH_URL, {"q": term, "rating": "g"})
        if gifs:
            print(f"✅ I found {len(gifs)} gifs for \"{term}\": ")
        else:
            print("😕 No results ... I go to trends of the day!")
    
    if not gifs:  # Soit terme vide, soit zéro résultat
        gifs = fetch_gifs(TRENDING_URL, {"rating": "g"})
        print(F "🔥 top {len (gifs)} trendy gifs today:")

    # Affichage
    for i, gif in enumerate(gifs, start=1):
        url   = gif["url"]                     # page Giphy
        title = gif.get("title") or "Untitled"
        print(f"{i:02d}. {title} – {url}")

if __name__ == "__main__":
    main()


# =========================

# 1) Cahier des charges
# Demander à l’utilisateur une expression.

# Tenter la recherche : /v1/gifs/search.

# Si zéro résultat ▶️ basculer sur /v1/gifs/trending du jour et avertir l’utilisateur. 
# developers.giphy.com

# Afficher les liens des GIFs trouvés (ou au moins leur titre et URL).

# 3) Points à retenir
# Détection du « terme vide / aucun résultat » – on teste la longueur de data.

# Paramètre limit=10 – on respecte la contrainte “first 10 gifs”.

# Timeout réseau – optionnel, mais évite que la console reste bloquée ad vitam.

# URLs – j’affiche l’URL de la page ; tu peux choisir la rendition original.mp4, downsized_large, etc., selon tes besoins.

# ✨ Next steps
# Tu peux transformer ces scripts en fonctions réutilisables pour un projet Web (FastAPI, Flask, etc.).

# Pour un tri couleur/hauteur/ratio, regarde la Rendition Guide : paramètre fields pour ne recevoir que images pour alléger la réponse. 
# developers.giphy.com

# Besoin d’afficher les GIFs directement dans un notebook ? Utilise IPython.display.Image avec les URLs.

# Amuse-toi bien et n’hésite pas si tu veux pimper le tout avec un peu d’asynchronisme ou une petite interface graphique ! 😎