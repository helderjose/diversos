# Tutoriais Exemplos
## Clonar um Projeto git
Supondo que a pasta "hello" seja um projeto git.
$ pwd
.../git-testes/hello
$ cd git-testes
$ ls
hello

$ git clone hello cloned_hello
$ ls
cloned_hello
hello

$ cd cloned_hello
git log --all // exibe todos os commits até o momento



## Puxar as alterações do projeto original para o projeto clonado
$ cd cloned_project
git fetch
git hist --all

Note: At the moment the repository contains all the commits from the original repo, however
they aren’t integrated into the local branches of the cloned repository.

You’ll find the commit named “Changed README in original repo” in the history. Notice that the commit includes “origin/master” and “origin/HEAD”.

Now let’s take a look at the “Updated index.html” commit. You’ll see that the local master branch points to this very commit, not the new commit we’ve just fetched.

This brings us to the conclusion that the “git fetch” command will fetch new commits from the remote repo, but won’t merge them into the local branches.

git merge origin/master


## Bare repos
Bare repos (without working directories) are typically needed for sharing.
git clone --bare hello hello.git
ls hello.git

git remote add shared ../hello.git
