https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/best-practices

# .git directory
ls -C .git

# Object Database
ls -C .git/objects

You should see a lot of folders named with two characters. The
first two letters sha1 hash of the object stored in git are the directory names.

# Inquire the database objects
ls -C .git/objects/<dir>

# Config File
cat .git/config

# Branches and tags
ls .git/refs
ls .git/refs/heads
ls .git/refs/tags
cat .git/refs/tags/v1

# HEAD File
cat .git/HEAD



Existe as seguintes versões de arquivo
origin (remote)
quando dou commit (local)
arquivo que estou editando (local)

https://githowto.com/mutliple_repositories



# Pulling and Merging Changes
To learn that git pull command is identical to git fetch plus git merge.

"git pull" is actually equivalent to the following two steps:
git fetch
git merge origin/master

