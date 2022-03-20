fetch(`https://economia.awesomeapi.com.br/last/USD-BRL,BTC-BRL,ETH-BRL,EUR-BRL,GBP-BRL,JPY-BRL`)
    .then(resposta => resposta.json())
    .then(data => {
        const names = [
        data.USDBRL.name,
        data.BTCBRL.name,
        data.ETHBRL.name,
        data.EURBRL.name,
        data.GBPBRL.name,
        data.JPYBRL.name,
        
    ]

        document.getElementById('code-usd').innerHTML = data.USDBRL.code
        document.getElementById('value-usd').innerHTML = data.USDBRL.ask

        document.getElementById('code-btc').innerHTML = data.BTCBRL.code
        document.getElementById('value-btc').innerHTML = data.BTCBRL.ask

        document.getElementById('code-eth').innerHTML = data.ETHBRL.code
        document.getElementById('value-eth').innerHTML = data.ETHBRL.ask


        document.getElementById('code-eur').innerHTML = data.EURBRL.code
        document.getElementById('value-eur').innerHTML = data.EURBRL.ask

        document.getElementById('code-gbp').innerHTML = data.GBPBRL.code
        document.getElementById('value-gbp').innerHTML = data.GBPBRL.ask

        document.getElementById('code-jpy').innerHTML = data.JPYBRL.code
        document.getElementById('value-jpy').innerHTML = data.JPYBRL.ask


        return names
    })
    .then(coinsName => { //Tratando o nome dos ativos.
        const arrFinal = []
        const coinsNameTrated = coinsName.forEach(coin => {
            const coinsNameArr = coin.split('')
            let c = 0;
            let arrFiltered = []
            while (coinsNameArr[c] !== '/') { //Adicionando as letras do ativo no arr vazio até "esbarrar" na barra
                arrFiltered.push(coinsNameArr[c])
                c++
            }
            arrFinal.push(arrFiltered.join(''))
        })
        document.getElementById('name-usd').innerHTML = arrFinal[0]
        document.getElementById('name-btc').innerHTML = arrFinal[1]
        document.getElementById('name-eth').innerHTML = arrFinal[2]
        document.getElementById('name-eur').innerHTML = arrFinal[3]
        document.getElementById('name-gbp').innerHTML = arrFinal[4]
        document.getElementById('name-jpy').innerHTML = arrFinal[5]
    })
