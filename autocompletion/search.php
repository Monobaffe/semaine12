<?php   
    $data = unserialize(file_get_contents('towns.txt')); // Récupération de la liste complète des villes

    $dataLen = count($data);

    
    sort($data); // On trie les villes dans l'ordre alphabétique


    $results = array(); // Le tableau où seront stockés les résultats de la recherche



    for ($i = 0 ; $i < $dataLen && count($results) < 10 ; $i++) {

    if (stripos($data[$i], $_GET['s']) === 0) { // Si la valeur commence par les mêmes caractères que la recherche

    
    array_push($results, $data[$i]); // On ajoute  le résultat à la liste à retourner

    }

    }


    echo implode('|', $results); // on affiche les résultats séparés par une barre verticale |


?>