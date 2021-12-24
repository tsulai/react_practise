import React from 'react';

function ArrayReduce(props) {
    //***** additional note ***** 
    // concat() ရော spread operator နဲ့ရော array 2 ခု joinရင် တူတဲ့ value ပါရင် duplicate တွေပါမှာ။
    // initial value က one dimensional ဆို 0 (int) တစ်ခုပဲ။ string ဆို ['value'] ။ name: value pair obj array ဆို {}
    // Array အချင်းချင်း same element duplicate စစ်ချင်ရင် indexOf သုံးပါ။ ရှိရင် နေရာ index return လာတယ်။ မရှိရင် -1 လာတယ်။
    //***** additional note ***** 

    // === Sum all the values of an array === 
    const scores1 = [0, 1, 2, 3]
    let total1 = scores1.reduce(function(accumulator, currentValue){
        return accumulator + currentValue
    },0)

    let total = scores1.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    // *****************************************************************************************
    // === Sum of values in an object array === 
    let scores2 = [{x: 1}, {x: 2}, {x: 3}]
    let sum = scores2.reduce((accumulator, currentValue)=> accumulator + currentValue.x, 0)
    // logs 6
    // *****************************************************************************************
    // === Flatten an array of arrays === 
    let scroes3 = [[0, 1], [2, 3], [4, 5]]
    let flatterned = scroes3.reduce((accumulator, currentValue)=> accumulator.concat(currentValue),[])
    // flattened is [0, 1, 2, 3, 4, 5]
    //The concat() method is used to join two or more arrays.
    // *****************************************************************************************
    // === Counting instances of values in an object === 
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
    let count = 0
    let countedNames = names.reduce((accumulator,currentValue) => {
        if(currentValue in accumulator){ //accumulator ထဲမှာ current value ရှိလား၊ 
            accumulator[currentValue] = count + 1 //ရှိရင် accumulator ကို obj array ပုံစံပြောင်းပြီးသိမ်း 
            //accumulator[currentValue]++ //ES6 writing style
        }else{
            accumulator[currentValue] = 1
        }
        return accumulator
    },{})
    //accumulator ဆိုတာ array item type ပဲ။  array item က int ဆို int, object array ဆိုရင် object array
    //*note that -  သူက accumulator ဖြစ်တဲ့အတွက် နောက်ဆုံးresult အကုန်သူ့မှာပါတယ်။ which is - object array ဆိုလို့ ရှိရင် ပေါင်းနှုတ်မြောက်စား process လုပ်ထားတာမဟုတ်တဲ့ အတွက် object array list ကြီး တစ်ခုလုံး သူ့ဆီမှာရှိနေမှာ
    //အဲဒါကြောင့် အပေါ်က func: က string array ကနေ obj array ပုံစံပြောင်းပြီးတော့  accumulate လုပ်လိုက်တယ်၊ count လိုက်တယ်၊ accumulate လုပ်ထားတာကို return ပြန်လိုက်တယ်။

    // let countedNames = names.reduce(function (allNames, name) {
    //     if (name in allNames) {
    //       allNames[name]++
    //     }
    //     else {
    //       allNames[name] = 1
    //     }
    //     return allNames
    //   }, {})
    //   // countedNames is:
    //   // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
    // *****************************************************************************************
    // === Grouping objects by a property === 
    let people = [
        { name: 'Alice', age: 21 },
        { name: 'Alice2', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ];
     //*note - accumulator.age ဆိုတာမျိုးမရှိ။ Remember - accumulator သည်အစုအပေါင်းကြီး။ .map လို item တစ်ခုချင်းမဟုတ်။ 
     //accumulator ထဲ current ဟာရှိမရှိစစ်ချင်ရင် accumulator[currentValue.age] - ဒါမျိုးမှရ

    let groupedPeopleByAge = people.reduce((accumulator, currentValue) => {
        
        if(!accumulator[currentValue.age]){
        //accumulator[21] (Alice) - မရှိသေး အထဲ၀င် မတူတဲ့ array format create လုပ်။ one dimentional array ဆို လုပ်စရာမလို။
        //accumulator[21] (Alice2) - ရှိ - အထဲမ၀င် - ရှိပြီးသားထဲ push လုပ်
           // console.log(`current value is  ${currentValue.name}`)
            accumulator[currentValue.age] = []
        }
        accumulator[currentValue.age].push(currentValue) //name value pair မို့လို့ push လုပ်ရတယ်
        return accumulator
    },{})
    // groupedPeople is:
    // {
    //   20: [
    //     { name: 'Max', age: 20 },
    //     { name: 'Jane', age: 20 }
    //   ],
    //   21: [
    //      { name: 'Alice', age: 21 },
    //      { name: 'Alice2', age: 21 }
    //    ]
    // }
    // *****************************************************************************************   
    // === Bonding arrays contained in an array of objects using the spread operator and initialValue ===   
    let friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
      }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet', 'Harry Potter'],
        age: 26
      }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
      }] 
      let allbooks = friends.reduce((accumulator, currentValue)=>{
         return [...accumulator, ...currentValue.books]
      },['Alphabet']) //Alphabet က friendsထဲမှာ မပါပေမယ့် initial value ပေးတဲ့အတွက် သူ့ပါ return array ထဲပါလာမှာ

      // allbooks = [
    //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
    //   'Romeo and Juliet', 'The Lord of the Rings',
    //   'The Shining'
    // ]
    // *****************************************************************************************   
    // === Spread Operator === 
      //push
        var rivers = ['Nile', 'Ganges', 'Yangte'];
        var moreRivers = ['Danube', 'Amazon'];

        Array.prototype.push.apply(rivers, moreRivers);
        //console.log(rivers);
        //one single line with spread operator
        rivers.push(...moreRivers);
      //Concatenating arrays
        let numbers = [1, 2];
        let moreNumbers = [3, 4];
        let allNumbers = [...numbers, ...moreNumbers];
        //console.log(allNumbers); // [1, 2, 3, 4]
      //Copying an array
        let scores = [80, 70, 90];
        let copiedScores = [...scores];
        //console.log(copiedScores); // [80, 70, 90]
    // *****************************************************************************************   
    // === Remove duplicate items in an array === 
    //Array's indexOf method is sweet. It returns the position of an element in the array, if it exists, or returns -1 if it does not.
    let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
    let myOrderedArray = myArray.reduce((accumulator, currentValue)=> {
        if(accumulator.indexOf(currentValue)=== -1){
            console.log('current value is ' + currentValue);
            accumulator += currentValue
        }
        return accumulator
    },[])
    return (
        <div>
            Sum all the values of an array: {total} <br/>
            Sum of values in an object array: {sum} <br/>
            Flatten an array of arrays: {flatterned} <br/>
            Counting instances of values in an object: See in console {console.log('***** Counting instances of values in an object ****')}
            {console.log(countedNames)} <br/> 
            {/* Grouping objects by a property : see in console {JSON.stringify(groupedPeopleByAge)} <br/> */}
            Grouping objects by a property : See in console {console.log('***** Grouping objects by a property ****')}
            {console.log(groupedPeopleByAge)} <br/>
            Bonding arrays contained in an array of objects using the spread operator and initialValue : See in console
            {console.log('***** Bonding arrays contained in an array of objects using the spread operator and initialValue   ****')}
            {console.log(allbooks)} <br/> 
            Remove duplicate items in an array: {myOrderedArray}
        </div>
    );
}

export default ArrayReduce;