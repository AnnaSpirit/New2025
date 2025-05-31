# ⚙️  Nécessite : pip install requests
import requests

# ---- Configuration ----
API_KEY   = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
QUERY     = "hilarious"
RATING    = "g"
LIMIT     = 50          # on récupère large, on filtrera ensuite

# ---- Construction de l’URL (f-string power 💪) ----
base_url = "https://api.giphy.com/v1/gifs/search"
url = (
    f"{base_url}"
    f"?api_key={API_KEY}"
    f"&q={QUERY}"
    f"&rating={RATING}"
    f"&limit={LIMIT}"
)

# ---- Appel réseau ----
response = requests.get(url)
if response.status_code != 200:
    raise SystemExit(f"❌ Erreur HTTP : {response.status_code}")

data = response.json()["data"]      # Liste de GIF objects

# ---- Filtre : height > 100 ----
filtered = [
    gif for gif in data
    if int(gif["images"]["original"]["height"]) > 100
]

print(f"GIFs reçus : {len(data)}")
print(f"GIFs filtrés (> 100 px) : {len(filtered)}")

# ---- Limiter aux 10 premiers (si tu en veux que 10) ----
first_ten = filtered[:10]

# ---- Démo d’affichage : titre + URL MP4 (léger) ----
for i, gif in enumerate(first_ten, start=1):
    title = gif.get("title") or "Untitled"
    mp4   = gif["images"]["original_mp4"]["mp4"]
    print(f"{i:02d}. {title} – {mp4}")
