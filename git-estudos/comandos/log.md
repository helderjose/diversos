file history
https://www.shellhacks.com/git-particular-file-change-history/

# Início
git log --help

# Básico
git log --name-status // nome arquivo e status

# Exibir Todos os Commits (quando está em um commit anterior ao atual)
git log --all
git log <branch_name> --all // mostra os comits de outas branches (que está à frente)

# Usuário Específico
git log --author=helder

# Other tools
Both gitx (for Mac) and gitk (for any platform) can help to explore log history.

# Colors
git log --pretty=format:"%Credred%Creset %Cgreengreen%Creset %C(Yellow)yellow%Creset %Cblueblue%Creset %C(magenta)magenta%Creset %C(cyan)cyan%Creset %C(white)white%Creset"


# pretty
git log --help | grep pretty
git log --pretty=oneline // hash e mensagem

git log --pretty=oneline --max-count=2
git log --pretty=oneline --since='5 minutes ago'
git log --pretty=oneline --until='5 minutes ago'
git log --pretty=oneline --author=<your name>
git log --pretty=oneline --all

# log de um arquivo específico
git log -- <file>

# log de arquivo específico com diffs para cada mudança
git log -p -- <file>
git log -p -- <commit-number>


# Show the entire history of a file (including history beyond renames):
git log --follow -p -- <file>

# Log em uma linha
## uma semana
git log --all --pretty=format:"%h %cd %s (%an)" --since='7 days ago'
## uma semana com autor
git log --all --pretty=format:"%h %cd %s (%an)" --author=helder

# Parâmetros do git log
--all exibe os commits de todas as branchies (se sua branch estiver atrás).
--graph exibe gráfico de commits em caracteres ASCII.
--author=helder filtra commits pelo autor
--grep filtrar commits pela descrição ou título
--grep="tag" filtra commits que tem a palavra "tag" na mensagem ou no título
--grep="texto para procurar" -i ignore case



# ORGANIZAR
git log --name-only  //mostra o path do arquivo alterado
git log --name-status //mostra o path e o status do arquivo alterado.
git log --stat //mostra o path e um diffstat do arquivo alterado.

-- file ---
git log -- file

-- author --
https://stackoverflow.com/questions/4259996/how-can-i-view-a-git-log-of-just-one-users-commits
git log --author="user name"  //precisa de "" se usar espaço


https://devhints.io/git-log



##  TESTES
git log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short

--pretty="..." defines the output format.
%h is the abbreviated hash of the commit
%d commit decorations (e.g. branch heads or tags)
%ad is the commit date
%s is the comment
%an is the name of the author
--graph tells git to display the commit tree in the form of an ASCII graph layout
--date=short keeps the date format short and nice


git log --pretty=format:""
git log --pretty=format:"%h %ad | %n %d" --date=short

git log --pretty=format:"%C(Yellow)commit %h -  %H %C(reset) %n%C(auto)%d %C(reset) %nAuthor: %an <%ae> %nDate: %ad %n%n %B %n" --name-status
git log --pretty=format:"%C(Yellow)commit %h -  %H %C(reset) %n%C(auto)%d %C(reset) %nAuthor: %an <%ae> %nDate: %ad %n%n %B %n" --name-status

git log --pretty=format:"%d %n"
git log --pretty=format:"%C(auto)%d %C(reset) %n"

git log --pretty=format:"%f %n"
git log --pretty=format:"%b %n"
git log --pretty=format:"%B %n"




git log --pretty=format:"%C(auto)%B%C(reset) %n"
git log --pretty=format:"%N %n"

Quebra de linha %n



tentando reproduzir essa formação

git log --pretty=format:" %s      %n%w(100,10,10)%b %n------------------------"
git log --pretty=format:'%>(20)%b' -10
git log --pretty=format:'%<(20)%b' -10
git log --pretty=format:'%<(20)%b'
git log --pretty=format:'%>(20)%b'
git log --pretty=format:'%>(20)%b'
git log --pretty=format:'%>>(20)%b'
git log --pretty=format:'%>>(20)%b'
git log --pretty=format:'%b'

git log --pretty=format:'%h %<(20,trunc)%an %<(39,trunc)%s' -10

commit 4980f1bbab2a094110908c2d99c5bfb958622b06 (HEAD -> develop, tag: 3.1.9, origin/master, origin/develop, origin/HEAD, master)
Merge: 5fe754e d36669a
Author: Ester Tieme Akamine Terpilauskas <ester.akamine@accurate.com.br​>
Date:   Wed Oct 30 18:52:46 2019 +0000

    Merge branch 'bugfix/WNT-1164' into 'develop'

    Resolve WNT-1164 "Bugfix/"

    See merge request ecare-net-front/tecnica/diagnostic!17

commit d36669a9e4f3e5b80d5638d1374727e240372156 (origin/bugfix/WNT-1164, bugfix/WNT-1164)
Author: Helder Jose Melo <helderjosemelo@gmail.com>
Date:   Wed Oct 30 15:28:30 2019 -0300

    #WNT-1164 build prod
