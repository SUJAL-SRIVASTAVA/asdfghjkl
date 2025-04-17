// subjects/os/p2.js
const express = require("express");
const router = express.Router();

// GET /os/p2
router.get("/", (req, res) => {
  const codeString = `

echo "Welcome to Linux Calculator"
echo "1) Arithmetic operations"
echo "2) logical operations"
echo "3) Others"
read -p 'Enter the choice:' choice1
case $choice1 in
1)
echo "Arithmetic operations"
echo "1) Addition"
echo "2) Subtraction"
echo "3) Multiplication"
echo "4) Division"
echo "5) Modulo"
read -p 'Enter the choice:' choice2
read -p 'Enter the first number:' num1
read -p 'Enter the second number:' num2
case $choice2 in
1)
result=$((num1+num2))
echo "answer = $result"
;;
2)
result=$((num1-num2))
echo "answer = $result"
;;
3)
result=$((num1*num2))
echo "answer = $result"
;;
4)
if [ $num2 -ne 0 ];
then
result=$((num1/num2))
echo "answer = $result"
else
echo "Division by ZERO error"
fi
;;
5)
if [ $num2 -ne 0 ];
then
result=$((num1%num2))
echo "answer = $result"
else
echo "Modulo by ZERO error"
fi
;;
*)
echo "Enter a valid number"
;;
esac
;;
2)
echo "Logical operations"
echo "1) AND (&&)"
echo "2) OR (||)"
echo "3) NOT (!)"
echo "4) XOR (^)"
read -p 'Enter the choice:' choice2
read -p 'Enter the first boolean value:' num1
read -p 'Enter the second boolean value:' num2
case $choice2 in
1)
result=$((num1&&num2))
echo "answer = $result"
;;
2)
result=$((num1||num2))
echo "answer = $result"
;;
3)
result=$((!num1))
echo "answer of number1 = $result"
;;
4)
result=$((num1^num2))
echo "answer = $result"
;;
*)
echo "Enter a valid number"
;;
esac
;;
3)
echo "Others"
echo "1) Square root"
echo "2) Power"
echo "3) Absolute value"
read -p 'Enter the choice' choice2
read -p 'Enter the number' num1
case $choice2 in
1)
read -p 'Enter the other number' num2
result=$((num1^num2))
echo "Answer = $result"
;;
esac
;;
esac




  `;
  res.json({ code: codeString });
});

module.exports = router;
