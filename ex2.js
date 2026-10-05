const myHeight = 155;

const maxWeight = myHeight % 100;
const idealWeight = maxWeight * 9 / 10;
const minWeight = maxWeight * 8 /10
if(100 < myHeight < 200) {
    console.log(
        "Cân nặng lý tưởng:"+ idealWeight + "," +
        "Cân nặng tối đa: "+ maxWeight + "," +
        "Cân nặng tối thiểu: "+ minWeight);
    }
