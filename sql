
jeux video
SELECT possesseur FROM `jeux_video`;
SELECT console FROM `jeux_video` WHERE console = 'PC';

SELECT nom FROM `jeux_video` WHERE nbre_joueurs_max > 1;
SELECT nom, commentaires FROM `jeux_video`;
SELECT nom FROM `jeux_video` WHERE console = 'PC' AND prix >= 30;
SELECT nom FROM `jeux_video` WHERE nom LIKE '%mario%';
SELECT console, COUNT(nom) FROM `jeux_video` GROUP BY console DESC;
SELECT COUNT(possesseur) FROM `jeux_video`;
SELECT AVG(prix), nom FROM `jeux_video` GROUP BY nom;


atomes
SELECT nom, decouverte_annee FROM `atome`;
SELECT nom, decouverte_pays FROM `atome` WHERE decouverte_pays = 'France';
SELECT nom, decouverte_pays, decouverte_annee, decouverte_noms FROM `atome` WHERE decouverte_pays = 'France';
SELECT nom, electronegativite FROM `atome` WHERE electronegativite >= 2;
SELECT nom, decouverte_annee FROM `atome` WHERE decouverte_annee BETWEEN 1800 AND 1899;
SELECT nom FROM `atome` WHERE nom LIKE '%y%';
SELECT nom FROM `atome` WHERE decouverte_noms = '';
SELECT nom, decouverte_noms FROM atome WHERE decouverte_noms LIKE '%Curie%';
SELECT nom, decouverte_annee, decouverte_noms FROM `atome` WHERE is_radioactif = 1;


ville de france
SELECT ville_nom, ville_population_2012 FROM `villes_france_free`ORDER BY ville_population_2012 DESC LIMIT 10

SELECT ville_nom, ville_surface FROM `villes_france_free`ORDER BY ville_surface DESC LIMIT 50;

SELECT departement_nom FROM `departement` WHERE departement_code LIKE '97%';

SELECT ville_nom, ville_population_2012, departement_nom 
FROM `villes_france_free` CROSS JOIN departement 
ORDER BY ville_population_2012 ASC LIMIT 10

SELECT d.departement_nom, d.departement_code, COUNT(c.ville_id) AS nombre_communes 
FROM departement d LEFT JOIN villes_france_free c 
ON d.departement_code = c.ville_departement 
GROUP BY d.departement_nom, d.departement_code 
ORDER BY nombre_communes DESC LIMIT 0, 25;

SELECT ville_departement, SUM(ville_surface) AS superficie_totale
FROM villes_france_free GROUP BY ville_departement
ORDER BY superficie_totale DESC LIMIT 10;

SELECT COUNT(*) FROM villes_france_free WHERE ville_nom LIKE 'Saint%';

SELECT ville_nom, COUNT(*) FROM villes_france_free GROUP BY ville_nom HAVING COUNT(*) > 1 ORDER BY COUNT(*) DESC;

SELECT ville_nom, ville_surface FROM villes_france_free WHERE ville_surface > ( SELECT AVG(ville_surface) FROM villes_france_free );

SELECT d.departement_nom, SUM(v.ville_population_2012) AS total_population FROM departement d
INNER JOIN villes_france_free v ON d.departement_code = v.ville_departement
GROUP BY d.departement_nom HAVING SUM(v.ville_population_2012) > 2000000;

SELECT REPLACE(ville_nom, '-', ' ') AS nom_ville_modifie FROM villes_france_free WHERE ville_nom LIKE 'SAINT-%';