# stash
https://git-scm.com/docs/git-stash

git stash list
git stash save stash-name
git stash drop stash@\{0\}

# show
git stash show  // exibe os aquivos do stash. (stash 0 por padrão)
git stash show stash@{1}  // exibe os arquivos do stash 1.
git stash show -p  // exibe as alterações dos arquivos do stash.


# comparar arquivo com arquivo do stash
# ver alterações do stash
Olhar o arquivo sobre o comando diff.




#### stash arquivo específico
Não achei uma maneira "certa" de fazer
1. Faça checkout dos arquivos que não deseja fazer stash;
1. Jogue os arquivos que sobraram para o stash.