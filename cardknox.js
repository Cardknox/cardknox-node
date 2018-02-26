// 'use strict';
var request = require('request');
var qs = require('querystring')

function Cardknox(xKey, xSoftwareName, xSoftwareVersion) {

    this.xKey = xKey;
    this.xSoftwareName = xSoftwareName;
    this.xSoftwareVersion = xSoftwareVersion;
    this.transactionUrl = "https://x1.cardknox.com/gateway";
    this.xVersion = '4.5.5';
    this.xCommand = "";
    this.xCardNum = '';
    this.xExp = "";
    this.xCVV = "";
    this.xBillFirstName = "";
    this.xBillLastName = "";
    this.xBillStreet = "";
    this.xBillCity = "";
    this.xBillState = "";
    this.xBillZip = "";
    this.xBillCountry = ""
    this.xBillPhone = ""
    this.xBillCompany = ""
    this.xShipFirstName = "";
    this.xShipLastName = "";
    this.xShipStreet = "";
    this.xShipCity = "";
    this.xShipState = "";
    this.xShipZip = "";
    this.xShipCountry = ""
    this.xShipPhone = ""
    this.xAmount = '';
    this.xEmail = "";
    this.xInvoice = '';

    this.process = function () {
        var self = this
        console.log(self.transactionUrl);
        var jsonResponse = "";
        request.post({
            url: self.transactionUrl,
            form: {
                xKey: self.xKey,
                xVersion: self.xVersion,
                xSoftwareName: self.xSoftwareName,
                xSoftwareVersion: self.xSoftwareVersion,
                xCommand: self.xCommand,
                xAmount: self.xAmount,
                xCardNum: self.xCardNum,
                xCVV: self.xCVV,
                xExp: self.xExp,
                xInvoice: self.xInvoice,
                xEmail: self.xEmail,
                xBillFirstName: self.xBillFirstName,
                xBillLastName: self.xBillLastName,
                xBillStreet: self.xBillStreet,
                xBillCity: self.xBillCity,
                xBillState: self.xBillState,
                xBillZip: self.xBillZip,
                xBillCountry: self.xBillCountry,
                xBillCompany: self.xBillCompany,
                xBillPhone: self.xBillPhone,
                xShipFirstName: self.xShipFirstName,
                xShipLastName: self.xShipLastName,
                xShipStreet: self.xShipStreet,
                xShipCity: self.xShipCity,
                xShipState: self.xShipState,
                xShipZip: self.xShipZip,
                xShipCountry: self.xShipCountry,
                xShipCompany: self.xShipCompany,
                xShipPhone: self.xShipPhone
            }
        }, function (error, response, body) {
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', qs.parse(body));
            jsonResponse = qs.parse(body)
        })
        return jsonResponse;
    }
};

module.exports = Cardknox;