Rewrite this src/routes/index.tsx file so it no longer uses any Loveable .asset.json imports.

Replace these imports:

heroArtwork
casaBatlloAsset
print2Asset
print3Asset
print4Asset
logo

with normal image paths from the public/images folder.

Use these paths:

/images/Logo GAK Creations copy.png
/images/Abbaye Aux Dames Saintes France.jpg
/images/Guggenheim Museum Bilbao, Spain.jpg
/images/Church of San Juan Bautista de Banos, Spain.jpg
/images/Fuerteventura Chapel.jpg
/images/The Boat That Dreams Of Sea.jpg

Replace every occurrence of *.url with the correct image path.

Leave the studio image import unchanged.

Also change

const SITE_URL = "https://gak-creations-doorway.lovable.app";

to

const SITE_URL = "https://www.gakcreations.com";

Do not change any layout, styling or components.
Only replace the image imports and image references.
