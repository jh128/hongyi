const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const youxuanTpl = require('./views/youxuan.html')


$('#root').html(indexTpl)
$('.container').html(headerTpl + youxuanTpl)

$('.container').append(footerTpl)
