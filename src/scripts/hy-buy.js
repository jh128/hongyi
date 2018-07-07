const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const buyTpl = require('./views/buy.html')

$('#root').html(indexTpl)
$('.container').html(headerTpl + buyTpl + footerTpl)
