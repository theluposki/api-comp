# auth
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{ "email": "lu@gmail.com","password": "123456789456"}' \
  http://localhost:3002/auth | json_pp
