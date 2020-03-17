const utilities = require('./utilities');
const pdfmake = require('pdfmake');

pdfmake.PdfPrinter
const printer = new pdfmake(utilities.fonts);
const fs = require('fs');
const textMargin = [0, 0, 0, 2];
const titleMargin = [0, 3, 0, 3]
const observationMargin = [0, 1, 0, 3]
const mediumText = 16;
const largeText = 24;
const mediumLText = 20;

function makeFromJson(object) {
    console.log(object.observations.length);
    let names = object.name;
    let id = utilities.getId(object);
    let currentTime = new Date().toLocaleString();

    let docDefinition = {
        header: {
            columns: [
                {
                    text: id,
                    alignment: 'left'
                }, 
                {
                    text: currentTime,
                    alignment: 'right'
                }
            ]
        },
        content: [
            {
                svg: '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" version="1.1" id="svg3713" xml:space="preserve" width="464" height="256.18799" viewBox="0 0 464 256.18799" sodipodi:docname="LOGO_FHIR.svg" inkscape:version="0.92.3 (2405546, 2018-03-11)"><metadata id="metadata3719"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs3717"><clipPath clipPathUnits="userSpaceOnUse" id="clipPath3739"><path d="M 0,192.141 H 348 V 0 H 0 Z" id="path3737" inkscape:connector-curvature="0" /></clipPath><linearGradient x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,96.488708,96.488708,0,125.48389,45.625977)" spreadMethod="pad" id="linearGradient3769"><stop style="stop-opacity:1;stop-color:#ffffff" offset="0" id="stop3757" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.14691298" id="stop3759" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.24176" id="stop3761" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.32395483" id="stop3763" /><stop style="stop-opacity:1;stop-color:#de1119" offset="0.62088" id="stop3765" /><stop style="stop-opacity:1;stop-color:#e20e18" offset="1" id="stop3767" /></linearGradient><linearGradient x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,73.195084,73.195084,0,113.03027,59.769531)" spreadMethod="pad" id="linearGradient3797"><stop style="stop-opacity:1;stop-color:#ffffff" offset="0" id="stop3785" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.14691298" id="stop3787" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.24176" id="stop3789" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.32395483" id="stop3791" /><stop style="stop-opacity:1;stop-color:#de1119" offset="0.62088" id="stop3793" /><stop style="stop-opacity:1;stop-color:#e20e18" offset="1" id="stop3795" /></linearGradient><linearGradient x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,101.06357,101.06357,0,142.04932,45.625977)" spreadMethod="pad" id="linearGradient3825"><stop style="stop-opacity:1;stop-color:#ffffff" offset="0" id="stop3813" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.14691298" id="stop3815" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.24176" id="stop3817" /><stop style="stop-opacity:1;stop-color:#ffe100" offset="0.32395483" id="stop3819" /><stop style="stop-opacity:1;stop-color:#de1119" offset="0.62088" id="stop3821" /><stop style="stop-opacity:1;stop-color:#e20e18" offset="1" id="stop3823" /></linearGradient><linearGradient x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,44.983856,44.983856,0,137.07715,63.583008)" spreadMethod="pad" id="linearGradient3851"><stop style="stop-opacity:1;stop-color:#fffced" offset="0" id="stop3841" /><stop style="stop-opacity:1;stop-color:#fffced" offset="0.01048812" id="stop3843" /><stop style="stop-opacity:1;stop-color:#ffe300" offset="0.752747" id="stop3845" /><stop style="stop-opacity:1;stop-color:#ffe300" offset="0.90558106" id="stop3847" /><stop style="stop-opacity:1;stop-color:#ec7503" offset="1" id="stop3849" /></linearGradient><linearGradient x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,99.193008,99.193008,0,125.81885,70.800781)" spreadMethod="pad" id="linearGradient3879"><stop style="stop-opacity:1;stop-color:#ffffff" offset="0" id="stop3867" /><stop style="stop-opacity:1;stop-color:#ffe300" offset="0.14691298" id="stop3869" /><stop style="stop-opacity:1;stop-color:#ffe300" offset="0.24176" id="stop3871" /><stop style="stop-opacity:1;stop-color:#ffe300" offset="0.32395483" id="stop3873" /><stop style="stop-opacity:1;stop-color:#de1119" offset="0.62088" id="stop3875" /><stop style="stop-opacity:1;stop-color:#e20e18" offset="1" id="stop3877" /></linearGradient><linearGradient x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0,68.228088,68.228088,0,128.14209,69.006836)" spreadMethod="pad" id="linearGradient3905"><stop style="stop-opacity:1;stop-color:#fffced" offset="0" id="stop3895" /><stop style="stop-opacity:1;stop-color:#fffced" offset="0.009646" id="stop3897" /><stop style="stop-opacity:1;stop-color:#ffe300" offset="0.692307" id="stop3899" /><stop style="stop-opacity:1;stop-color:#f49800" offset="0.94858115" id="stop3901" /><stop style="stop-opacity:1;stop-color:#f49800" offset="1" id="stop3903" /></linearGradient></defs><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1017" id="namedview3715" showgrid="false" inkscape:zoom="3.3100693" inkscape:cx="232" inkscape:cy="128.09399" inkscape:window-x="2558" inkscape:window-y="10" inkscape:window-maximized="1" inkscape:current-layer="g3721" /><g id="g3721" inkscape:groupmode="layer" inkscape:label="LOGO_FHIR" transform="matrix(1.3333333,0,0,-1.3333333,0,256.188)"><g id="g3723" transform="translate(168.6572,102.5742)"><path d="M 0,0 H 14.843 V -2.684 H 3.085 v -11.131 h 11.222 v -2.683 H 3.085 V -31.207 H 0 Z" style="fill:#e30613;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path3725" inkscape:connector-curvature="0" /></g><g id="g3727" transform="translate(188.9995,102.5742)"><path d="M 0,0 H 3.085 V -13.815 H 18.868 V 0 h 3.084 v -31.207 h -3.084 v 14.709 H 3.085 V -31.207 H 0 Z" style="fill:#e30613;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path3729" inkscape:connector-curvature="0" /></g><path d="m 218.33,102.574 h 3.084 V 71.367 h -3.084 z" style="fill:#e30613;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path3731" inkscape:connector-curvature="0" /><g id="g3733"><g id="g3735" clip-path="url(#clipPath3739)"><g id="g3741" transform="translate(231.832,88.7588)"><path d="m 0,0 h 3.264 c 3.621,0 7.779,1.386 7.779,5.723 0,5.096 -3.623,5.409 -7.869,5.409 H 0 Z m -3.086,13.815 h 8.047 c 5.545,0 9.166,-2.37 9.166,-8.092 0,-4.025 -3.084,-6.706 -6.93,-7.199 v -0.089 c 2.504,-0.313 3.041,-1.655 4.024,-3.755 l 5.32,-12.072 H 13.143 L 8.627,-6.841 C 6.84,-2.817 5.498,-2.683 2.547,-2.683 H 0 v -14.709 h -3.086 z" style="fill:#e30613;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path3743" inkscape:connector-curvature="0" /></g></g></g><g id="g3745"><g id="g3747"><g id="g3753"><g id="g3755"><path d="m 121.867,118.421 c -8.642,-10.166 -12.2,-20.587 -12.71,-26.434 v 0 C 108.141,73.18 122.121,66.064 127.458,62.25 v 0 c -4.067,3.05 -6.862,14.657 -2.033,25.841 v 0 c 4.829,11.183 14.656,17.79 16.266,32.363 v 0 c 1.525,14.487 -7.624,29.23 -7.624,29.23 v 0 c 2.033,-17.029 -3.559,-21.096 -12.2,-31.263" style="fill:url(#linearGradient3769);stroke:none" id="path3771" inkscape:connector-curvature="0" /></g></g></g></g><g id="g3773"><g id="g3775"><g id="g3781"><g id="g3783"><path d="m 111.7,115.201 c -8.011,-7.12 -11.353,-16.435 -10.844,-22.535 v 0 c 0.507,-13.894 13.555,-23.045 13.555,-23.045 v 0 c -5.93,7.117 -9.658,17.961 -7.794,28.467 v 0 c 1.864,10.505 13.386,22.705 18.639,28.975 v 0 c -1.864,-2.034 -4.406,-3.729 -13.556,-11.862" style="fill:url(#linearGradient3797);stroke:none" id="path3799" inkscape:connector-curvature="0" /></g></g></g></g><g id="g3801"><g id="g3803"><g id="g3809"><g id="g3811"><path d="M 140.845,106.222 C 137.456,98.426 130.339,89.954 128.306,86.058 v 0 c -5.931,-12.878 2.202,-24.739 2.202,-24.739 v 0 c 22.367,1.017 26.602,18.469 27.45,27.787 v 0 c -1.695,-4.573 -6.1,-8.809 -9.15,-10.675 v 0 c 9.659,16.776 1.187,38.465 -4.066,45.752 v 0 c 0.169,-5.423 -0.509,-10.166 -3.897,-17.961" style="fill:url(#linearGradient3825);stroke:none" id="path3827" inkscape:connector-curvature="0" /></g></g></g></g><g id="g3829"><g id="g3831"><g id="g3837"><g id="g3839"><path d="m 132.033,81.652 c -5.854,-9.199 -0.677,-18.468 -0.677,-18.468 v 0 c 8.641,1.523 11.861,6.098 13.555,9.657 v 0 c -2.542,-1.694 -4.406,-2.712 -7.455,-3.22 v 0 c 7.286,9.489 7.625,20.673 7.116,29.145 v 0 c -2.881,-8.133 -7.795,-9.66 -12.539,-17.114" style="fill:url(#linearGradient3851);stroke:none" id="path3853" inkscape:connector-curvature="0" /></g></g></g></g><g id="g3855"><g id="g3857"><g id="g3863"><g id="g3865"><path d="m 118.478,101.307 c -10.337,-17.114 4.365,-33.785 4.365,-33.785 v 0 c -4.745,8.98 -3.057,21.702 4.218,31.16 v 0 c 11.085,14.41 9.73,20.754 9.73,33.686 v 0 c -2.031,-17.92 -11.197,-18.691 -18.313,-31.061" style="fill:url(#linearGradient3879);stroke:none" id="path3881" inkscape:connector-curvature="0" /></g></g></g></g><g id="g3883"><g id="g3885"><g id="g3891"><g id="g3893"><path d="m 118.17,102.925 c -8.225,-16.235 -0.853,-29.974 6.771,-37.862 v 0 c -18.799,22.677 -1.084,41.264 7.887,53.768 v 0 c 12.358,17.222 8.234,29.218 8.234,29.218 v 0 c 2.809,-20.804 -15.398,-30.335 -22.892,-45.124" style="fill:url(#linearGradient3905);stroke:none" id="path3907" inkscape:connector-curvature="0" /></g></g></g></g><text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:30px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.75" x="150.45003" y="-118.95522" id="text4716" transform="scale(1,-1)"><tspan sodipodi:role="line" id="tspan4714" x="150.45003" y="-118.95522" style="fill:#66666f;fill-opacity:0.94117647;stroke-width:0.75">®</tspan></text> </g></svg>',
                fit: [150, 100],
                alignment: 'center'
            },
            {
                qr: id,
                fit: 100,
                alignment: 'center',
                margin: [0, 0, 0, 10]
            },
            {
                svg: '<svg version="1.1" id="line_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1200px" height="5px" xml:space="preserve"> <path class="path2" fill="#000000" stroke-width="3" stroke="#000000" d="M0 0 l1120 0"/> </svg>',
                fit: [1000, 10],
                alignment: 'center',
                margin: [0, 0, 0, 10]
            }
        ],
        styles: {
            icon: { 
                font: 'Fontello'
            }
        },
        defaultStyle: {
            font: 'Helvetica',
        }
    };

    names.forEach(element => {
        docDefinition.content.push({
            text: utilities.joinName(element) + ` (${element.use})`,
            fontSize: mediumLText,
            margin: textMargin
        })
    });

    docDefinition.content.push({
        text: "General Information",
        fontSize: largeText,
        margin: titleMargin
    })

    let personal = [];

    personal.push(`Gender: ${object.gender.charAt(0).toUpperCase() + object.gender.slice(1)}`)
    personal.push(`Birthdate: ${object.birthDate.charAt(0).toUpperCase() + object.birthDate.slice(1)}`)
    personal.push(`Marital Status: ${object.maritalStatus.text}`);

    docDefinition.content.push({
        ul: personal,
        fontSize: mediumText,
        margin: textMargin
    })

    docDefinition.content.push({
        text: "Contact Information",
        fontSize: largeText,
        margin: titleMargin
    })

    let contacts = [];
    object.telecom.forEach(element => {
        let line = `${element.system.charAt(0).toUpperCase() + element.system.slice(1)}: ${element.value} (${element.use})`;
        contacts.push(line);
    });

    object.address.forEach(element => {
        let line = 'Address: ' + element.line.join(' ');
        line += `, ${element.city}, ${element.state}, ${element.postalCode}, ${element.country}`;

        contacts.push(line);
    });

    docDefinition.content.push({
        ul: contacts,
        fontSize: mediumText,
        margin: textMargin
    })

    docDefinition.content.push({
        text: "Miscellaneous",
        fontSize: largeText,
        margin: titleMargin
    })

    let miscellaneous = [];

    object.identifier.forEach((element) => {
        if ('type' in element) {
            let line = `${element.type.text}: ${element.value}`;
            miscellaneous.push(line);
        }
    })

    docDefinition.content.push({
        ul: miscellaneous,
        fontSize: mediumText,
        margin: textMargin
    })

    docDefinition.content.push({
        text: "Observations",
        fontSize: largeText,
        margin: titleMargin
    })

    let observations = [];

    object.observations.forEach((bundle) => {
        bundle.entry.forEach((entry) => {
            let line;
            if ("valueQuantity" in entry.resource) {
                line = `${entry.resource.code.text}: ${entry.resource.valueQuantity.value} (${entry.resource.valueQuantity.unit})`;
            } else {
                line = `${entry.resource.code.text}`;
            }

            observations.push({
                text: line,
                margin: observationMargin
            });
        });
    });

    docDefinition.content.push({
        ul: observations,
        fontSize: mediumText,
        margin: textMargin
    })

    let pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream('output/' + id + '.pdf'));
    pdfDoc.end();
    console.log("Finish generating");
}


module.exports = {
    makeFromJson: makeFromJson
}

