# [C] Create Person
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{  "name": "Monique Geovana","lastName": "Albuquerque", "nickname":"Nini", "cel":"11973897475", "telephone":"1159268136", "email": "nini@gmail.com","password": "123456789456","cpf": "58963241398"}' \
  http://localhost:3002/persons | json_pp

# [R] List Persons
curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" http://localhost:3002/persons | json_pp
### Busca por id
curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" http://localhost:3002/persons/6227af302106eb5d1f201ff6 | json_pp

# [U] Atualizar Usuário
curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" \
  --request PUT \
  --data '{"name": "Lucas","lastName":"Oliveira", "email": "lu@gmail.com"}' \
  http://localhost:3002/persons/622a44c96b23143d03d2b6e6 | json_pp

# [D] Delete Person
curl -H 'Accept: application/json' -H "Authorization: Bearer ${TOKEN}" -X DELETE  http://localhost:3002/persons/62253c0fa15e469cd19b38e8 | json_pp
