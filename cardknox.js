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

    this.setBillfirstName = function (xBillFirstName) {
        var self = this
        self.xBillFirstName = xBillFirstName
    }
    this.setBillLastName = function (xBillLastName) {
        var self = this
        self.xBillLastName = xBillLastName
    }
    this.setBillStreet = function (xBillStreet) {
        var self = this
        self.xBillStreet = xBillStreet
    }
    this.setBillCity = function (xBillCity) {
        var self = this
        self.xBillCity = xBillCity
    }
    this.setBillState = function (xBillState) {
        var self = this
        self.xBillState = xBillState
    }
    this.setBillZip = function (xBillZip) {
        var self = this
        self.xBillZip = xBillZip
    }
    this.setBillCountry = function (xBillCountry) {
        var self = this
        self.xBillCountry = xBillCountry
    }
    this.setBillPhone = function (xBillPhone) {
        var self = this
        self.xBillPhone = xBillPhone
    }
    this.setBilCompany = function (xBillCompany) {
        var self = this
        self.xBillCompany = xBillCompany
    }
    this.setAmount = function (xAmount) {
        var self = this
        self.xAmount = xAmount
    }
    this.setEmail = function (xEmail) {
        var self = this
        self.xEmail = xEmail
    }
    this.setInvoice = function (xInvoice) {
        var self = this
        self.xInvoice = xInvoice
    }
    this.setCardNum = function (xCardNum) {
        var self = this
        self.xCardNum = xCardNum
    }
    this.setExp = function (xExp) {
        var self = this
        self.xExp = xExp
    }
    this.setCVV = function (xCVV) {
        var self = this
        self.xCVV = xCVV
    }
    this.setCommand = function (xCommand) {
        var self = this
        self.xCommand = xCommand
    }

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
                xBillPhone: self.xBillPhone
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