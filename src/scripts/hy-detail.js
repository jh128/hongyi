const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const detailTpl = require('./views/detail.html')

// console.log(findpwdTpl)
$('#root').html(indexTpl)
$('.container').html(headerTpl+detailTpl)

$('.container').append(footerTpl)