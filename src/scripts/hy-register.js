const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const registerTpl = require('./views/register.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl+registerTpl)

$('.container').append(footerTpl)
