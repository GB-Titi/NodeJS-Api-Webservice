# API D'AUTHENTIFICATION

## Marche à suivre :
*(Il faut utiliser une application comme postman pour effectuer les reqêtes)*

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
>- On met dans le body un utilisteur existant :  
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

>- Modifier le signup pour faire en sorte que seul l'admin puisse créer un compte (on vérifie que l'access token correspond bien à un role admin)
>- Edition compte utilisateur
>- Refresh token
>- Brut Force
