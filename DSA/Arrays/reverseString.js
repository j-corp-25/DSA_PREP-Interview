//create a function that reverses a string:
//'hi my name is Jordy' should be:
// 'ydroj si eman ih'

const reverse = (str) => {
  //validate input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "not a good input";
  }
  // words = str.split(" ")
  // console.log(words)9
  // const len = words.length - 1
  // for(let i = words[words.length - 1]; i < len; i++){
  const backwards = [];
  const ItemLen = str.length - 1;
  for (let i = ItemLen; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");

  // }
};

console.log(reverse("hi my name is jordy"));
