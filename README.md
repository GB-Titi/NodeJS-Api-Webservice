# API D'AUTHENTIFICATION

## Install et lancement :

> Necessaire avant lancement :
>- MongoDB compass
>- PostmanAgent
>- NodeJs

La première étape est de se placer dans le dossier `./Api_Auth/`  
Lancez la commande `npm i` pour installer tout les packages necessaires au lancement de l'application.  
La commande `npm run dev` permet de lancer l'application.  
Si nodemon ne s'est pas installé en amont, lancez `npm i nodemon`  

## Marche à suivre :
*(Il faut utiliser une application comme postman pour effectuer les requêtes)*

SUR BDD MONGO DB:
Importer le compte admin suivant 
>`{
    "_id": {
        "$oid": "624571ba5e13c35d429ae463"
    },
    "username": "GB_admin",
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
>- Requête POST sur l'url `http://localhost:8082/api/token`
>- Mettre dans le body de la requête :  
>`{  
    "username" : "GB_admin",  
    "password" : "123456"  
}`

#### - Création utilisateur :
>- Après s'être connecté comme expliqué ci-dessus, il faut récupérer l'accessToken revoyé par l'api.
>- On effectue une deuxième requête POST sur l'url `http://localhost:8082/api/account`
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

#### - RefreshToken :
>- Requête POST sur l'url `http://localhost:8082/api/auth/refreshToken`
>- Mettre dans le body (JSON) le refresh token

#### - Recherche d'utilisateur :
>- Necessite la connexion admin
>- Requête GET sur l'url `http://localhost:8082/api/account/:id` :id étant l'identifiant de l'utilisateur.

#### - Affichage des différents board suivant le role

>Petite feature en plus permettant de voir le board relatif au role du compte utilisé.  
>- Il faut utiliser le token de connexion récupéré en amont et le faire correspondre à la requete souhaitée :
>   - `http://localhost:8082/api/test/all` -> Board générique
>   - `http://localhost:8082/api/test/admin` -> Board Admin
>   - `http://localhost:8082/api/test/user` -> Board User
>   - `http://localhost:8082/api/test/mod` -> Board Modérateur

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
