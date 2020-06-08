

# Criar Branch
git checkout -b new_branch_name // cria a branch local
git push -u origin new_branch_name // faz push da branch nova no server remoto

Note: git checkout -b <branch name> is the shortcuts for git branch <branch name> followed by a git checkout <branch name>.

# Mudar de branch
git chekcout <BRANCH_NAME>

# Mudar para um commit específico
git checkout <hash>
git checkout 911e8c9
 Voltar para a última versão
 git checkout branch_name
 git checkout master

# Mudar para uma tag
git checkout v1

# Criar Branch a Partir da Tag
git checkout 2.0.0
git checkout -b version2 v2.0.0




# checkout arquivo outra branch
Trazer conteúdo de um arquivo de uma branch para outra.
Lembre-se que checkout vai eliminar as alterações no arquivo local.
git checkout branchName -- filePath/fileName
Exemplos:
git checkout chat -- src/app/app.scss  [faz checkout do arquivo app.scss da branch chat para branch que estou trabalhando]
git checkout chat -- src/pages/timeline/timeline.html [faz checkout do arquivo timeline.html da branch chat para branch que estou trabalhando]


# Accept their in conflict
https://stackoverflow.com/questions/10697463/resolve-git-merge-conflicts-in-favor-of-their-changes-during-a-pull