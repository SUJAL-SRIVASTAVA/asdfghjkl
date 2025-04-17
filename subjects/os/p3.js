// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `

if [ "$#" -lt 2 ]; then
    echo "Please enter the valid numbers of arguments"
    exit 1
fi

output_file="$1"
shift
cat "$@" > "$output_file"
echo "Files are concatenated successfully."

//
output_file="data.txt"
line_count=0

echo "Enter the input lines"

while true; do
    read line
    if [ "$line" == "end" ]; then
        break
    fi
    echo "$line" >> "$output_file"
    ((line_count++))
done

echo "Total numbers of lines : $line_count"

//
if [ "$#" -ne 2 ]; then
    echo "Please enter the valid arguments"
    exit 1
fi

file1="$1"
file2="$2"

if [ ! -f "$file1" ] || [ ! -f "$file2" ]; then
    echo "Please provide valid files"
    exit 1
fi

echo "Using DIFF"
diff "$file1" "$file2"

echo "Using CMP"
cmp "$file1" "$file2"

echo "Using COMM"
comm <(sort "$file1") <(sort "$file2")


  `;
  res.json({ code: codeString });
});

module.exports = router;
