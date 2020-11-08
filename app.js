// Данные с API
const data = {
    "displayedName": {
        "displayedName": {
            "value": [
                "Профиль маячковый ПВХ 10 мм L3м"
            ],
            "description": "Полное наименование товара для клиента"
            }
        },
    "stock": {
        "stocks": {
                "34": {
                "2": "35",
                "3": "42",
                "4": "58",
                "5": "57",
                "6": "112",
                "20": "51",
                "22": "78",
                "26": "34",
                "32": "22",
                "35": "358",
                "40": "28",
                "43": "68",
                "45": "58",
                "49": "31",
                "51": "29",
                "56": "42",
                "62": "26",
                "64": "0",
                "65": "57",
                "86": "15",
                "114": "41",
                "117": "46",
                "143": "46",
                "162": "4",
                "171": "0",
                "176": "12"
            }
        }
    }
}
// Название товара 
const productName = data.displayedName.displayedName.value.toString()


// const с данными 
const object = data.stock.stocks[34]; //  объект с магазинами из региона
const array = Object.entries(object); // матрица магазинов 

// Функция вывода магазинов в которых товар в наличии
const arrayOfShops = (array) => { 
    let shops = []; 
    array.forEach(([key, value]) => {
        Number(value) !== 0 ? shops.push(key) : null
    })
    return shops
}

// Максимальное количество товара в регионе, вернуть это количество и номер магазина
const maxProducts = (object) => {
    let maxValue = Math.max( ...Object.values(object)) // определяем максимальное кол-во товара
    let shop = Object.keys(object).filter(x => {
          return  object[x] == maxValue // находим магазин с наибольшим кол-вом товара
    }).toString()
return {shop, maxValue}
}



