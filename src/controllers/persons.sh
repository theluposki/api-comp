# [C] Create Person
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{  "name": "Eva","lastName": "Elfie","email": "eva@gmail.com","password": "123456789456","cpf": "58963245698"}' \
  http://localhost:3002/persons | json_pp

# [R] List Persons
curl http://localhost:3002/persons | json_pp
### Busca por id
curl http://localhost:3002/persons/6227af302106eb5d1f201ff6 | json_pp

# [U] Atualizar Usuário
curl --header "Content-Type: application/json" \
  --request PUT \
  --data '{  "name": "Lucas","lastName": "Pereira" }' \
  http://localhost:3002/persons/6227afa32106eb5d1f201ff8 | json_pp

# [D] Delete Person
curl -X DELETE  http://localhost:3002/persons/6227bc39e9b60dc25f5978f0 | json_pp
