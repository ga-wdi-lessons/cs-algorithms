[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Computer Science: Algorithms

What does computer science have to do with modern web development? Not much, on
the surface. As application developers, we can do our job well by following best
practices, guided by our experience. There will rarely be a time when you are
interested in the time-complexity of a method you write. Complexity and data
structures are something **language** designers worry about, not developers,
right?

Well, no. While it is true that we don't usually care much about optimization,
there are a few reasons why developers should care a bit about classic topics in
introductory computer science (CS). First, classic problems allow us to practice
our problem solving skills; in fact, most of our lesson today can be completed
without coding. Second, being familiar with the tradeoffs inherent in choosing
an algorithm or a data structure have direct parallels in choices you make
writing your application code. Lastly, some of your colleagues will have CS
degrees, and being able to understand the jargon and figures of speech they use
will help you communicate with them. Perhaps most importantly, these colleagues
will probably have a say in hiring you! Nearly every technical interview touches
on these topics.

## Prerequisites

-   None.

## Objectives

By the end of this, developers should be able to:

-   Define "algorithm"
-   Identify what Big-O time-complexity measures
-   Give an example of a divide-and-conquer algorithm
-   Predict the time-complexity of a given algorithm

## Algorithms

> algorithm (n.) - a process or set of rules to be followed to attain a goal

Algorithm is a fancy word for recipe. When we have a problem, we take a series
of steps to solve that problem. Say I want a peanut butter and jelly sandwich,
and Robin has agreed to make it for me. The problem is, he doesn't know how.
Assuming an otherwise-adult set of knowledge, how might we tell Robin to make me
a sandwich?

> 1.  Go to the 12th floor
> 1.  Go to the kitchen
> 1.  Find the bread, toaster, utensils, peanut butter, and jelly
> 1.  Toast the bread
> 1.  Using a knife or spoon, spread one slice of toast with peanut butter
> 1.  Spread the other slice of toast with jelly
> 1.  Place the two pieces of bread together
> 1.  Return to me with the sandwhich

If Robin needed to make sandwiches for all of us, how would he do that? What's
the "easy" or naïve way to obtain many sandwiches? What is a more effiecent way?

### Lab: Sorting Cards

[You have a deck of unsorted playing cards](https://deck-of-cards.js.org/).
Describe in English an algorithm for sorting them. How would this algorithm
change if my goal were not only to sort the deck, but to kill time while doing
it?

## Sorting

A well-known problem in computer science is sorting an array. There are many
strategies (read: algorithms) for accomplishing this. Here is an abbreviated
list:

-   Bubble sort
-   Quick sort
-   Merge sort
-   Insertion sort

This illustrates something important about algorithms: you nearly always have a
choice. There is no "one way" to solve a problem, no "right" way. Different
algorithms are better in different contexts, or with different constraints. It's
up to you to consider the options and pick the one that best meets your needs.

### We do: Bubble Sort

Visualize bubble sort with 10 volunteers.

Bubble sort repeatedly steps through the list to be sorted, compares each pair
of adjacent items and swaps them if they are in the wrong order. The pass
through the list is repeated until no swaps are needed, which indicates that
the list is sorted.

### You do: Research Quick Sort

Work with a partner to read the
[pseudocode](http://rosettacode.org/wiki/Sorting_algorithms/Quicksort) and
[ruby](http://rosettacode.org/wiki/Sorting_algorithms/Quicksort#Ruby)
implementations of quick sort. One of you will be asked to explain quick sort
in your own words.

### We do: Visualize quick sort


## Big-O (Asymptotic Analysis)

We use "Big-O" notation to describe an algorithm's complexity. Complexity
measures how time and memory scale with input. We will focus on time-complexity.
Take a simple algorithm for demonstration purposes: printing an element of an
array to the screen.

```ruby
[1, 2, 3].each do |n|
  puts n
end
```

This procedure iterates through an array (an implicit loop) and prints each
element to the screen. In this example, the loop involves three steps. If
instead the array had five elements, the loop would require five steps to
complete. We say that this procedure has linear time-complexity: the
time-to-complete grows in lock-step with the number of inputs, denoted
`O(n)` and pronounced "O of n" or simply "linear".

To identify an algorithm's complexity, we focus on the "family" of scaling
functions the algorithm belongs to. We don't care about exact values. For
example:

```ruby
[1, 2, 3].each do |n|
  puts "hello!"
  puts n
end
```

This procedure prints two lines to the screen on each iteration, for a total of
six lines. If we had a five-item array, it would print ten items to the screen.
You might be tempted to say this algorithm has complexity `O(2n)`. But, `y =
2n` is still a linear function, so it is more approriate to say that this
procedure is linear (`O(n)`).

Another way of saying we care about the "family" of scaling functions is to say
we care about the shape of the scaling function for an alogithm. In both of the
previous examples, graphing input (`n`) against completion time yields a
straight line, hence we say that the procedures scale linearly.

### Lab: Study Big-O Families

Study the [Big-O
table](http://www.daveperrett.com/articles/2010/12/07/comp-sci-101-big-o-notation/)
to become familiar with these scaling functions, and try the exercises at the end.

compare the table to the [running time graph](http://science.slc.edu/~jmarshall/courses/2002/spring/cs50/BigO/).

## Predicting Complexity

How can you predict the complexity of a given algorithm? We can look for certain
features to help us characterize it.

-   Loops take linear time to complete (`O(n)`)
-   Nested loops take quadratic time to complete (`O(n^2)`), or worse, cubic
    time (`O(n^3)`)
-   For consecutive statements, add the times-to-complete
-   For branching statements (`if/else`), take the complexity of the worse
    branch

Here's a party trick that is sure to make you popular. Bet someone you can state
with certainty a number they've chosen, between one and ten, after three
guesses. Before I show you how, let's look at a naïve solution that takes, at
worst, ten guesses:

```md
1.  Guess "1". If no,
2.  Guess "2". If no,
3.  Guess "3". If no,
...
10.  Guess "10". You win!
```

**Question:** What is the complexity of this algorithm?

The algorithm that gets you there in three guess is called "binary search". It
goes like this:

> 1.  Divide the range in half. Ask: is the number in the middle <= your number?
> 1.  If so, the answer is in the lower half-range
> 1.  If not, the answer is in the upper half-range
> 1.  Divide the upper or lower half-range in half, and guess the middle. Repeat
>     until done.

It's easiest to see in a tree diagram. Can you see the binary structure of the
tree?

**Question:** Explain why this algorithm is an example of divide-and-conquer in
your own words.

### Lab: Divide-and-Conquer Complexity

Determine the time-complexity of the divide-and-conquer number guessing
algorithm. Guessing and checking is OK! Work with a partner to try the algorithm
out for numbers between one and ten, as well as numbers between one and
one-hundred.

## Additional Resources

-   [Data Structures](https://github.com/ga-wdi-lessons/cs-data-structures)
-   [Big-O Algorithm Complexity Cheat Sheet](http://bigocheatsheet.com/)
-   [Sorting Algorithm Animations](http://www.sorting-algorithms.com/)
-   [A Beginner’s Guide to Big O Notation « Rob Bell](http://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
-   [Fibonacci sequence - Rosetta Code](http://rosettacode.org/wiki/Fibonacci_sequence#Recursive_51)
-   [Bubble-sort with Hungarian ("Csángó") folk dance - YouTube](https://www.youtube.com/watch?v=lyZQPjUT5B4)
-   [Quick-sort with Hungarian (Küküllőmenti legényes) folk dance - YouTube](https://www.youtube.com/watch?v=ywWBy6J5gz8)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
