# Cancel Stage Changes (before committing)
## Desfazer alterações (unadd)
git add hello.html
git reset HEAD hello.html   // desfaz o add hello.html mantendo as alterações no arquivo

## "unadd"
git add .
git reset (sem ponto)

## "unadd" specific file
git add myFile
git reset myFile

## Remover o Commit de uma Branch (uncommit - remove da lista de commits)
## Remover aquivos de merge
# Exemplo
//git log
git add myFiles
git commit -m "my message"
//git log
git reset --soft HEAD^	//desfaz o commit e mantém as alterações
git reset --hard HEAD^	//desfaz o commit e destroi as alterações

# Exemplo Usanto Tag
git tag v1
git reset --hard v1 // remove a tag e destroi as alterações (reset local)
git log --all // vai ver os commits feitos depois da v1





# PARA BAIXO TEM QUE ARRUMAR



----- "uncommit"  desfazer commit -----

-----------------

----- voltar push (resetar branch) -----
https://githowto.com/pt-BR/removing_commits_from_a_branch
git log
v2 (HEAD -> master, origin/master, origin/HEAD)
v1

git reset --hard v1

...



Testar reset
https://www.christianengvall.se/git-reset-origin-master-to-commit/
git reset --hard cedc856
git push --force origin master
