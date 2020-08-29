git tag --help


# Curso


## Criar tag
git tag v1 // cria tag local
git tag -a v1.1 -m "my message"

## Push a tag (mandar a tag para o origin)
git push origin v1.5
git push origin --tags // várias tags de uma vez

## Deletar tag
git tag -d 1.4 // deleta local
git push origin --delete 1.4 // deleta no servidor remoto

git tag -d v1.4 // deleta local
git push origin --delete v1.4 // deleta no servidor remoto
git push origin :refs/tags/v1.4 // deleta no servidor remoto

## Atualizar a Lista de Tags Local (deixar local igual remote)
git fetch --prune --prune-tags // não sei se esse comando faz prune das branchies também, tenho que testar.

## Listar tag
git tag // local
git ls-remote --tags // remoto
git ls-remote --tags origin // remoto


git tag -l "v1.8.5*" // lista as tags locais (v1.8.5 qualquer coisa)

git show v1 // lista a data e os comits da tag.

# Outros Exemplos
checkout de tag, checkout.md




git checkout v1 // faz checkout na tag v1
git checkout <branch_name> // faz checkout para o último commit da branch.


# Exemplos
## Criar uma nova tag para a versão anterior a tag
Supondo que tem os commits
005
004
003
002
001
e que estamos na versão 005
git tag v1 // cria a tag v1 no commit 005
git checkout v1^ // vai fazer o checkout no commit 004
git: (004)  [no terminal]

git tag v1-beta // cria a tag v1-beta no commit 004









# para baixo tenho que organizar

git log // dá para ver as tags aqui tbm.


git tag // lista as tags locais
git ls-remote --tags origin // lista as tags remota

---- deletar tag ---
git tag -d 12345 // deleta a tag local 12345

deletar tag remota (nunca usei)
https://gist.github.com/mobilemind/7883996




fazer
atualizar a lista de tags local com as tags remotahttps://stackoverflow.com/questions/8432953/if-a-git-tag-changes-on-remote-a-git-fetch-does-not-update-it-locally-is-this
