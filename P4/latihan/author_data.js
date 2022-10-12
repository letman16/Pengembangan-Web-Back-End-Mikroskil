class AuthorData {
    constructor() {
        this.getDataList();
    }

    getDataList() {
        this.data = 'https://picsum.photos/v2/list'
    }
    async getProfile() {
        let response = await fetch(this.data);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }
    showProfile(obj) {
        let dataDiv = $('#data')
        obj.forEach((result) => {
            dataDiv.html(dataDiv.html() +
                `<tr>
                <td>
                    <img src="${result.download_url}" width=50 height=50>
                </td>
                <td>${result.author}</td>
            </tr>
            `)
        })
    }
}
export default AuthorData;