# A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
#
# Your goal is to find that missing element.
#
# Write a function:
#
# def solution(a)
#
# that, given a zero-indexed array A, returns the value of the missing element.
#
# For example, given array A such that:
#
#   A[0] = 2
#   A[1] = 3
#   A[2] = 1
#   A[3] = 5
# the function should return 4, as it is the missing element.
#


def solution(a)
  comp_array = (Array.new(a.length+1){ |index| index+1 })
  diff = comp_array - a
  p diff[0]
end

solution([1, 2, 3])

# done
