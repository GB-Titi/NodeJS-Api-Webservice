# API D'AUTHENTIFICATION

## Marche à suivre :
*(Il faut utiliser une application comme postman pour effectuer les reqêtes)*

SUR BDD MONGO DB:
Importer le compte admin suivant 
>`{
    "_id": {
        "$oid": "624571ba5e13c35d429ae463"
    },
    "username": "GrosBoule_admin",
    "email": "titi2@gmail.com",
    "password": "$2a$08$kFtgbWpAJVZsN28PGxcAbueqnFoSbjsII0iJWvoF.eB52Th58j4hC",
    "roles": [{
        "$oid": "624570135e13c35d429ae455"
    }, {
        "$oid": "624570135e13c35d429ae457"
    }],
    "__v": 1
}`

#### - Connexion admin :
>- Requête POST sur l'url `http://localhost:8082/api/auth/signin`
>- Mettre dans le body de la requête :  
>`{  
    "username" : "GrosBoule_admin",  
    "password" : "123456"  
}`

#### - Création utilisateur :
>- Après s'être connecté comme expliqué ci-dessus, il faut récupérer l'accessToken revoyé par l'api.
>- On effectue une deuxième requête POST sur l'url `http://localhost:8082/api/auth/signup`
>- On met dans le body un utilisteur comme :  
>`
{  
  "username" : "test_success",
    "email" : "test_success@test.fr",
    "password" : "123456",
    "roles" : [
        "user"
    ]
}  
`
>- On met dans les headers le token récupéré précédement avec pour clef `x-access-token`


-----------------

## Reste à faire :

>- Edition compte utilisateur
>- Essayer de faire correspondre au max avec le contrat d'interface :
>   - Rajouter une created_date à la création de l'utilisateur + quand on affiche l'utilisateur
>   - Route vérifier validité du token
>   - Appeller je refreshToken depuis un call api (voir contrat d'interface)
>

## Pour le prochain projet :

>- Mise en place de mongo Atlas (cloud) pour arrêter de fonctionner en local
>- Docker si besoin pour l'api d'auth
>- Petit front pour arrêter de requêter avec postman
