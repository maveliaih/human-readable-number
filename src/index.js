module.exports = function toReadable (number) {
    let nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let nums2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    let x = number.toString().replace(/\B(?=(\d{1})+(?!\d))/g, " ");

    /* One digit */
    if (x.length === 1)
    {
        return nums[x]
    }

    /* Two digits */
    else if (x.length === 3)
    {
        if (number === 10)
        {
            return nums2[0]
        }
        else if (number % 10 !== 0 && number > 20)
        {
            return tens[x.slice(0, 1)] + ' ' + nums[x.slice(2, 3)]
        }
        else if (number % 10 === 0)
        {
            return tens[x.slice(0, 1)]
        }
        else if (number > 10 && number < 20)
        {
            return nums2[x.slice(2,3)]
        }
    }

    /* Three digits */
    else if (x.length === 5)
    {
        if (number % 100 !== 0 && number % 100 > 10 && number % 100 < 20 || number % 100 === 10)
        {
            return nums[x.slice(0, 1)] + ' hundred ' + nums2[x.slice(4,5)]
        }
        else if (number % 100 > 20 && number % 10 !== 0)
        {
            return nums[x.slice(0, 1)] + ' hundred ' + tens[x.slice(2,3)] + ' ' + nums[x.slice(-1)]
        }
        else if (number % 100 !== 0 && number % 10 === 0){
            return nums[x.slice(0, 1)] + ' hundred ' + tens[x.slice(2, 3)]
        }
        else if (number % 10 !== 0) {
            return nums[x.slice(0, 1)] + ' hundred ' + nums[x.slice(4, 5)]
        }
        return nums[x.slice(0, 1)] + ' hundred'
    }
}

