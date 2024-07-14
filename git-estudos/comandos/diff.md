





# diff e difftool

# comparar arquivo local com remoto
git difftool branchA file.css

git difftool origin PATH-TO-FILE  // compara o arquivo remoto com o local. OBS: Se os arquivos estiverem iguais não acontece nada.
git difftool origin PATH-TO-FILE PATH-TO-FILE   // mesmo resultado do comando anterior

git difftool PATH-TO-FILE  // que compara o arquivo comitado "local" com o arquivo que estou editando (local).
git difftool PATH-TO-FILE PATH-TO-FILE   // mesmo resultado do comando anterior

TODO: comparar arquivo da origin com o comitado (local)

# git difftool - comparar versões de um arquivo específico
git difftool 38f36f984dc3e91a39a8ad06781b2404caacad21:accweb-app/src/app/components/profile/profile.component.ts e2dac597c9612281acf9f6e838fe1b58ba2a89d3:accweb-app/src/app/components/profile/profile.component.ts

obs: na segunda versão o autocomplete não funciona.

# comparar o arquivo de um commit com o local
git difftool 11f58d1 net-uno/app/pages/wifi-password/components/wifi-table.vue    // compara o arquivo do commit especificado com o arquivo atual (local).



# comparar arquivos de branchs diferentes
git difftool branchA:general.css branchB:general.css
git difftool branchA:general.css ./general.css		//acho que compara com o local

estou na branchA
git difftool branchB meu-projeto/meu-arquivo.txt (compara o arquivo da branchB com o da branchA)


# comparar arquivo da branch com o do stash
git difftool stash@{1} my-file.css     // my-file.css do stash com my-file.css atual
gdt develop stash@{0} myFile.css     //  compara myFile.css da develop com o do stash 0






último
bf0669e091ea9b2bccb6c965f0279424f3ea5303

tag
11f58d1cd4aed5c4ab11099d916e0e76a6dff1ff (tag: 2.0.1)


# organizar
diff com stash
https://stackoverflow.com/questions/7677736/git-diff-against-a-stash

