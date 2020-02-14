windows: Na pasta  C:\glassfish-4.1.1\bin abra o terminal como admin.
linux: cd /opt/glassfish-5.0/bin

./asadmin list-domains lista os domínios
./asadmin start-domain inicia o domínio padrão.
./asadmin stop-domain para o domínio padrão.
./asadmin start-domain domainName inicia um domínio específico (domainName)

# Primeira Execução
./asadmin start-domain // vai criar um domínio "domain1" por exemplo
localhost:4848 (admin port)

# Domínios
/opt/glassfish-5.0/glassfish/domains