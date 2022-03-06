# [C] Create Person
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{  "name": "Tomas","lastName": "Shelby","email": "thomas_shelby@gmail.com","password": "123456789456","cpf": "58963245698"}' \
  http://localhost:3001/persons

# [R] List Persons
curl http://localhost:3001/persons

# [U] Atualizar Usuário

# [D] Delete Person
curl -X DELETE  http://localhost:3002/persons/62253abfa15e469cd19b38e3 
