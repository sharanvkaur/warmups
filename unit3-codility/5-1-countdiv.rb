# def solution(a,b,k)
#   integers_between = b - a
#   numArr = Array.new(integers_between){ |index| index+a}
#   newArr = []
#   for i in numArr
#     j = i%k.to_f
#     if j == 0.0
#       newArr.push(j)
#     end
#   end
#   p newArr.length
#
# end

# https://codility.com/demo/results/trainingKNXV7B-PW7/
# 33%



def solution(a,b,k)
  integers_between = b-a
  if a%k == 0
      return (integers_between/k)+1
    else
      return (b/k - ((a/k)+1))+1
    end
end









solution(6,11,3)
