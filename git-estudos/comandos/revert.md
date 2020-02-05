# Cancelar Commit (uncommit, desfazer commit)
git add hello.html
git commit -m "Oops, we didn't want this commit"
git revert HEAD
git revert HEAD --no-edit // generate the output data without opening the editor.

git log - No último commit vai ter uma frase avisando que esse
commit reverte o commit anterior.

Obs: o revert cria um commit que reverte o commit anterior.

Para remover um commit da branch olhe o reset.md