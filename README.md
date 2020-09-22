## TOPT Generator CLI Using NodeJS

A customizable implementation of Time-based OTP (TOTP).
- [TOTP](https://tools.ietf.org/html/rfc6238)

If something doesn't work, please [file an issue](https://github.com/charles-mutabazi/totp-node-generator/issues)

## Installation
- `yarn global add generate-totp`

## Sample Usage:
In your terminal run the following
```
  // to get help
  $ generate-totp --help
  
  //sample example
  $ generate-totp -k myrandomesharedprivatekey -a sha512 -d 10
  
```
