


function reverseString() 
{
  var word = document.getElementById('input').value;

  var backwardsWord = "";

  for (var i = word.length - 1; i >= 0; i--) {
    backwardsWord += word[i];
  }
    
    function palindrome()
    {
        let heading = document.getElementById('palindrome');
        if (word == backwardsWord)
        {
        heading.innerHTML = "This is a palindrome";
        }
        else 
        {
        heading.innerHTML = "Not a palindrome";
        }
    };
  
  console.log(backwardsWord);
  document.getElementById('output').value = backwardsWord;
  palindrome();
}

reverseString();