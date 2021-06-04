import http.client

for a in range(100):
  connection = http.client.HTTPSConnection("localhost:30002")
  connection.request("GET", "/match?type=select_ingredients")
  response = connection.getresponse()
  ans = 'Test ' + str(a) + ' response ' + str(response.status)
  print(ans)
