import crypto from "crypto-js";

function decryptData(encryptedData) {
    try {
        const i = crypto.enc.Hex.parse("e84ad660c4721ae0e84ad660c4721ae0"),
        
            r = crypto.enc.Utf8.parse("ZGl0bGVwLWRyYWdvbi1jaXR5"),

            u = crypto.enc.Utf8.parse("ZGl0bGVwLWRyYWdvbi1jaXR5LXNhbHQ="),

            f = crypto.PBKDF2(r.toString(crypto.enc.Utf8), u, {
                keySize: 4,
                iterations: 1e3
            }),

            e = crypto.lib.CipherParams.create({
                ciphertext: crypto.enc.Base64.parse(encryptedData)
            }),

            o = crypto.AES.decrypt(e, f, {
                mode: crypto.mode.CBC,
                iv: i,
                padding: crypto.pad.Pkcs7
            });

            return JSON.parse(o.toString(crypto.enc.Utf8));
    } catch (err) {
        
        console.error(err);
        return null
    }
};

export default decryptData;