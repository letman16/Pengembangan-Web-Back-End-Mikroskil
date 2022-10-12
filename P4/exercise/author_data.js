class AuthorData {
    constructor() {
        this.urlData();
    }

    urlData() {
        this.data = 'https://picsum.photos/v2/list'
    }

    async getDataByNo(no) {
        let response = await fetch(this.data + '?page=' + no + '&limit=1&blur=1');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }


    showDataByNo(obj, noData) {

        $("#imgAuthor").attr('src', obj[0]['download_url'])

        var loaded = 0;
        $('#imgAuthor').on('load', function() {
            loaded++;
            if (loaded == $('#imgAuthor').length) {
                $("#noData").text(noData)
                $("#idAuthor").text(obj[0]['id']);
                $("#nameAuthor").text(obj[0]['author']);

                $("#linkDownloadAuthor").attr('href', obj[0]['download_url']);
                $("#imgAuthor").attr('title', obj[0]['author']);
                if (noData > 1) {
                    $("#btnBackAuthor").attr('disabled', false)
                } else {
                    $("#btnBackAuthor").attr('disabled', true)
                }

            }
        })

    }
}
export default AuthorData;