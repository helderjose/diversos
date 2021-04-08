https://johnresig.com/blog/xpath-css-selectors/


# class
pegar por classe
obs: só pega se tiver só uma classe
productsLi = $x("//div[@class='check-component']");

<div class="modal btn-box">
Não pega se colococar só uma das classes, tem que colocar todas
$x("//div[@class='modal btn-box']");

Quando tiver mais de uma classe e quiser procurar só por uma, use
contains com @class, olhar a sessão "contains com class"

# contains
## contains com class
paga pegar usando apenas uma classe faça o seguinte
$x("//div[contains(@class,'modal')]")

# text e innerText
$x("//a[text()='Preciso de ajuda']");  // não consegui usar innerText, obs: é case sensitive

$x("//a[contains(text(),'ciso de ajuda')]");  // substring. é case sensitive

# not - negação
$x("//div[@id='schedule-vt']//div[contains(@class, 'schedule-vt__schedule') and not(contains(@style, 'display: none'))]//button")

# and
$x("//div[@id='schedule-vt']//div[contains(@class, 'schedule-vt__schedule') and not(contains(@style, 'display: none'))]//button")

# or
$x("//div[@id='vt-type-selection']//*[@class='option' or @type='button']")

# qualquer elemento
//*[contains(@class, 'Test')]




# Organizar

Pegar elementos html
Execute no console do navegador

$x("//script[@type='text/javascript']")  //pega todas as tags javascript

Pegar por id
$x("//div[@id='welcome']")
$x("//div[@id='product-selection']")

pega os buttons que está dentro do div welcome
$x("//div[@id='welcome']//button")

pega os buttons que estão em qualquer div com class action__buttons que está dentro do id issue-selection.
$x("//div[@id='issue-selection']//div[@class='action__buttons']//button")





# text
$x("//div[contains(@class,'modal_box')]//p[contains(@class, 'text__highlight')]")
$x("//div[contains(@class,'modal_box')]//p[contains(@class, 'text__highlight')]")[0].textContent
$x("//div[contains(@class,'modal_box')]//p[contains(@class, 'text__highlight')]//text()")

$x("//div[contains(@class,'modal_box')]//p[contains(text(), 'verifique as pilhas')]")

Pegar por type
$x("//button[@type='button']")

"Vamos Lá! "

Pegar por text/innerText
$x("//button[text()='Vamos lá!']")  // obs: cuidado com texto formatado por css, ex: text-transform: capitalize;




$x("//button[@innerText='Vamos Lá! ']").length
$x("//button[text='Vamos Lá! ']").length


$x("")
$x("//button[@type='button']").length
$x("//button")  // todos os buttons
$x("//button[@text='Vamos Lá!']").length
$x("//button[@innerText='Vamos Lá!']").length
$x("//button[text()='Vamos Lá!']").length
$x("//button[text='Vamos Lá!']").length

$x("//button" and [text() = 'Vamos Lá!'])
$x("//button[@type='button' and text()='Vamos Lá!']")



# position
pegar um elemento do array de elementos
$x("//label[@for='mcr-list-radio-400508959']")    // retorna um array com vários elementos
$x("//label[@for='mcr-list-radio-400508959'][position()=1]")  // primeiro elemento do array
$x("//label[@for='mcr-list-radio-400508959'][position()=2]")  // segundo elemento do array
