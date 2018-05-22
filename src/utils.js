
export const OPERATORS = ['+', '-', '/', '*']


export const parseDisplay = (strVal) => {
    Array.from(strVal).reduce((acc,cv)=>{
        let lastValue = cv;
        if(+cv){
            // lastValue = acc[acc.length-1] || '';
            lastValue = +(`${lastValue}${cv}`)
        }
        return [...acc,lastValue]
    }, [])
}

export const runCalculation = () => {

}


let runArr;

const parseInteger = (str) => {

}