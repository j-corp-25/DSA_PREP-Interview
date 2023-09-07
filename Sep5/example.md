# Breaking down the question

1. When the interviewer says the question, write down the key points at the top (i.e. sorted array). Make sure you have all the details. Show how organized you are.
    - Collection of #s
    - Find the matching pair that equals to a certain sum

2. Make sure you double check: What are the inputs? What are the outputs?
    - [1,2,3,4,5]
    - The sum is 8, find the pairs that match that number

3. What is the most important value of the problem? Do you have time, and space and memory,
etc.. What is the main goal?
    - the important value 8
    - Check that the sum is there, if not return no. that there are no pairs adding to that specific sum
    - You cant repeat the same number on the same index, but you can use the same number on a different index

4. Don't be annoying and ask too many questions.
    - Are the numbers integers? Floating, can they be negative?

5. Start with the naive/brute force approach. First thing that comes into mind. It shows that you’re able to think well and critically (you don't need to write this code, just speak about it).

    - Using 2 for loops could work, but it would be very time consuming
    - Quadratic should not be an option

6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)

    - This is too time consuming
    - Using binary search would still be too slow, it would log of n actually
    - Hash map?

7. Walk through your approach, comment things and see where you may be able to break things. Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on that. Sometimes this occurs with repeated work as well.

    - I think this will be like a window problem, this would close in from the left and right until the sum is solved. Maybe also a 2 pointer? Because its pointing on the first and last, this is assuming its a sorted array. Because you wont waste an extra step having to sort the inputs.

8. Before you start coding, walk through your code and write down the steps you are going to follow.

9. Modularize your code from the very beginning. Break up your code into beautiful small pieces and add just comments if you need to.

10. Start actually writing your code now. Keep in mind that the more you prepare and understand what you need to code, the better the whiteboard will go. So never start a whiteboard interview not being sure of how things are going to work out. That is a recipe for disaster. Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time. So think: What can I show in order to show that I can do this and I am better than other coders. Break things up in Functions (if you can’t remember a method, just make up a function and you will at least have it there. Write something, and start with the easy part.

11. Think about error checks and how you can break this code. Never make assumptions about the input. Assume people are trying to break your code and that Darth Vader is using your function. How will you safeguard it? Always check for false inputs that you don’t want. Here is a trick: Comment in the code, the checks that you want to do... write the function, then tell the interviewer that you would write tests now to make your function fail (but you won't need to actually write the tests).

12. Don’t use bad/confusing names like i and j. Write code that reads well.

13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc... Ask the interviewer if we can make assumption about the code. Can you make the answer return an error? Poke holes into your solution. Are you repeating yourself?

14. Finally talk to the interviewer where you would improve the code. Does it work? Are there different approaches? Is it readable? What would you google to improve? How can performance be improved? Possibly: Ask the interviewer what was the most interesting solution you have seen to this problem

15. If your interviewer is happy with the solution, the interview usually ends here. It is also common that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google, where they care a lot about scale. The answer is usually a divide-and-conquer approach — perform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk and combine them later.
