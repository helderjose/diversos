git config --help
git config --list

# Setup
## Setting up name and e-mail address
git config --global user.name "Your Name"
git config --global user.email "your_email@whatever.com"

# listar alias 
git config --list | grep alias

# Criar alias
git config --global alias.br branch
git config --global alias.ch checkout
git config --global alias.co commit
git config --global alias.l log
git config --global alias.lg "log --graph"
git config --global alias.pl pull
git config --global alias.ps push
git config --global alias.st status
git config --global alias.stu "status -u"





criei o hist só para acompanhar o curso
git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"

# Exemplo do arquivo gitconfig com alias
~/.gitconfig
[alias]
	st = status
	stu = status -u
	l = log

# Exemplo Executar Comando Criado com Alias
git st ou git stu


# Apagar uma Entrada do .gitconfig file (remover linha do gitconfig file)
Supondo que exista a linha "user.mail" (o correto é user.email), para
deletar execute:
git config --global --unset user.mail
