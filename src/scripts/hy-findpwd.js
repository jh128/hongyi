const indexTpl = require('./views/index.html')
const headerTpl = require('./views/header.html')
const footerTpl = require('./views/footer.html')
const findpwdTpl = require('./views/findpwd.html')

// console.log(findpwdTpl)
$('#root').html(indexTpl)
$('.container').html(headerTpl+findpwdTpl)

$('.container').append(footerTpl)