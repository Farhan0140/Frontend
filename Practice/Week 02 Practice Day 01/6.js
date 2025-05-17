

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let big_name = friends[0];

for(let i=1; i<friends.length; i++) {
    let s = friends[i];

    if(big_name.length < s.length) {

        big_name = s;

    }
}


console.log(big_name);
