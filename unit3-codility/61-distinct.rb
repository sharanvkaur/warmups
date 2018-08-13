
# def solution(a)
#   p a.uniq.length
#
# end
#
# solution([2,1,1,2,3,1])

# https://codility.com/demo/results/trainingFGBRNA-XY4/
# 100%


def solution(a)
  present = {}
  a.each do |i|
    present[i] = true
  end

  p present.length

end

solution([2,1,1,2,3,1])

# https://codility.com/demo/results/trainingGGDU8D-SGK/
# 100%
