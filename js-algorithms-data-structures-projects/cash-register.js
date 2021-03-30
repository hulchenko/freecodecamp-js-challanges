function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    const output = {status: null, change:[]};
    const register = cid.reduce( //reduce doesn't change 'cid',works for output in 'change'
      function(sum, i){
        sum.total += i[1];
        sum[i[0]] = i[1];
        return sum;
      },
      {total:0}
    );
    
    const denominants = [
      {name:'ONE HUNDRED', val: 100},
      {name:'TWENTY', val: 20},
      {name:'TEN', val: 10},
      {name:'FIVE', val: 5},
      {name:'ONE', val: 1},
      {name:'QUARTER', val: 0.25},
      {name:'DIME', val: 0.1},
      {name:'NICKEL', val: 0.05},
      {name:'PENNY', val: 0.01}];
    
    if (register.total < changeDue){
      output.status = 'INSUFFICIENT_FUNDS';
      output.change = [];
      return output;
    }
    
    if (register.total === changeDue){
      output.status = 'CLOSED';
      output.change = cid;
      return output;
    }
    
    const arr = denominants.reduce(function(sum, i){
      let result = 0;
      while (register[i.name] > 0 && changeDue >= i.val){
        changeDue = changeDue - i.val;
        register[i.name] = register[i.name] - i.val;
        result = result + i.val;
        changeDue = Math.round(changeDue * 100) / 100; //tp ensure proper rounding in long decimals.
      }
      if (result > 0){
        sum.push([i.name, result])
      }
      return sum;
    }, []); //empty arr instead of 0 for the array.
    
    if (arr.length < 1 || changeDue > 0){ //in case we have 
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    
    output.status = 'OPEN';
    output.change = arr;
    return output;
    }
    
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);