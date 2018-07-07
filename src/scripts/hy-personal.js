const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const personalTpl = require('./views/personal.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl+personalTpl)

$('.container').append(footerTpl)
