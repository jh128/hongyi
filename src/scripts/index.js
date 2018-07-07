const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const homeTpl = require('./views/home.html')

$('#root').html(indexTpl)
$('.container').html(headerTpl+homeTpl+footerTpl)



