const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const paySuccTpl = require('./views/paysucc.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl+paySuccTpl)

$('.container').append(footerTpl)