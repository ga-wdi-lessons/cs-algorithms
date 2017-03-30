[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Concepts in Computer Science: Algorithms

## Learning Objectives

By the end of this, developers should be able to...

-   Define "algorithm"
-   Identify what Big-O time-complexity measures
-   Give an example of a divide-and-conquer algorithm
-   Predict the time-complexity of a given algorithm

## Computer Science (10 minutes, 0:10)

> "Computer science is a discipline that involves the understanding and design of computers and computational processes. In its most general form it is concerned with the understanding of information transfer and transformation. Particular interest is placed on making processes efficient and endowing them with some form of intelligence. The discipline ranges from theoretical studies of algorithms to practical problems of implementation in terms of computational hardware and software."
>
> ([Source](https://www.cs.mtu.edu/~john/whatiscs.html))

Computer Science fields include but are not limited to...
- Algorithms
- Data structures
- Mathematical logic
- Networking
- Computer Architecture
- Theory (Coding, Game, Graph)
- Artificial intelligence

> [This Wikipedia article](https://en.wikipedia.org/wiki/Outline_of_computer_science#Subfields) has a nice summary of CS subfields.

Many think of computer science as a necessary prerequisite to do anything programming-related with a computer and *really know what you are doing*, or that knowing a certain amount of computer science is some kind of litmus test for a *true programmer*. This attitude perhaps unnecessarily mystifies an already difficult subject and field of study and, at worst, makes the learning curve seem so steep that it is like a learning barrier.

What do you already know about computer science?

Decades ago, it was absolutely necessary to have an understanding of computer science to do anything with a computer. In the beginning of consumer computing, home computers were essentially electronics projects for enthusiasts and hardcore hobbyists. The types of things you could do with a computer were very limited, and of interest to people with specific interests. Computers have come a long way since then, and are equipped with operating systems that attempt to make it as easy as possible for anyone to use a computer.

Something similar is true for programming, namely that not knowing any computer science is no longer a barrier to entry.

### How Can We Use Computer Science?

**Computer science provides methods and concepts for evaluating what we are doing as programmers.** At the very least, understanding some computer science can simply deepen our appreciation for our discipline and our craft. Not everyone who programs all of sudden thinks inherently, or has to think, like the stereotype of an engineer might think.

What does computer science have to do with modern web development? Not much, on the surface. As application developers, we can do our job well by following best practices, guided by our experience. It probably will not be often that you are interested in the time-complexity of a method you write.

Complexity and data structures are something **engineers** worry about, not developers, right?

Well, no. While it is true that we don't usually care much about optimization,
there are a few reasons why developers should care a bit about classic topics in
introductory computer science (CS).

1. Classic problems allow us to practice our problem solving skills; in fact, most of our lesson today can be completed without coding.
2.  Being familiar with the tradeoffs inherent in choosing an algorithm or a data structure have direct parallels in choices you make writing your application code.
3. Some of our colleagues will have CS degrees, and being able to understand the jargon and figures of speech they use helps us communicate with them. Perhaps most importantly, these colleagues will probably have some say in hiring you, since they're your prospective team. Nearly every technical interview touches on these topics.

## Algorithms (5 minutes, 0:15)

> algorithm (n.) - a process or set of rules to be followed to attain a goal

Algorithm is a fancy word for recipe. When we have a problem, we take a **series
of steps to solve that problem**. Say I want a peanut butter and jelly sandwich,
and Andy has agreed to make it for me. The problem is, he doesn't know how.
Assuming an otherwise-adult set of knowledge, how might we tell Andy to make me
a sandwich?

> 1.  Go to the kitchen
> 1.  Find the bread, toaster, utensils, peanut butter, and jelly
> 1.  Toast the bread
> 1.  Using a knife or spoon, spread one slice of toast with peanut butter
> 1.  Spread the other slice of toast with jelly
> 1.  Place the two pieces of bread together
> 1.  Return to me with the sandwich (most important step)

If Andy needed to make sandwiches for all of us, how would he do that? What's
the "easy" way to obtain many sandwiches? What is a more efficient way?

### Think-Pair-Share: Outline an Algorithm (5 minutes, 0:20)

Take 3 minutes to write down your day-initialization algorithm (i.e., your morning routine). Share it with a neighbor. How many steps are there? How do you or could you save time if you're in a rush?

### Think-Pair-Share: Sorting Cards (10 minutes, 0:30)

[You have a deck of unsorted playing cards](https://deck-of-cards.js.org/).
Describe in English an algorithm for sorting them. How would this algorithm
change if your goal were not only to sort the deck, but to kill time while doing
it?

## Sorting (5 minutes, 0:35)

A well-known problem in computer science is sorting an array. There are many
algorithms for accomplishing this. Here is an abbreviated
list...

-   Bubble sort
-   Quick sort
-   Merge sort
-   Insertion sort
-   Selection sort

This illustrates something important about algorithms: you nearly always have a
choice. There is no one way to solve a problem. Different
algorithms are better in different contexts, or with different constraints. It's
up to you to consider the options and pick the one that best meets your needs.

> [Sorting Algorithms Visualized](https://www.toptal.com/developers/sorting-algorithms)

### We Do: Bubble Sort (5 minutes, 0:40)

Next, we'll visualize bubble sorting with seven volunteers. One person will play the role of the recursive sorter.

Bubble sort repeatedly steps through the list to be sorted, compares each pair
of adjacent items and swaps them if they are in the wrong order. The pass
through the list is repeated until no swaps are needed, which indicates that
the list is sorted.

Bubble sort is ideal for when your data is already close to being sorted, but not quite there yet. Bubble sort is **not ideal** when your data is in reverse order.

> [Here's a fun bubble sort visualization.](https://www.youtube.com/watch?v=lyZQPjUT5B4)

### You Do: Research Quick Sort (10 minutes, 0:50)

Work with a partner to go through this [interactive example](http://me.dt.in.th/page/Quicksort/) of quick sort. One of you will be asked to explain quick sort in your own words.

### We Do: Visualize Quick Sort (10 minutes, 1:00)

Now, we're going to have 8 people participating in the quick sort demonstration.

## Break (10 minutes, 1:10)

## Big-O Notation (15 minutes, 1:20)

Big-O notation is simply a way of comparing the efficiency of algorithms. When we compare algorithms, we get the most meaningful comparisons when we compare "apples to apples": we wouldn't compare a sorting algorithm to an algorithm for summing the terms of an array. Comparisons become meaningful when we are comparing algorithms with respect to a given problem.

Big-O notation is not an exact metric for benchmarking algorithms. Rather, it gives us an abstract idea about how costly or efficient an algorithm is, with respect to how much computing power it takes. With Big-O notation, we are comparing orders of magnitude.

We use Big-O notation to describe an algorithm's complexity. Algorithmic complexity
is measured by how much time and memory scale are used in processing input (represented by ***n***) of arbitrary size. We will focus on time-complexity rather than space-complexity (i.e., memory usage).

When dealing with time complexity, Big-O notation is an abstract metric for **how quickly the runtime of an algorithm grows relative to the input**.

![Graph of O-complexity](http://i.stack.imgur.com/WcBRI.png)

Take a simple algorithm for demonstration purposes: printing an element of an
array to the screen.

```rb
def loop
  puts "time to loop!"
  [1, 2, 3].each do |n|
    puts n
  end
end
```

This procedure iterates through an array (an implicit loop) and prints each
element to the screen. In this example, the loop involves three steps. If
instead the array had five elements, the loop would require five steps to
complete. We say that this procedure has linear time-complexity: the
time-to-complete grows in lock-step with the number of inputs, denoted
`O(n)` and pronounced "O of n" or simply "linear".

To identify an algorithm's complexity, we focus on the "family" of scaling
functions the algorithm belongs to. We don't care about exact values.

```ruby
def loop
  [1, 2, 3].each do |n|
    puts "hello!"
    puts n
  end
end
```

This procedure prints two lines to the screen on each iteration, for a total of
six lines. If we had a five-item array, it would print ten items to the screen.
You might be tempted to say this algorithm has complexity `O(2n)`. But, `y =
2n` is still a linear function, so it is more appropriate to say that this
procedure is linear (`O(n)`).

Another way of saying we care about the "family" of scaling functions is to say
we care about the shape of the scaling function for an algorithm. Each family of functions belongs to a certain order of (computational) magnitude, somewhat like the Richter scale.

In both of the previous examples, graphing input (`n`) against completion time yields a
straight line, hence we say that the procedures ***scale linearly***.

**How would we plot these families on the earlier graph?**

Let's look at this demo in javascript...
- Code: [JS](script.js), [HTML](index.html)
- [Deployed](http://aboard-thought.surge.sh)

### You Do: Study Big-O Families (30 minutes, 1:50)

Take 15 minutes to read through [this article](http://www.daveperrett.com/articles/2010/12/07/comp-sci-101-big-o-notation/). Stop before the section on "Amortized Analysis".

Once you're done reading, [complete these exercises](https://gist.github.com/amaseda/c4283f5c58b9b68be9318259098f0298). In it, you will need to assess the worst-case scenario time complexity for a number of algorithms. There are some rules of thumb [in the reading](http://www.daveperrett.com/articles/2010/12/07/comp-sci-101-big-o-notation/) that will help you interpret what you are seeing.

> If you like graphs, check out this [running time graph](http://science.slc.edu/~jmarshall/courses/2002/spring/cs50/BigO/).

### Bonus: Tower of Hanoi

Form groups of three and visit [this site](https://www.mathsisfun.com/games/towerofhanoi.html).

Create an algorithm in english for solving the problem: given `n` disks, what is the number of moves it takes to solve the puzzle. While doing so, think about the following questions...

1. What is the smallest number of moves required to solve the problem with 3 disks?
1. And with 4 disks?
1. What is the complexity of your algorithm?
1. Can you think of a way to compute the minimum number of moves given n disks?

## Additional Resources

-   [Data Structures](https://github.com/ga-wdi-lessons/cs-data-structures)
-   [Big-O Algorithm Complexity Cheat Sheet](http://bigocheatsheet.com/)
-   [Sorting Algorithm Animations](http://www.sorting-algorithms.com/)
-   [A Beginner’s Guide to Big O Notation « Rob Bell](http://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)
-   [Fibonacci sequence - Rosetta Code](http://rosettacode.org/wiki/Fibonacci_sequence#Recursive_51)
-   [Bubble-sort with Hungarian ("Csángó") folk dance - YouTube](https://www.youtube.com/watch?v=lyZQPjUT5B4)
-   [Quick-sort with Hungarian (Küküllőmenti legényes) folk dance - YouTube](https://www.youtube.com/watch?v=ywWBy6J5gz8)
-   [Plain English Explanation of O-complexity on Stack Overflow](http://stackoverflow.com/questions/487258/what-is-a-plain-english-explanation-of-big-o-notation/487278)

## [License](LICENSE)

Source code distributed under the MIT license. Text and other assets copyright
General Assembly, Inc., all rights reserved.
