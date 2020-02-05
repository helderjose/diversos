Command | comment
-----|--------
git branch    |	 list local branches
git branch -a |	List both remote-tracking branches and local branches. (-a ou -all)
git branch -r |	List or delete (if used with -d) the remote-tracking branches.

# Criar branch
git branch branchName	//cria a branch (a partir da branch atual)
git checkout branchName	//muda para a branch criada

git checkout -b branchName //cria a branch e já faz checkout nela

---------- push a new local branch to a remote Git repository and track it too ----------
git checkout -b branchName    //cria a branch e já muda para ela.
git push -u origin branchName     //faz push da branch

# Deletar branch
Deleting local branch
git branch -d branch-name-1 branch-name-2
git branch -D branchName  //force

Deleting remote branch
git push origin --delete branchName

# renomear branch
Fazer os três passoa abaixo.
1 - Rename your local branch. If you are on the branch you want to rename:
git branch -m new-name

If you are on a different branch:
git branch -m old-name new-name

2 - Delete the old-name remote branch and push the new-name local branch.
git push origin :old-name new-name

3 - Reset the upstream branch for the new-name local branch. Switch to the branch and then:
git push origin -u new-name


# Tutoriais Exemplos
## Adding a tracking branch
### Add a local branch tracking the remote branch.
Branches that start with remotes/origin belong to the the original repository. Note
that you don’t have a style branch anymore, but it knows that it was in the original repository.

nome da branch: style
git branch --track style origin/style
git branch -a
git hist --max-count=2