const express = require('express');
const router = express.Router();
const request = require('request-promise');
const fs = require('mz/fs');

router.post('/fss', function (req, res) {
    fs.writeFile('last.xml', req.body.data)
        .then(_ => {
            let soapAction = 'http://ru/ibs/fss/ln/ws/FileOperationsLn.wsdl/' + req.body.action;
            return request({
                method: 'POST',
                uri: 'https://docs-test.fss.ru/WSLnCryptoV11/FileOperationsLnPort',
                insecure: true,
                strictSSL: false,
                headers: {
                    contentType: 'text/xml; charset=UTF8',
                    SOAPAction: soapAction,
                    SOAPVersion: '1.0'
                },
                body: req.body.data
            })
                .then(resp => fs.writeFile('resp.txt', resp).then(_ => res.json({ resp: resp })));
        })
        .catch(err => fs.writeFile('resp.txt', err.message).then(_ => res.json({ resp: err.message })));
});

module.exports = router;
