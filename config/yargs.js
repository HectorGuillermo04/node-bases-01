const argv = require('yargs')

            .option('b' , {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Put the number base'

            })
            .option('l' , {
                alias: 'listado',
                type:'boolean',
                default: false,
                describe: 'Show result of multiplicated'
            })
            .option('m' , {
                alias: 'max',
                type:'number',
                default: 10,
                describe: 'Define number to multiplicated'
            })
            .check((argv , options) => {
                if(isNaN(argv.b)) {
                    throw 'La base solo permite numeros'
                }
                return true;
            })
            .argv


module.exports = argv;