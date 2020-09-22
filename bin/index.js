#!/usr/bin/env node

/**
 * Description: This is a node cli tool to generate TOTP
 * Credit: I have used algorithm created by Adalberht - https://github.com/adalberht (Thanks)
 * Date: 22 September 2020
 * Author: Mutabazi B. Charles - https://github.com/charles-mutabazi
 * Country: Rwanda
 */

const totp_hotp_generator = require('../totp_hotp_generator');
const yargs = require("yargs");

const argv = yargs
    .usage("Usage: -k <key> [options]")
    .option("k", {alias: "key", describe: "Your secret shared key", type: "string", demandOption: true})
    .option("a", {
        alias: "algorithm",
        describe: "HMAC Algorithm used for encrypting the counter (sha1, sha256, sha512)",
        type: "string",
        default: totp_hotp_generator.DEFAULT_CRYPTO_ALGORITHM,
        demandOption: false
    })
    .option("d", {
        alias: "digits",
        describe: "Return digits of HOTP value",
        type: "number",
        default: totp_hotp_generator.DEFAULT_DIGITS,
        demandOption: false
    })
    .option("t", {
        alias: "T0",
        describe: "The Unix time to start counting time steps",
        type: "number",
        default: totp_hotp_generator.DEFAULT_T0,
        demandOption: false
    })
    .option("x", {
        alias: "X",
        describe: "Number of steps according to TOTP",
        type: "number",
        default: totp_hotp_generator.DEFAULT_X,
        demandOption: false
    })
    .argv;

console.log(totp_hotp_generator.totp({
        key: argv.k,
        digits: argv.d,
        algorithm: argv.a,
        T0: argv.t,
        X: argv.x
    })
)

//TODO:
//Add hotp generator.
