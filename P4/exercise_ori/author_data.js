class AuthorData {
    constructor(jumlahData) {
        this.urlData();
        this.jumlahData = jumlahData
    }

    urlData() {
        this.data = 'https://picsum.photos/v2/list/'
    }
    async getData() {
        let response = await fetch(this.data + '?limit=' + this.jumlahData);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    showData(obj) {
        $("#noData").text(0)
        $("#nameAuthor").text(obj[0]['author']);
        $("#imgAuthor").attr('src', obj[0]['download_url'])
        $("#btnBackAuthor").attr('disabled', true)

        if (obj.length <= 1) {
            $("#btnNextAuthor").attr('disabled', true)
        }
    }

    dataByNo(obj, noData, type) {
        if (type == "back") {
            noData = parseInt(noData) - 1
        } else if (type == "next") {
            noData = parseInt(noData) + 1
        }

        $("#imgAuthor").attr('src', obj[noData]['download_url'])

        var loaded = 0;
        $('#imgAuthor').on('load', function() {
            loaded++;
            if (loaded == $('#imgAuthor').length) {
                $("#noData").text(noData)
                $("#nameAuthor").text(obj[noData]['author']);

                if ((noData + 1) <= 1) {
                    $("#btnBackAuthor").attr('disabled', true)
                } else {
                    $("#btnBackAuthor").attr('disabled', false)
                }

                if ((noData + 1) >= obj.length) {
                    $("#btnNextAuthor").attr('disabled', true)
                } else {
                    $("#btnNextAuthor").attr('disabled', false)
                }
            }
        });
    }
}
export default AuthorData;