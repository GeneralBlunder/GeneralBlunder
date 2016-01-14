/*

    This code is copyright Fuel-Economy.co.uk 2006.  Do not use
    it without consent.

    Version History
    ===============
    21/06/06    Matt    Initial version - added JourneyCost, Mile<>KM, 
                        MPG<>L/100KM, and RequiredFuel functions.
    26/06/06    Matt    Added RealMPG, Gallons

*/

// Conversion constants.
var LitresInGallon = 4.54609188;
var GallonsInLitre = 0.219969157;
var MilesInKilometer = 0.621371192;
var KilometersInMiles = 1.609344;

function Gallons(FuelCost, Spend) {
    try {
        var Litres = (Spend/(FuelCost/100));
        return (Litres * GallonsInLitre);
    } catch (Error) {
        return -1;
    }
}

function RealMPG(FuelCost, Spend, Miles) {
    try {
        var g = Gallons(FuelCost, Spend);
        return (Miles/g);
    } catch (Error) {
        return -1;
    }
}

function RequiredFuel(Miles, MPG) {
    try {
        return (Miles/MPG);
    } catch (Error) {
        return -1;
    }
}

function JourneyCost(Miles, MPG, FuelCost) {    
    try {
        var GallonsUsed;    
        GallonsUsed = (Miles/MPG);
        return (((GallonsUsed* LitresInGallon) * FuelCost)/100);
    } catch (Error) {
        return -1;
    }
}

function ToLitresPer100KM(MPG) {
    try {
        return (100/((MPG*KilometersInMiles)*GallonsInLitre));
    } catch (Error) {
        return Error;
    }
}

function ToMPG(LitresPer100KM) {
    try {
        return ((100/(LitresPer100KM * GallonsInLitre)) * MilesInKilometer);
    } catch (Error) {
        return -1;
    }
}

function ToMiles(KM) {
    try {
        return (KM * MilesInKilometer);
    } catch  (Error) {
        return -1;
    }
}

function ToKM(Miles) {
    try {
        return (Miles * KilometersInMiles);
    } catch (Error) {
        return -1;
    }
}