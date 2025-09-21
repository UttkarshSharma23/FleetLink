const moment = require('moment');

const formatDate = (date) => {
    return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

const parseDate = (dateString) => {
    return moment(dateString, 'YYYY-MM-DD HH:mm:ss').toDate();
};

const isDateInFuture = (date) => {
    return moment(date).isAfter(moment());
};

module.exports = {
    formatDate,
    parseDate,
    isDateInFuture,
};