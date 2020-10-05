git config --help
git config --list

# Setup
## Setting up name and e-mail address
git config --global user.name "Your Name"
git config --global user.email "your_email@whatever.com"

## Configurar meld no git difftool
Execute: which meld
Se não encontrar o meld, instale pelo terminal, possível saída do whit meld é /usr/bin/meld.

git config --global diff.tool meld
git config --global merge.tool meld

Exemplo do arquivo .gitconfig após executar os comando:
[diff]
	external = meld
	tool = meld

[merge]
    tool = meld


# listar alias
git config --list | grep alias

# Criar alias
obs: não uso assim, uso alias no sistema operacional.

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

# Set User
Configurar usuários
https://smarterco.de/set-the-username-and-email-in-git-globally-and-per-project/


configurar usuário e senha https
https://git-scm.com/docs/gitcredentials
https://unix.stackexchange.com/questions/335704/how-to-set-up-username-and-passwords-for-different-git-repos
