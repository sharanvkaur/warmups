
# def solution(a)
#   pos_array = Array.new(a.length){ |i| a[i].abs}
#   sorted = pos_array.sort
#   # p sorted
#   diff = sorted[sorted.length-1] - sorted[0]
#   # puts diff
#   comp_array = Array.new(diff){ |i| i+sorted[0]}
#   # p comp_array
#   solution = comp_array - sorted
#   p solution[0] || a[0]+1
# end



def solution(a)
  sorted = a.sort
  positive_array = []
  for i in sorted[0]..sorted[a.length-1] do
    if i > 0
      positive_array.push(i)
    end
  end
  p positive_array
  diff = positive_array - sorted
  # p diff
  p diff[0] || a[0]
end





solution([1])
solution([2])
# solution([-9,-33,5,-4,23,-8])
# solution([100, 199, 165])
# solution([-10000, 10, -199, -165])

# def lowest_available(arr)
#   res = nil
#   arr.sort.each.with_index(1) { |a, i|
#     if i != a
#       res = i
#       break
#     end
#   }
#   res
# end


# def solution(a)
#   comp_array = (Array.new(a.length+1){ |index| index+1 })
#   diff = comp_array - a
#   p diff[0]
# end
#
#




# that, given a non-empty zero-indexed array A of N integers,
# returns the minimal positive integer (greater than 0) that does not occur in A.
#
# For example, given:
#
#   A[0] = 1
#   A[1] = 3
#   A[2] = 6
#   A[3] = 4
#   A[4] = 1
#   A[5] = 2
# the function should return 5.
#
# Assume that:
#
# N is an integer within the range [1..100,000];
# each element of array A is an integer within the range
# [−2,147,483,648..2,147,483,647].
