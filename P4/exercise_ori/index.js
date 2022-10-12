import AuthorData from './author_data.js'
let jumlahData = 10
let authorData = new AuthorData(jumlahData)
let show = function() {
    authorData.getData().then(data => {
        authorData.showData(data);
    }).catch(e => console.log(e));
}
show()

$('#btnBackAuthor').on('click', function() {
    let noData = $("#noData").text()
    authorData.getData().then(data => {
        authorData.dataByNo(data, noData, 'back');
    }).catch(e => console.log(e));
})

$('#btnNextAuthor').on('click', function() {
    let noData = $("#noData").text()
    authorData.getData().then(data => {
        authorData.dataByNo(data, noData, 'next');
    }).catch(e => console.log(e));
})