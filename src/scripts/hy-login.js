const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const loginTpl = require('./views/login.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl+loginTpl)

$('.container').append(footerTpl)