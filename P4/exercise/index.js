import AuthorData from './author_data.js'
let authorData = new AuthorData()
let show = function() {
    $("#noData").text(1)
    $("#btnBackAuthor").attr('disabled', true)
    authorData.getDataByNo(1).then(data => {
        authorData.showDataByNo(data);
    }).catch(e => console.log(e));
}
show()

$('#btnBackAuthor').on('click', function() {
    let noData = parseInt($("#noData").text()) - 1
    authorData.getDataByNo(noData).then(data => {
        authorData.showDataByNo(data, noData);
    }).catch(e => console.log(e));
})

$('#btnNextAuthor').on('click', function() {
    let noData = parseInt($("#noData").text()) + 1
    authorData.getDataByNo(noData).then(data => {
        authorData.showDataByNo(data, noData);
    }).catch(e => console.log(e));
})