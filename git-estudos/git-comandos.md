

# Table of content
- [checkout](#checkout)
- [status](#status)
- [pull](#pull)
- [tag](#tag)






# Checkout <a name="checkout"></a>
Se a branch não aparecer na lista use git fetch.
git fetch
git checkout develop



# status <a name="status"></a>
https://git-scm.com/docs/git-status

git status --help
git status
git status -u	//Show untracked files.



# stash
https://git-scm.com/docs/git-stash

git stash list
git stash show
git stash save stash-name
git stash drop stash@\{0\}

#### stash arquivo específico
Não achei uma maneira "certa" de fazer
1. Faça checkout dos arquivos que não deseja fazer stash;
1. Jogue os arquivos que sobraram para o stash.


# stage
https://softwareengineering.stackexchange.com/questions/119782/what-does-stage-mean-in-git



# remote
Atualizar lista de branch
Update the local list of remote branches:
git remote update origin --prune

git remote prune origin  // mesmo efeito



# pull <a name="pull"></a>

Command | comment
-----|--------
git pull origin develop | atualiza a branch que estou com a branch develop da origin

# tag <a name="tag"></a>
Pode ser feito pelo git lab.

Por comando:
https://git-scm.com/book/en/v2/Git-Basics-Tagging
