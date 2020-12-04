

    rate = {
        fixed: 50,
        minKm: 5,
        perKm: 10,
        freeMin:15,
        perMin:2
    }

    function calcFare(km,min){
        let fare = rate.fixed

        fare += (km > rate.minKm) ? ((km - rate.minKm) * rate.perKm) : 0
        //if km>5 then fare=km - 5) * 10)
        //else  fare=0

        fare += (min > rate.freeMin) ? ((min - rate.freeMin) * rate.perMin) : 0
        //if min>10 then fare= min - 15) *2)
        //else  fare=0

        return fare;

    }

    exports = module.exports = {
        rate, calcFare
    }
