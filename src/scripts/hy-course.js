const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const courseTpl = require('./views/course.html')

$('#root').html(indexTpl)
$('.container').html(headerTpl + courseTpl + footerTpl)
