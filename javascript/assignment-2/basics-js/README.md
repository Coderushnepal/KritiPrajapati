# Basics of JavaScript - Day 2

You have the following list of names:
```
Neeta sapkota
neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung
```

## Question 1

Convert the list of names in array of object like:
```
[
  {
    id: 1,
    firstName: 'Neeta',
    lastName: 'Sapkota'
  },
  {
    id: 2,
    firstName: 'Neha',
    lastName: 'Shiwakoti'
  }
  ...
]
```

## Question 2

Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.
<br/>
<b>Example</b>

```
find('s') -> 5 and 11
find('a') -> 0 and 16
```

## Question 3

Convert the array of the result in Question 1, in following format

```
{
  1: {
    firstName: 'Neeta',
    lastName: 'Sapkota'
  },
  2: {
    firstName: 'Neha',
    lastName: 'Shiwakoti'
  },
  ...
}
```