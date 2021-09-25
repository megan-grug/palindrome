


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
      
      if (word !== "")
        {
          if      (word == backwardsWord)
                  {heading.innerHTML = "Omg, a palindrome!"}
          else if (word !== backwardsWord)
                  {heading.innerHTML = "Nah, that's not a palindrome!"}    
        }  
      else heading.innerHTML = "Please type in a word or phrase to try"
    }
    
  document.getElementById('output').value = backwardsWord;
  palindrome();
}

reverseString();