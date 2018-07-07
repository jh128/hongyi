const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const payTpl = require('./views/pay.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl+payTpl)

$('.container').append(footerTpl)