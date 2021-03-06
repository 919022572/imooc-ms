// 工具函数?

export default {
    // 拼凑时间格式
    formateDate(stamp) {
        let myDate = new Date(stamp);
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        let date = myDate.getDate();
        let hours = myDate.getHours();
        let minutes = myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes();
        let seconds = myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds();

        return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':'
            + seconds;

    },

    // 分页
    pagination(data, callback) {
        return {
            onChange: (current) => {
                callback(current)
            },
            current: data.page,
            pageSize: data.page_size,
            total: data.total,
            showTotal: () => {
                return `共${data.total}条`
            },
            showQuickJumper: true
        }
    }

}