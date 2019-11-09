# _{beepboop}_

#### _{}_

#### By _**{Bryon Burke}**_

## Description

_{This program accepts a number from the user and outputs a sequence of numbers from 0 to their number while substituting strings according to a set of rules. }_

## Setup/Installation Requirements

*

_{Double click the index.html file to start application}_

## Known Bugs

_{There are no known bugs.}_

## Support and contact details

_{For support contact bryonparis@gmail.com}_

## Technologies Used

_{This application uses bootstrap and jquery}_

### License

*{This application Licensed under MIT}*

Copyright (c) 2019 **_{Bryon Burke}_**



Spec 1: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"

Spec 2: Numbers that contain a 1: all digits are replaced (all digits) with "Beep!".
Input: "4".
Output: "0", "Beep!",2 ,3 ,4, 5.

Spec 3: Numbers that contain a 2: all digits are replaced (all digits) with "Boop!".
Input: "4".
Output: "0", "Beep!","boop",3 ,4, 5.

Spec 4: Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't do that.".
Input: "4"
Output: "0", "Beep!", "I'm sorry, Dave. I'm afraid I can't do that." ,3 ,4, 5.

Spec 5: The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that.".
Input: "15".
Output: ... "9", "Beep!", "Beep!", "Boop!", "I'm sorry, Dave. I'm afraid I can't do that." ,"Beep!", "Beep!".

Spec 6: The number 21 should be replaced with "Boop".
Input: 22.  
Output: ..."Boop!", "Boop!", "Boop!".

Spec 7: The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that.".
Input: 33.
Output: ... "Beep!", "I'm sorry, Dave. I'm afraid I can't do that.", 33.
