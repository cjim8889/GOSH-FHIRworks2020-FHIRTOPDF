function getNames(object) {
    return object.name
}

function joinName(name) {
    let familyName = name.family;
    let givenName = name.given.join(' ');
    let prefix = name.prefix.join(' ');

    return prefix + ' ' + givenName + ' ' + familyName;
}

function getId(object) {
    return object.id;
}

function getGender(object) {
    return object.gender;
}

function getBirthday(object) {
    return object.birthDate;
}

function getAddress(object, index) {
    if (object.address.length === 0) return {};

    return {
        line: object.address[index].line,
        city: object.address[index].city,
        state: object.address[index].state,
        postalCode: object.address[index].postalCode,
        country: object.address[index].country
    }
}

function getContacts(object) {
    return object.telecom;
}



const fonts = {
    Courier: {
        normal: 'Courier',
        bold: 'Courier-Bold',
        italics: 'Courier-Oblique',
        bolditalics: 'Courier-BoldOblique'
    },
    Helvetica: {
        normal: 'Helvetica',
        bold: 'Helvetica-Bold',
        italics: 'Helvetica-Oblique',
        bolditalics: 'Helvetica-BoldOblique'
    },
    Times: {
        normal: 'Times-Roman',
        bold: 'Times-Bold',
        italics: 'Times-Italic',
        bolditalics: 'Times-BoldItalic'
    },
    Symbol: {
        normal: 'Symbol'
    },
    ZapfDingbats: {
        normal: 'ZapfDingbats'
    },
    Fontello: {
        normal: 'fontello.ttf',
        bold: 'fontello.ttf',
        italics: 'fontello.ttf',
        bolditalics: 'fontello.ttf'
    }
};

module.exports = {
    getAddress: getAddress,
    fonts: fonts,
    getId: getId,
    getGender: getGender,
    getBirthday: getBirthday,
    getAddress: getAddress,
    getNames: getNames,
    getContacts: getContacts,
    joinName: joinName
}
